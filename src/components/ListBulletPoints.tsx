import CardInvis from "./CardInvis"
import ContainerGrid from "./ContainerGrid"
import ElementSpacer from "./ElementSpacer"
import TextBlock from "./TextBlock"

interface Props {
  textStrings: string[]
  titleText?: string
}

export default function ListBulletPoints(props: Props) {
  return (
    <CardInvis
      titleText={props.titleText}
    >
      <ul>
        {props.textStrings.map((item, index) => {
          if (index === props.textStrings.length - 1)
            return <li key={item}>{item}</li>
          else {
            return (
              <>
                <li key={item}>{item}</li>
                <ElementSpacer size="tiny" key={item + "elementspacer"} />
              </>
            )
          }
        })}
      </ul>
    </CardInvis>

  )
}