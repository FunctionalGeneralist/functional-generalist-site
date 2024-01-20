import { ReactElement, useState } from "react"
import { styleRules } from "../style/styles"
import { colors, fontSizes, textStyles } from "../style/theme"
import StyleSheetCSS from "../types/Style"
import Popover from "./Popover"


interface Props {
  displayText: string
}

// Work in progress, need to revisit later (if I actually want to use this feature, no longer sure I do).
export default function TextWithPopover(props: Props) {
  const [popoverIsVisible, setPopoverIsVisible] = useState(false)
  const [isMousedOver, setIsMousedOver] = useState(false)
  const [anchorElem, setAnchorElem] = useState<Element | null>(null);

  function handleOnMouseEnter(e: React.MouseEvent<HTMLParagraphElement>) {
    setIsMousedOver(true);
    setAnchorElem(e.currentTarget);

    setTimeout(() => {
      if (isMousedOver)
        setPopoverIsVisible(true)
    }, styleRules.mouseoverTimeUntilPopup)
  }

  function handleOnMouseLeave() {
    setIsMousedOver(false);
    setPopoverIsVisible(false);
  }

  function handleClick() {
    if (popoverIsVisible)
      setPopoverIsVisible(false)
    else
      setPopoverIsVisible(true);
  }

  const displayText = (
      <p
      style={textStyles.body}
      onMouseEnter={e => handleOnMouseEnter(e)}
      onMouseLeave={() => handleOnMouseLeave}
      onClick={() => handleClick}
      >
        {props.displayText}
      </p>
    )

  return (
    <>
      {displayText}
      <Popover anchorElem={anchorElem} isOpen={popoverIsVisible} />
    </>
  )
}