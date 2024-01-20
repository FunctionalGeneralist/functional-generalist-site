import { ContainerProps } from "../types/CommonProps"
import StyleSheetCSS from "../types/Style"
import { colors } from "../style/theme"
import { styleRules } from "../style/styles"
import ContainerGrid from "./ContainerGrid"
import Title, { TitleProps } from "../components/Title"

interface Props extends ContainerProps, TitleProps {
}

export default function CardPrimaryTitled(props: Props) {
  const styles: StyleSheetCSS = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr",
      width: "100%",
      height: "100%",
      backgroundColor: colors.containers.primary,
      padding: styleRules.internalPadding,
      borderRadius: styleRules.borderRadius,
      justifySelf: props.justifySelf === undefined ? "center" : props.justifySelf,
      justifyItems: props.justifyItems === undefined ? "center" : props.justifyItems,
      justifyContent: props.justifyContent === undefined ? "center" : props.justifyContent,
      alignSelf: props.alignSelf === undefined ? "start" : props.alignSelf,
      alignItems: props.alignItems === undefined ? "start" : props.alignItems,
      alignContent: props.alignContent === undefined ? "start" : props.alignContent,
    }
  }

  return (
    <div style={styles.container}>
      <Title
        titleText={props.titleText}
        titleGridArea={props.titleGridArea}
        justifyTitle={props.justifyTitle}
        subtitleText={props.subtitleText}
      />
      <ContainerGrid>
        {props.children}
      </ContainerGrid>
    </div>

  )
}