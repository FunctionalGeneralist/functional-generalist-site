import { ReactElement } from "react";
import { fontSizes } from "../style/theme";
import StyleSheetCSS from "../types/Style";
import ContainerGrid from "./ContainerGrid";

interface Props {
  text: string
}

export default function TextQuoteBlock(props: Props) {
  const styles: StyleSheetCSS = {
    quote: {
      fontSize: fontSizes.mediumLarge
    }
  }

  return (
    <ContainerGrid>
      <p style={styles.quote}><strong><i>{props.text}</i></strong></p>
    </ContainerGrid>
  )
}