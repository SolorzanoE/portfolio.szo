import assert from "node:assert/strict"
import test from "node:test"
import { getColorTokens } from "../src/design-system/tokens/colors.js"

test("keeps the accent token structured in every color scheme", () => {
  /** @type {Array<"light"|"dark">} */
  const modes = ["light", "dark"]

  for (const mode of modes) {
    const tokens = getColorTokens(mode)

    assert.equal(typeof tokens.accent, "object")
    assert.match(tokens.accent.main, /^#|^rgba?\(/)
    assert.match(tokens.accent.contrast, /^#|^rgba?\(/)
    assert.equal(tokens.accentColor, tokens.accent.main)
  }
})
