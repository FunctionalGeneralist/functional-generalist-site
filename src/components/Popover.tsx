import {Popover} from "@mui/material"
import {ReactElement, useEffect, useRef} from "react"
import {InteractableProps} from "../types/CommonProps"
import CardPrimary from "./CardPrimary"
import TextBlock from "./TextBlock"

interface Props extends InteractableProps {
  anchorElem: Element | null
  isOpen: boolean
  textContent?: string
  insertElement?: ReactElement
  anchorOrigin?: {vertical: "top" | "center" | "bottom", horizontal: "left" | "center" | "right"}
  // Parent can optionally provide the function to close the popover. Right now, this
  // is being used so that when soemthing that isn't the popover is clicked, it closes.
  controlIsOpenFunction?: (isOpen: boolean) => void
}

export default function ElementPopover(props: Props) {
  const ref = useRef(null)

  function handleClick(e: MouseEvent) {
    // If clicking not the popover, and parent allows it, close popover.
    if (ref.current && props.controlIsOpenFunction !== undefined)
      props.controlIsOpenFunction(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <Popover
      open={props.isOpen}
      anchorEl={props.anchorElem}
      onClose={props.cleanupFunc}
      anchorOrigin={props.anchorOrigin}
    >
      <CardPrimary numCols={1} reference={ref}>
        {props.textContent === undefined ? null : <p>{props.textContent}</p>}
        {props.insertElement === undefined ? null : props.insertElement}
      </CardPrimary>
    </Popover>
  )
}