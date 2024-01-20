import { lineStyles } from "../style/styles"
import { colors } from "../style/theme"
import StyleSheetCSS from "../types/Style"

interface Props {
  type: "horizontal" | "vertical"
}
 
export default function Line(props: Props) {
  const styles: StyleSheetCSS = {
    container: {
      height: props.type === "vertical" ? "100%" : "0%",
      width: props.type === "horizontal" ? "100%" : "0%",
      borderColor: colors.lines.primary,
      borderStyle: "solid",
      borderWidth: lineStyles.thickness
    }
  }

  return (
    <div style={styles.container} />
  )
}