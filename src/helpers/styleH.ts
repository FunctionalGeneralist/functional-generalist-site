// Common functions that have to do with styles/CSS.

import {CSSProperties} from "react"
import {styleRules, lineStyles, smallColGap} from "../style/styles"
import { colors, hardSizes } from "../style/theme"

export const buildStyles = {
  // Generate different common types of grid container column types.
  gridColTemplateAndColGap: function (
    numCols: number | number[] | undefined,
    numChildren: number,
    colStyle: 'fixed' | 'min' | 'fit' | undefined,
    linesBetweenColumns: boolean | undefined,
    colGap: number,
    colTemplateOverride: string | undefined
  ): CSSProperties {
    let colSize = ""

    switch (colStyle) {
      case ("fixed"):
        colSize = "1fr"
        break
      case ("min"):
        colSize = "min-content"
        break
      case "fit":
        colSize = `fit-content(${styleRules.fitWidth})`
        break
      default:
        colSize = "1fr"
    }

    // colTemplate forces fr, min-content not allowed.
    if (Array.isArray(numCols)) {
      colSize = "1fr"
    }

    // colTemplate takes higher precendence than numCols, so numCols done first.
    let layout = ` ${colSize}`
    if (linesBetweenColumns) {
      layout = ` ${colSize} min-content`
    }

    let numContentCols = 0
    if (Array.isArray(numCols)) {
      numContentCols = numCols.length
    }
    else if (numCols === undefined) {
      numContentCols = numChildren
    }
    else if (numCols !== undefined) {
      numContentCols = numCols
    }

    let gridTemplateCols = ""
    for (let i = 0; i < numContentCols; i++) {
      // Don't put a line at the end, only in between.
      if (i === numContentCols - 1 && !!linesBetweenColumns) {
        gridTemplateCols += ` ${colSize}`
      }
      else {
        gridTemplateCols += layout
      }
    }

    if (Array.isArray(numCols)) {
      gridTemplateCols = ""
      numCols.forEach(item => {
        gridTemplateCols += `${item}fr `
      })
    }

    let columnGap = `${colGap}px`
    if (colGap === undefined) {
      columnGap = colGap
    }
    else if (colGap !== undefined) {
      columnGap = `${colGap}px`
    }
    else if (!!linesBetweenColumns) {
      columnGap = `${(extractIntFromPx(smallColGap) - (lineStyles.thicknessInt / 2))}px`
    }

    // If user has provided "gridColTemplateOverride", that does away with all this stuff and just uses their value for the css prop GridTemplateColumns.
    if (colTemplateOverride !== undefined)
      gridTemplateCols = colTemplateOverride

    return {gridTemplateColumns: gridTemplateCols, columnGap: columnGap}
  },

  gridRows: function (numRows: number | undefined, rowStyle?: "min" | undefined): CSSProperties {
    let rowBuildStyle = ""
    switch (rowStyle) {
      case "min":
        rowBuildStyle = "min-content"
        break
      default:
        rowBuildStyle = "1fr"
    }

    if (numRows === undefined)
      return {gridTemplateRows: rowBuildStyle}

    let rowTemplateStr = ""
    for (let i = 0; i < numRows; i++)
      rowTemplateStr += `${rowBuildStyle} `

    return {gridTemplateRows: rowTemplateStr}
  },

  border: function (borderColor: string | undefined, borderStyle?: string, borderThickness?: string) {
    if (borderThickness === undefined)
      borderThickness = hardSizes.lines.thin
    if (borderStyle === undefined)
      borderStyle = "solid"
    if (borderColor === undefined)
      borderColor = colors.lines.primary

    return `${borderThickness} ${borderStyle} ${borderColor}`
  }
}

export function extractIntFromPx(pixelValue: string) {
  return Number(pixelValue.substring(0, pixelValue.length - 2))
}
