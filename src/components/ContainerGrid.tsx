import React, { Children, useEffect, useState } from "react"
import { buildStyles, extractIntFromPx } from "../helpers/styleH"
import {colGap, rowGap, styleRules} from "../style/styles"
import { colors, durations, hardSizes } from "../style/theme"
import {ContainerProps, InteractableProps, CommonProps, AnimationProps } from "../types/CommonProps"
import StyleSheetCSS from "../types/Style"
import Line from "./Line"

interface Props extends ContainerProps, InteractableProps, AnimationProps {
  gridArea?: string
  gridTemplateAreas?: string
  gridColumnStart?: number
  gridRowStart?: number
  gridColumnEnd?: number
  gridRowEnd?: number

  // A number gives that number of columns, all 1fr, and arr gives arr.length amount 
  // of cols with fr widths.So[1, 3, 4] gives you "1fr 3fr 4fr"
  numCols?: CommonProps["numCols"]
  gridColTemplateOverride?: string // To be rarely used, overrides several useful props.
  numRows?: number

  colStyle?: 'fixed' | 'min' | 'fit' | undefined
  colGap?: string

  rowStyle?: 'min'
  rowGap?: string

  linesBetweenCols?: boolean
}

export default function ContainerGrid(props: Props) {
  const [isHovered, setIsHovered] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.clickHandler !== undefined)
      props.clickHandler(e)

    if (props.externalLink && props.dontOpenNewTab)
      window.location.href = props.externalLink
    else if (props.externalLink)
      window.open(props.externalLink)
  }

  function handleHover(e: React.MouseEvent<HTMLDivElement, MouseEvent>, isBeingHovered: boolean) {
    if (props.hoverHandler !== undefined)
      props.hoverHandler(e, isBeingHovered)

    if (props.enableDefaultHoverBehavior)
      setIsHovered(isBeingHovered)
  }

  let numCols = 0
  if (props.numCols === undefined || Array.isArray(props.numCols)) {
    numCols = React.Children.count(props.children)
  }
  else {
    numCols = props.numCols
  }

  const styles: StyleSheetCSS = {
    container: {
      opacity: props.isInvis === true ? "0" : "100",
      filter: isHovered ? "brightness(1.15)" : undefined,
      display: props.isDisplayNone === true ? "none" : "grid",
      position: props.position,
      top: props.top,
      left: props.left,
      gridArea: props.gridArea,
      gridTemplateAreas: props.gridArea === undefined ? props.gridTemplateAreas : props.gridArea,
      gridColumnStart: props.gridArea === undefined ? props.gridColumnStart : props.gridArea,
      gridRowStart: props.gridArea === undefined ? props.gridRowStart : props.gridArea,
      gridColumnEnd: props.gridArea === undefined ? props.gridColumnEnd : props.gridArea,
      gridRowEnd: props.gridArea === undefined ? props.gridRowEnd : props.gridArea,
      backgroundColor: props.backgroundColor,
      width: "100%",
      minWidth: props.minWidth,
      maxWidth: props.maxWidth,
      boxSizing: "border-box",
      borderTop: (props.showAllBorders || props.showTopBorder) ? buildStyles.border(props.borderColor, props.borderStyle, props.borderThickness) : '0',
      borderRight: (props.showAllBorders || props.showRightBorder) ? buildStyles.border(props.borderColor, props.borderStyle, props.borderThickness) : '0',
      borderBottom: (props.showAllBorders || props.showBottomBorder) ? buildStyles.border(props.borderColor, props.borderStyle, props.borderThickness) : '0',
      borderLeft: (props.showAllBorders || props.showLeftBorder) ? buildStyles.border(props.borderColor, props.borderStyle, props.borderThickness) : '0',
      padding: props.padding === undefined ? "0" : props.padding,
      margin: props.margin, // Margin should be avoided at all costs. Don't let children push around other children, it's cruel.
      minHeight: props.minHeight,
      maxHeight: props.maxHeight,
      height: props.isMinContentHigh === true ? "min-content" : "100%",
      rowGap: props.rowGap === undefined ? rowGap : props.rowGap,
      justifyContent: props.justifyContent === undefined ? "center" : props.justifyContent,
      justifyItems: props.justifyItems === undefined ? "center" : props.justifyItems,
      justifySelf: props.justifySelf,
      alignContent: props.alignContent === undefined ? "center" : props.alignContent,
      alignItems: props.alignItems === undefined ? "center" : props.alignItems,
      alignSelf: props.alignSelf,
      borderRadius: props.borderRadius === undefined ? styleRules.borderRadius : props.borderRadius,
      zIndex: props.zIndex,
      transition: props.transitionDur === undefined ? `${durations.defaultTransition}ms` : `${props.transitionDur}ms`,
      cursor: props.cursor === undefined ? "default" : props.cursor,
      ...buildStyles.gridRows(props.numRows, props.rowStyle),
      ...buildStyles.gridColTemplateAndColGap(
        props.numCols,
        Children.count(props.children),
        props.colStyle,
        props.linesBetweenCols,
        props.colGap === undefined ? extractIntFromPx(colGap) : extractIntFromPx(props.colGap),
        props.gridColTemplateOverride
      )
    }
  }

  if (props.linesBetweenCols) {
    return (
      <div
        ref={props.reference}
        style={styles.container}
        onClick={e => handleClick(e)}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        {React.Children.map(props.children, (item, index) => {
          if (index % numCols === numCols - 1) {
            return item
          }
          else {
            return (
              <>
                {item}
                <Line type="vertical" />
              </>
            )
          }
        })}
      </div>
    )
  }
  else {
    return (
      <div
        style={styles.container}
        onClick={e => handleClick(e)}
        ref={props.reference}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        {props.children}
      </div>
    )
  }

}
