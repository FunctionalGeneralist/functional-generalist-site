import {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom"
import {styleRules, tinyRowGap} from "../style/styles"
import {colors} from "../style/theme"
import {InteractableProps} from "../types/CommonProps"
import StyleSheetCSS from "../types/Style"
import ContainerGrid from "./ContainerGrid"
import Title from "./Title"
import TitleSub from "./TitleSub"

interface Props extends InteractableProps {
  image: any
  altDescription: string
  padImage?: boolean

  overlayText?: string
  showOverlayAfterHover?: true // As opposed to before hover.
  limitMaskToText?: boolean
  subtitleText?: string
  italicizeSubtitle?: boolean

  maintainThisAspectRatio?: number // If given a number, will multiply it against the height as elem resizes to maintain aspect ratio. Still working on this feature 2024/01/19.
}

export default function CardImage(props: Props) {
  const [isHovered, setIsHovered] = useState(false)
  // The two below are used to maintain aspect ratio, if that's specified.
  const containerWidthRef = useRef<HTMLDivElement | null>(null)
  const [containerCurrentWidth, setContainerCurrentWidth] = useState<number | null>(null)
  const navigate = useNavigate()

  function clickHandler(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (props.navigateLocation !== undefined)
      navigate(props.navigateLocation)
  }

  function hoverHandler(e: React.MouseEvent<HTMLElement, MouseEvent>, isElemHovered: boolean) {
    if (props.enableDefaultHoverBehavior)
      setIsHovered(isElemHovered)
  }

  const alwaysPresentOverlay = (
    <ContainerGrid
      gridRowStart={1}
      gridColumnStart={1}
      maxHeight={props.limitMaskToText ? "35%" : undefined}
      alignSelf={props.limitMaskToText ? "start" : undefined}
      backgroundColor={isHovered ? colors.containers.transparentMaskHovered : colors.containers.transparentMask}
      zIndex={styleRules.zIndexes.imageOverlay}
      cursor="pointer">
      <ContainerGrid
        padding={styleRules.internalPadding}
        cursor="pointer"
        alignItems="center">
        <Title
          titleText={props.overlayText}
          titleType="imageOverlay"
          justifyTitle="center"
          cursor="pointer"/>

      </ContainerGrid>

    </ContainerGrid>
  )

  const overlayAfterHover = (

    <ContainerGrid
      gridRowStart={1}
      gridColumnStart={1}
      isMinContentHigh={props.limitMaskToText ? true : false}
      alignSelf={props.limitMaskToText ? "start" : undefined}
      backgroundColor={colors.containers.transparentMaskHovered}
      zIndex={styleRules.zIndexes.imageOverlay}
      cursor="pointer"
      isInvis={isHovered ? false : true}>
      <ContainerGrid padding={styleRules.internalPadding} cursor="pointer" alignItems="center">
        <Title
          titleText={props.overlayText}
          titleType="imageOverlay"
          justifyTitle="center"
          cursor="pointer"/>

      </ContainerGrid>

    </ContainerGrid>
  )

  useEffect(() => {
    if (props.maintainThisAspectRatio !== undefined) {
      setContainerCurrentWidth(containerWidthRef.current && containerWidthRef.current.offsetHeight)
    }
  }, [props.maintainThisAspectRatio])

  function renderOverlay() {
    if (props.overlayText !== undefined && props.showOverlayAfterHover !== true)
      return alwaysPresentOverlay
    else if (props.overlayText !== undefined && props.showOverlayAfterHover)
      return overlayAfterHover
    else
      return null
  }

  const styles: StyleSheetCSS = {
    image: {
      borderRadius: styleRules.borderRadius,
      cursor: (props.externalLink !== undefined || props.navigateLocation !== undefined) ? "pointer" : "default"
    }
  }

  return (
    <ContainerGrid
      numCols={1}
      isMinContentHigh={true}
      alignSelf="start"
      cursor={(props.externalLink !== undefined || props.navigateLocation !== undefined) ? "pointer" : "default"}
      borderRadius={styleRules.borderRadius}
      rowGap={tinyRowGap}
      colGap={"0px"}>
      <ContainerGrid
        backgroundColor={colors.containers.primary}
        borderRadius={styleRules.borderRadius}
        numCols={1}
        colGap={"0px"}
        rowGap={"0px"}
        clickHandler={clickHandler}
        hoverHandler={hoverHandler}
        enableDefaultHoverBehavior={props.enableDefaultHoverBehavior}
        externalLink={props.externalLink}
        dontOpenNewTab={props.dontOpenNewTab}
        reference={containerWidthRef}
        minWidth={"150px"}
        maxHeight={(props.maintainThisAspectRatio !== undefined && containerCurrentWidth !== null) ? `${containerCurrentWidth * props.maintainThisAspectRatio}px` : undefined}>
        <ContainerGrid
          gridRowStart={1}
          gridColumnStart={1}
          borderRadius={styleRules.borderRadius}
          padding={props.padImage ? styleRules.internalPadding : "0"}
          minWidth={"150px"}
          maxHeight={(props.maintainThisAspectRatio !== undefined && containerCurrentWidth !== null) ? `${containerCurrentWidth * props.maintainThisAspectRatio}px` : undefined}>
          <img
            src={props.image}
            alt={props.altDescription}
            style={styles.image}
            height="100%"
            width="100%"/>

        </ContainerGrid>

        {renderOverlay()}

      </ContainerGrid>

      {props.subtitleText && <TitleSub titleText={props.subtitleText} italicizeSubtitle={true} />}

    </ContainerGrid>
  )
}