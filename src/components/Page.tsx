import StyleSheetCSS from "../types/Style"
import {setGridAreas, spacerSizes, usedSpacerSizes} from "../style/theme"
import {styleRules} from "../style/styles"
import {isUndefinedOrBlank} from "../helpers/strH"
import Title, {TitleProps} from "./Title"
import ContainerGrid from "./ContainerGrid"
import {CommonProps, ContainerProps} from "../types/CommonProps"
import ElementSpacer from "./ElementSpacer"

interface Props extends TitleProps, ContainerProps {
  children: any
  numContentCols?: CommonProps["numCols"]
}

export default function Page(props: Props) {
  const styles: StyleSheetCSS = {
    container: {
      display: "grid",
      height: "100%",
      width: "100%",
      boxSizing: "border-box",
      gridTemplateColumns: "1fr",
      gridTemplateRows: (isUndefinedOrBlank(props.titleText)) ? "min-content" : "min-content min-content",
      gridTemplateAreas:
        `
          ${setGridAreas.pageTitle}
          ${setGridAreas.pageTitleBreadcrumb}
          ${setGridAreas.pageContent}
        `,
    },
  }

  return (
    <div style={styles.container}>

      {props.titleText === undefined ?
        null
        :
        <div style={styles.titleContainer}>
          <Title
            titleText={props.titleText}
            titleType={props.titleType === undefined ? "page" : props.titleType}
            titleGridArea={setGridAreas.pageTitle}
            subtitleText={props.subtitleText}
            italicizeSubtitle={props.italicizeSubtitle}
            additionalSubtitleText={props.additionalSubtitleText}
            italicizeAddSubtitle={props.italicizeAddSubtitle}
            subtitleElement={props.subtitleElement}
            addFollowingLine={props.addFollowingLine}/>

        </div>
      }
      <ContainerGrid numCols={props.numContentCols === undefined ? 1 : props.numContentCols}>
        {props.children}

      </ContainerGrid>

    </div>
  )
}