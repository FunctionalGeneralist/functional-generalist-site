// Sitewide settings regarding style/CSS type stuff.

const scale = 1
const baseSize = 16 // Should be the size of "normal" sized paragraph text and base8 for good measure.

// Dictates how much smaller or larger a gap is compared to "standard".
const standardMult = 1 // Can use this to change spacing in a broad, relatively cohesive way.

const tinyDivider = 4
const smallDivider = 2
const colGapMult = standardMult
const rowGapMult = standardMult * 1.5 // I find these gaps look better when larger than their vertical counterparts.
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

// Values used for responsive behavior I want. See function "calcAppColumnWidths()" for some additional detail.
export const normalContentWidth = 958 // Px size of content on a 1920px screen.
export const contentWidthPercentageOfHugeWindow = 0.7
export const smallScreenWidthInt = 520
export const smallScreenWidth = `${smallScreenWidthInt}px`

export const styleRules = {
  fullWidthContentCols: "6fr 20fr 6fr",
  screenIsSmallContentCols: `${colGap} 1fr ${colGap}`,

  internalPadding: baseGap,
  fitWidth: "2560px", // Arbitrary value, for now.
  borderRadius: "4px",
  siteTitleOffset: -3,
  zIndexes: {
    imageOverlay: 10
  }
}

export const lineStyles = {
  thicknessInt: 1,
  thickness: "1px"
}
