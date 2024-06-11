import { AnimationProps, ContainerProps, InteractableProps } from "../types/CommonProps";
import ContainerGrid from "./ContainerGrid";
import Title, { TitleProps } from "./Title";

interface Props extends ContainerProps, InteractableProps, AnimationProps, TitleProps {

}

// Similar to ContainerGrid but can have a title. Will hookup the props as needed because there's many of them.
export default function CardInvis(props: Props) {
  return (
    <ContainerGrid
      numCols={1}
      justifyItems="left"
      alignSelf="start"
      alignItems="start"
      alignContent="start">

      {props.titleText ?
        <Title
          titleText={props.titleText}
          titleType="card" />
        :
        null
      }

      {props.children}

    </ContainerGrid>
  )
}