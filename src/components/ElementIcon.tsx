import { useState } from "react";
import HelpIcon from "../assets/helpIcon.svg"
import { hardSizes } from "../style/theme";
import { InteractableProps } from "../types/CommonProps";
import StyleSheetCSS from "../types/Style";

interface Props extends InteractableProps {
  image: any
  size: "tiny" | "small" | "medium"
  alt: string

  gridArea?: string
  alignSelf?: "start" | "center" | "end"

  cursor?: string
  difIconOnHover?: any
}

// Hover to change icon doesn't currently work.
export default function ElementIcon(props: Props) {
  const [isHovered, setIsHovered] = useState(false);

  function clickHandler(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (props.clickHandler !== undefined)
      props.clickHandler(e)
  }

  function handleIconSize() {
    switch (props.size) {
      case "tiny":
        return {height: hardSizes.icon.tiny, width: hardSizes.icon.tiny}
      case "small":
        return {height: hardSizes.icon.small, width: hardSizes.icon.small}
      case "medium":
        return {height: hardSizes.icon.medium, width: hardSizes.icon.medium}
    }
  }

  const styles: StyleSheetCSS = {
    container: {
      display: "grid",
      filter: (isHovered) ? "brightness(1.5)" : undefined,
      gridArea: props.gridArea,
      alignSelf: props.alignSelf,
      cursor: props.cursor === undefined ? "pointer" : props.cursor,
      ...handleIconSize()
    }
  }

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => clickHandler(e)}
    >
      <img
        src={(isHovered && props.difIconOnHover !== null) ? props.difIconOnHover : props.image}
        alt={props.alt}
        style={{...handleIconSize()}}
      />
    </div>
  )
}
