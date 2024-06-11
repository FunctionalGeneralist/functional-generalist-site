import {useAtom, useAtomValue} from "jotai"
import {ReactElement, useEffect, useState} from "react"
import {screenIsSmallAtom, sidebarContentAtom, sidebarIsCollapsedAtom, sidebarIsHiddenAtom} from "../atoms"
import {smallColGap, smallRowGap, styleRules, tinyColGap} from "../style/styles"
import {borderRadii, colors, durations, hardSizes, setGridAreas, usedSpacerSizes} from "../style/theme"
import ContainerGrid from "./ContainerGrid"
import RightChevron from "../assets/right-chevron.svg"
import LeftChevron from "../assets/left-chevron.svg"
import ElementIcon from "./ElementIcon"
import Title from "./Title"
import ElementSpacer from "./ElementSpacer"
import {extractIntFromPx} from "../helpers/styleH"
import StyleSheetCSS from "../types/Style"

export default function Sidebar() {
  const [isChevronHovered, setIsChevronHovered] = useState(false)
  const chevronWidthInt = extractIntFromPx(hardSizes.icon.medium)

  const [sidebarIsHidden, setSidebarIsHidden] = useAtom(sidebarIsHiddenAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)
  const content = useAtomValue(sidebarContentAtom)
  const screenIsSmall = useAtomValue(screenIsSmallAtom)

  function chevronHoverHandler(e: React.MouseEvent<HTMLElement, MouseEvent>, isBeingHovered: boolean) {
    setIsChevronHovered(isBeingHovered)
  }

  function chevronClickHandler(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setSidebarIsCollapsed(!sidebarIsCollapsed)
  }

  const styles: StyleSheetCSS = {
    container: {
      display: "grid",
      gridTemplateRows: "min-content 1fr",
      alignContent: "start",
    }
  }

  return (
    <div style={styles.container}>
      {/*Keeps the sidebar's space to work with responsive jazz*/}
      <ElementSpacer
        heightOverride={`${extractIntFromPx(usedSpacerSizes.headerAndPageContentInt)}px`}
        widthOverride={hardSizes.sidebarWidth}/>

      <ContainerGrid
        position="sticky"
        zIndex={styleRules.zIndexes.sidebar}
        gridColTemplateOverride="1fr min-content"
        colGap={"0"}
        top={`${extractIntFromPx(usedSpacerSizes.headerAndPageContentInt)}px`}
        numRows={1}
        minHeight={"300px"}
        minWidth={sidebarIsCollapsed ? "16px" : `${hardSizes.sidebarWidthInt}px`}
        maxWidth={sidebarIsCollapsed ? "16px" : `${hardSizes.sidebarWidthInt}px`}
        isMinContentHigh={true}
        backgroundColor={colors.containers.nav}
        isDisplayNone={sidebarIsHidden}
        borderRadius={`0 ${borderRadii.base} ${borderRadii.base} 0`}
        transitionDur={150}>
        <ContainerGrid
          numCols={1}
          isInvis={sidebarIsCollapsed ? true : false}
          justifyItems="left"
          rowStyle="min"
          alignContent="start"
          rowGap={smallRowGap}
          minWidth={sidebarIsCollapsed ? "0" : "100%"}
          maxWidth={sidebarIsCollapsed ? "0" : "100%"}
          transitionDur={sidebarIsCollapsed ? 0 : 250}
          isDisplayNone={sidebarIsCollapsed ? true : false}
          padding={`${styleRules.internalPadding} ${smallColGap}`}>
          <Title titleText="Contextual Stuff" titleType="small" justifyTitle="center" addFollowingLine={true} />
          {content}

        </ContainerGrid>

        <ContainerGrid
          hoverHandler={chevronHoverHandler}
          clickHandler={chevronClickHandler}
          backgroundColor={isChevronHovered ? colors.highlight.containerHighlight : colors.containers.secondary}
          borderRadius={`0 ${styleRules.borderRadius} ${styleRules.borderRadius} 0`}
          cursor="pointer">
          <ElementIcon
            image={sidebarIsCollapsed ? RightChevron : LeftChevron}
            size="medium"
            alt="a single chevron, similar to an arrow" />

        </ContainerGrid>

      </ContainerGrid>

    </div>
  )
}