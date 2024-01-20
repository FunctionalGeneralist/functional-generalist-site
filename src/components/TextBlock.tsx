import { ReactElement } from "react";
import { styleRules } from "../style/styles";
import { colors, fontSizes } from "../style/theme";
import StyleSheetCSS from "../types/Style";
import ContainerGrid from "./ContainerGrid";

interface Props {
  text: ReactElement
  titleText?: string
}

export default function TextBlock(props: Props) {
  const styles: StyleSheetCSS = {
    title: {
      fontSize: fontSizes.large,
      color: colors.text.primary,
      textAlign: "left"
    }
  }

  return (
    <ContainerGrid
      numCols={1}
      rowStyle="min"
      padding={props.titleText === undefined ? `0` : `${styleRules.internalPadding} 0 0 0`}
      justifyItems="left"
      alignContent="start"
      isMinContentHigh={true}>

      {props.titleText === undefined ? null : <h4 style={styles.title}>{props.titleText}</h4>}

      <p style={styles.text}>{props.text}</p>

    </ContainerGrid>
  )
}