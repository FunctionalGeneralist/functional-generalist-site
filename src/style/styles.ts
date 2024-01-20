// Sitewide settings regarding style/CSS type stuff.

const scale = 1
const baseSize = 16 // Should be the size of "normal" sized paragraph text and base8 for good measure, should still work well with non base8 but will have weird edge cases.

// Dictates how much smaller or larger a gap is compared to "standard".
const tinyDivider = 4
const smallDivider = 2
const standardMult = 1 // Can use this to change spacing in a broad, cohesive way that might still be really bad, but it's another tool to find the right look.
const colGapMult = standardMult
const rowGapMult = standardMult * 1.5 // These gaps look better when larger than their vertical counterparts.
const largeMult = 2
const xLargeMult = 4

export const baseGap = `${(baseSize * scale * standardMult)}px`

export const tinyColGap = `${(baseSize * scale * colGapMult) / tinyDivider}px`
export const smallColGap = `${(baseSize * scale * colGapMult) / smallDivider}px`
export const colGap = `${(baseSize * scale * colGapMult)}px`
export const largeColGap = `${(baseSize * scale * colGapMult) * largeMult}px`
export const xLargeColGap = `${(baseSize * scale * colGapMult) * xLargeMult}px`

export const tinyRowGap = `${(baseSize * scale * rowGapMult) / tinyDivider}px`
export const smallRowGap = `${(baseSize * scale * rowGapMult) / smallDivider}px`
export const rowGap = `${(baseSize * scale * rowGapMult)}px`
export const largeRowGap = `${(baseSize * scale * rowGapMult) * largeMult}px`
export const xLargeRowGap = `${(baseSize * scale * rowGapMult) * xLargeMult}px`

export const smallScreenWidthInt = 520
export const smallScreenWidth = `${smallScreenWidthInt}px`


export const styleRules = {
  internalPadding: baseGap,
  fitWidth: "2560px", // Arbitrary value, for now.
  borderRadius: "4px",
  fullWidthContentCols: "6fr 20fr 6fr",
  screenIsSmallContentCols: `${colGap} 1fr ${colGap}`,
  mouseoverTimeUntilPopup: 100,
  siteTitleOffset: -3,
  zIndexes: {
    imageOverlay: 10
  }
}

export const lineStyles = {
  thicknessInt: 1,
  thickness: "1px"
}
