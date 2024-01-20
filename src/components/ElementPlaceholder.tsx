import ContainerGrid from "../components/ContainerGrid"
import { colors } from "../style/theme"

interface Props {
  height?: string
  gridArea?: string
}

export default function ElementPlaceholder(props: Props) {
  return (
    <ContainerGrid
      minHeight={props.height === undefined ? "200px" : props.height}
      backgroundColor={colors.containers.primary}
      gridArea={props.gridArea}>
      <></>

    </ContainerGrid>
  )
}