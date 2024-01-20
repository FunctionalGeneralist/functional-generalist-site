import ContainerGrid from "../components/ContainerGrid"
import {durations, fontSizes} from "../style/theme"
import StyleSheetCSS from "../types/Style"
import TitleSub from "../components/TitleSub"
import {styleRules, tinyRowGap} from "../style/styles"
import {ReactNode, useEffect, useState} from "react"
import Line from "./Line"
import {AnimationProps} from "../types/CommonProps"

export interface TitleProps {
  elementIsVisible?: boolean // Value of false turns opacity to 0, otherwise 100.

  titleText?: string
  titleType?: "page" | "card" | "imageOverlay" | "small" | "site"
  titleGridArea?: string
  justifyTitle?: "left" | "center" | "right"

  cursor?: "default" | "pointer"

  subtitleText?: string
  italicizeSubtitle?: boolean
  additionalSubtitleText?: string
  italicizeAddSubtitle?: boolean
  subtitleElement?: ReactNode

  addFollowingLine?: true // Adds a line below the title and all the elements.
}

interface Props extends TitleProps, AnimationProps {

}

export default function Title(props: Props) {
  const commonStyles: StyleSheetCSS = {
    titles: {
      textAlign: props.justifyTitle,
      cursor: props.cursor === undefined ? "default" : props.cursor,
      transitionDuration: props.transitionDur === undefined ? `${durations.defaultTransition}` : `${props.transitionDur}`
    }
  }

  const siteTitle = (
    <h1
      style={{
        height: "min-content",
        ...commonStyles.titles
      }}>

      {props.titleText}

    </h1>
  )

  const pageTitle = (
    <h1
      style={{
        height: "min-content",
        ...commonStyles.titles
      }}>

      {props.titleText}

    </h1>
  )

  const cardTitle = (
    <h4
      style={{
        fontSize: fontSizes.large,
        height: "min-content",
        ...commonStyles.titles
      }}>

      {props.titleText}

    </h4>
  )

  const imageOverlayTitle = (
    <div style={{
      whiteSpace: "pre-wrap",
    }}>
      <h5
        style={{
          fontSize: "1.3vw", // Will be theme value
          ...commonStyles.titles
        }}>

        {props.titleText}

      </h5>
    </div>
  )

  const smallTitle = (
    <h5
      style={{
        fontSize: fontSizes.mediumLarge,
        height: "min-content",
        ...commonStyles.titles
      }}>

      {props.titleText}

    </h5>
  )

  const [titleElement, setTitleElement] = useState(pageTitle)

  useEffect(() => {
    switch (props.titleType) {
      case "site":
        setTitleElement(siteTitle)
        break
      case "page":
        setTitleElement(pageTitle)
        break
      case "card":
        setTitleElement(cardTitle)
        break
      case "imageOverlay":
        setTitleElement(imageOverlayTitle)
        break
      case "small":
        setTitleElement(smallTitle)
        break
      default:
        setTitleElement(pageTitle)
    }
  }, [props.titleType])

  return (
    <ContainerGrid
      numCols={1}
      padding={props.titleType === "page" ? `0 0 ${styleRules.internalPadding} 0` : "0"}
      alignItems="start"
      gridArea={props.titleGridArea}
      isMinContentHigh={true}
      justifyItems={props.justifyTitle === undefined ? "left" : props.justifyTitle}
      rowGap={tinyRowGap}>

      {titleElement}

      {props.subtitleText === undefined ? null : <TitleSub titleText={props.subtitleText} italicizeSubtitle={props.italicizeSubtitle} />}

      {props.additionalSubtitleText === undefined ? null : <TitleSub titleText={props.additionalSubtitleText} italicizeSubtitle={props.italicizeAddSubtitle} />}

      {props.subtitleElement}

      {props.addFollowingLine ? <Line type="horizontal" /> : null}

    </ContainerGrid>
  )
}