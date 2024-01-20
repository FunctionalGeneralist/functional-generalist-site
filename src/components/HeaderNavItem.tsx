import {colors, fontSizes, fontWeights} from "../style/theme"
import StyleSheetCSS from "../types/Style"
import ContainerGrid from "../components/ContainerGrid"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface Props {
  displayText: string
  path: string
}

export default function HeaderNavItem(props: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const styles: StyleSheetCSS = {
    text: {
      color: isHovered ? colors.highlight.textActive : colors.text.primary,
      fontSize: fontSizes.mediumLarge,
      whiteSpace: "nowrap",
      fontWeight: fontWeights.mediumHeavy,
      cursor: "pointer",
    }
  }

  return (
    <ContainerGrid colStyle="fit" rowStyle="min">
      <label
        style={styles.text}
        onClick={() => navigate(props.path)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.displayText}
      </label>
    </ContainerGrid>
  )
}