#!/usr/bin/env python3
"""
Fetch and update Open Graph preview image from Site Looker Atter API:
https://api.sitelookeratter.com/screenshot?url=https://portfolio-nu-murex-90.vercel.app&dark=true&scale=2
"""

import os
import sys
import urllib.request

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUTPUT_IMAGE = os.path.join(ROOT_DIR, "public", "og-image.png")
API_URL = "https://api.sitelookeratter.com/screenshot?url=https://portfolio-nu-murex-90.vercel.app&dark=true&scale=2"

def download_og_image():
    print(f"Fetching live snapshot from Site Looker Atter API: {API_URL}...")
    req = urllib.request.Request(
        API_URL,
        headers={"User-Agent": "Mozilla/5.0 (compatible; PortfolioOGFetcher/1.0)"}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status != 200:
                print(f"Error: API returned status {resp.status}", file=sys.stderr)
                sys.exit(1)
            content = resp.read()
            with open(OUTPUT_IMAGE, "wb") as f:
                f.write(content)
            print(f"Success! Saved to {OUTPUT_IMAGE} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed to download OG image: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    download_og_image()
