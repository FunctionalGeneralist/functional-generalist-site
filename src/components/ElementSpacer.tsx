import { useEffect, useState } from "react";
import {baseGap, colGap, largeColGap, largeRowGap, rowGap, smallColGap, smallRowGap, tinyColGap, tinyRowGap } from "../style/styles";
import { spacerSizes } from "../style/theme";
import { ContainerProps, InteractableProps } from "../types/CommonProps";
import ContainerGrid from "./ContainerGrid";

interface Props extends ContainerProps, InteractableProps {
  // Defaults to medium. "Nothing" lets the containers gap size handle it, not commonly used.
  size?: "nothing" | "tiny" | "small" | "medium" | "large" | "xLarge" 
  isHoz?: boolean // Gaps vertical by default.
  heightOverride?: string
  widthOverride?: string

  gridColumnStart?: number
  gridRowStart?: number
  gridColumnEnd?: number
  gridRowEnd?: number
}

export default function ElementSpacer(props: Props) {
  const [width, setWidth] = useState(baseGap)
  const [height, setHeight] = useState(baseGap)

  useEffect(() => {
    switch (props.size) {
      case "nothing":
        setWidth("0")
        setHeight("0")
        break
      case "tiny":
        setWidth(props.isHoz ? spacerSizes.tinyWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.smallHeight)
        break
      case "small":
        setWidth(props.isHoz ? spacerSizes.smallWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.smallHeight)
        break
      case "medium":
        setWidth(props.isHoz ? spacerSizes.mediumWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.mediumHeight)
        break
      case "large":
        setWidth(props.isHoz ? spacerSizes.largeWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.largeHeight)
        break
      case "xLarge":
        setWidth(props.isHoz ? spacerSizes.xLargeWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.xLargeHeight)
        break
      default:
        setWidth(props.isHoz ? spacerSizes.mediumWidth : "100%")
        setHeight(props.isHoz ? "100%" : spacerSizes.mediumWidth)
        break
    }
  }, [props.size, props.isHoz])

  
  return (
    <ContainerGrid
      minWidth={props.widthOverride === undefined ? width : props.widthOverride}
      maxWidth={props.widthOverride === undefined ? width : props.widthOverride}
      minHeight={props.heightOverride === undefined ? height : props.heightOverride}
      maxHeight={props.heightOverride === undefined ? height : props.heightOverride}
      showTopBorder={props.showTopBorder}
      showRightBorder={props.showRightBorder}
      showBottomBorder={props.showBottomBorder}
      showLeftBorder={props.showLeftBorder}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      gridColumnStart={props.gridColumnStart}
      gridColumnEnd={props.gridColumnEnd}
      gridRowStart={props.gridRowStart}
      gridRowEnd={props.gridRowEnd}
      clickHandler={props.clickHandler}
      reference={props.reference}
    >
      
    </ContainerGrid>
  )
}