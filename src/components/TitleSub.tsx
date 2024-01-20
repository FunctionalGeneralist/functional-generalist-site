import { TitleProps } from "../components/Title"
import StyleSheetCSS from "../types/Style"
import { fontSizes, colors, fontWeights } from "../style/theme"
import ContainerGrid from "./ContainerGrid"

interface Props extends TitleProps {

}

export default function TitleSub(props: Props) {
  const styles: StyleSheetCSS = {
    subtitle: {
      display: "grid",
      fontSize: fontSizes.smallMedium,
      fontWeight: fontWeights.medium,
      color: colors.text.secondary,
      justifySelf: "left",
      cursor: "default",
    }
  }

  if (props.italicizeSubtitle)
    return <ContainerGrid alignContent="start"><h3 style={styles.subtitle}><i>{props.titleText}</i></h3></ContainerGrid>
  else
    return <ContainerGrid alignContent="start"><h3 style={styles.subtitle}>{props.titleText}</h3></ContainerGrid>
}