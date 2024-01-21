import { castFrom } from "../helpers/typesH"
import { colGap, largeColGap, largeRowGap, rowGap, smallColGap, smallRowGap, tinyColGap, tinyRowGap, xLargeColGap, xLargeRowGap } from "./styles"

// All of the CSS stuff that make the site is here, with the exception of a few very minor things in index

// Only RGB values so opacity can be altered for specific purposes. Colors get darker the farther you go into their array.
const gradients = {
  black: [
    "19, 21, 22",
    "31, 31, 31",
    "40, 43, 45",
    "50, 54, 56",
    "69, 74, 77",
  ],
  white: [
    "255, 255, 255",
    "222, 222, 222",
    "192, 192, 192",
    "",
    "",
  ],
  blue: [
    "",
    "0, 150, 255",
    "",
    "",
    ""
  ]
}

export const colors = {
  containers: {
    app: `rgb(${gradients.black[0]})`,
    primary: `rgb(${gradients.black[1]})`,
    secondary: `rgb(${gradients.black[3]})`,
    nav: `rgb(${gradients.black[1]})`,
    transparentMask: `rgba(${gradients.black[4]}, 0.65)`,
    transparentMaskHovered: `rgba(${gradients.black[4]}, 0.95)`,
  },
  highlight: {
    inactive: `rgba(${gradients.black[2]}, 0.6)`,
    containerHighlight: `rgb(${gradients.black[4]})`,
    textActive: `rgb(${gradients.white[0]})`,
  },
  text: {
    primary: `rgb(${gradients.white[1]})`,
    secondary: `rgb(${gradients.white[1]})`,
    link: `rgb(${gradients.blue[1]})`
  },
  lines: {
    primary: `rgb(${gradients.black[4]})`
  }
}

// Elements that use these values don't change size responsively. 
// Meant for rather small elements, like button icons, or the header and footer height.
export const hardSizes = {
  icon: {
    tiny: "16px",
    small: "24px",
    medium: "32px"
  },
  header: "60px",
  headerBottomBorder: "2px",
  lines: { // Lines being borders or Line components.
    veryThin: "1px",
    thin: "2px"
  },
  sidebarWidth: "240px",
  sidebarWidthInt: 240
}

export const fontSizes = {
  smallMedium: "0.95rem",
  medium: "1rem",
  mediumLarge: "1.2rem",
  mediumXLarge: "1.4rem",
  large: "2rem",
  xlarge: "3rem",
}

export const fontWeights = {
  light: 300,
  medium: 500,
  mediumHeavy: 700
}

export const textStyles = {
  body: {
    color: colors.text.primary,
    fontSize: fontSizes.medium
  }
}

export const borderRadii = {
  base: "12px",
  baseInt: 12
}

export const setGridAreas = {
  appHeader: "app-header",
  appSidebar: "app-sidebar",
  appContent: "app-content",
  appFooter: "app-footer",
  empty: "empty",
  pageTitle: "page-title",
  pageTitleBreadcrumb: "page-title-breadcrumb",
  pageContent: "page-content"
}

// Time is in ms.
export const durations = {
  defaultTransition: 85,
  hoverChanges: 85,
}

// Sizes that ElementSpacer uses. "hozTiny" would be a tiny horizontal spacer.
export const spacerSizes = { 
  tinyWidth: tinyColGap,
  smallWidth: smallColGap,
  mediumWidth: colGap,
  largeWidth: largeColGap,
  xLargeWidth: xLargeColGap,

  tinyHeight: tinyRowGap,
  smallHeight: smallRowGap,
  mediumHeight: rowGap,
  largeHeight: largeRowGap,
  xLargeHeight: xLargeRowGap,
}

// Keeping ElementSpacers whose size affects calculations in components here.
// Valid values are the "size" prop for ElementSpacer, which are "tiny", "small", "medium", "large", "xLarge".
// Naming convention is "ElementOneAndElementTwo".
export const usedSpacerSizes = {
  headerAndPageContent: castFrom.stringTo.size("large"),
  headerAndPageContentInt: spacerSizes.largeHeight,
  pageContentAndFooter: castFrom.stringTo.size("large"),
  pageContentAndFooterInt: spacerSizes.largeHeight,
}
