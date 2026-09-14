#!/usr/bin/env python3
"""
Fetch and update Open Graph preview image from Site Looker Atter API:
https://api.sitelookeratter.com/screenshot?url=<public-url>&dark=true&scale=2
"""

import os
import sys
import tempfile
import time
from urllib.parse import urlencode
import urllib.request

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUTPUT_IMAGE = os.path.join(ROOT_DIR, "public", "og-image.png")
PUBLIC_URL = "https://solorzanoszo.vercel.app"
API_BASE_URL = "https://api.sitelookeratter.com/screenshot"
MAX_IMAGE_BYTES = 10 * 1024 * 1024
REQUEST_TIMEOUT_SECONDS = 30
PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"


def build_api_url():
    # A unique query parameter avoids stale screenshots in the API and CDN.
    target_url = f"{PUBLIC_URL}/?og_version={int(time.time())}"
    query = urlencode({"url": target_url, "dark": "true", "scale": "2"})
    return f"{API_BASE_URL}?{query}"


def download_og_image():
    api_url = build_api_url()
    print(f"Fetching live snapshot from Site Looker Atter API: {api_url}...")
    req = urllib.request.Request(
        api_url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; PortfolioOGFetcher/1.0)"}
    )
    temporary_path = None
    try:
        with urllib.request.urlopen(req, timeout=REQUEST_TIMEOUT_SECONDS) as resp:
            if resp.status != 200:
                print(f"Error: API returned status {resp.status}", file=sys.stderr)
                sys.exit(1)

            content_length = resp.headers.get("Content-Length")
            if content_length and int(content_length) > MAX_IMAGE_BYTES:
                raise ValueError("API response exceeds the 10 MB image limit")

            total_bytes = 0
            with tempfile.NamedTemporaryFile(
                mode="wb",
                dir=os.path.dirname(OUTPUT_IMAGE),
                prefix=".og-image-",
                suffix=".tmp",
                delete=False,
            ) as temporary_file:
                temporary_path = temporary_file.name
                while chunk := resp.read(64 * 1024):
                    total_bytes += len(chunk)
                    if total_bytes > MAX_IMAGE_BYTES:
                        raise ValueError("API response exceeds the 10 MB image limit")
                    temporary_file.write(chunk)

            with open(temporary_path, "rb") as temporary_file:
                if temporary_file.read(len(PNG_SIGNATURE)) != PNG_SIGNATURE:
                    raise ValueError("API response is not a valid PNG image")

            os.replace(temporary_path, OUTPUT_IMAGE)
            temporary_path = None
            print(f"Success! Saved to {OUTPUT_IMAGE} ({total_bytes} bytes)")
    except Exception as e:
        print(f"Failed to download OG image: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        if temporary_path and os.path.exists(temporary_path):
            os.unlink(temporary_path)

if __name__ == "__main__":
    download_og_image()
