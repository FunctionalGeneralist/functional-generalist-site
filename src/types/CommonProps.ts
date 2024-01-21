import React, { MutableRefObject } from "react"

export interface InteractableProps {
  highlightOnHover?: false
  enableDefaultHoverBehavior?: true

  navigateLocation?: string // Will navigate to this site slug.
  externalLink?: string // Provide this to navigate user to this external URL. Opens new tab by default, below prop changes that.
  dontOpenNewTab?: true

  clickHandler?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  hoverHandler?: (e: React.MouseEvent<HTMLElement, MouseEvent>, isBeingHovered: boolean) => void
  cleanupFunc?: () => void
}

// These are prop values common across components, here so change is only in one place.
export interface CommonPropValues {
  size: "tiny" | "small" | "medium" | "large" | "xLarge"
}

export interface ContainerProps {
  children?: any

  cursor?: "default" | "pointer"

  justifySelf?: "left" | "center" | "right"
  justifyItems?: "left" | "center" | "right"
  justifyContent?: "left" | "center" | "right"
  alignSelf?: "start" | "center" | "end"
  alignItems?: "start" | "center" | "end"
  alignContent?: "start" | "center" | "end"

  backgroundColor?: string

  padding?: string
  margin?: string // Margin to be avoided in 99.9% of cases, use padding in the parent instead. Trust ContainerGrid to provide all you need.
  borderRadius?: string
  borderThickness?: string // Defaults to 2px.
  borderColor?: "primary" | string // The string should be used as a rare override, things agnostic to the theme color palette. Add more "line" colors for theme lines.
  borderStyle?: string // Defaults to solid.
  showAllBorders?: boolean
  showTopBorder?: boolean
  showRightBorder?: boolean
  showBottomBorder?: boolean
  showLeftBorder?: boolean

  // These are the CSS properties "left", "top", etc.
  left?: string
  top?: string

  minHeight?: string
  maxHeight?: string
  minWidth?: string
  maxWidth?: string
  isMinContentHigh?: boolean

  position?: "absolute"
  isInvis?: boolean
  isDisplayNone?: boolean
  zIndex?: number

  reference?: MutableRefObject<HTMLDivElement | null>
}

export interface AnimationProps {
  transitionDur?: number
}

// Deprecated, will be removed.
export interface CommonProps {
  numCols?: number | number[]
}
