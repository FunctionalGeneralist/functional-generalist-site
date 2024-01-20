import { ContainerProps } from "../types/CommonProps"
import { colors } from "../style/theme"
import { styleRules } from "../style/styles"
import ContainerGrid from "./ContainerGrid"
import { CommonProps } from "../types/CommonProps"

interface Props extends ContainerProps {
  numCols: CommonProps["numCols"]
}

export default function CardPrimary(props: Props) {
  return (
    <ContainerGrid
      {...props}
      numCols={props.numCols}
      backgroundColor={colors.containers.primary}
      padding={styleRules.internalPadding}
      borderRadius={styleRules.borderRadius}>

      {props.children}

    </ContainerGrid>

  )
}