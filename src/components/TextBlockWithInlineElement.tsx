import { useAtomValue } from "jotai"
import { ReactElement } from "react"
import { screenIsSmallAtom } from "../atoms"
import ContainerGrid from "./ContainerGrid"

interface Props {
  colSizes: number[]
  inlineElement: ReactElement
  textBlocks: ReactElement[]
}

export default function TextBlockWithInlineElement(props: Props) {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)

  return (
    <ContainerGrid numCols={screenIsSmall ? 1 : props.colSizes}>
      <ContainerGrid numCols={1} alignSelf="start" isMinContentHigh={true}>
        {props.textBlocks}

      </ContainerGrid>

      {props.inlineElement}

    </ContainerGrid>
  )
}