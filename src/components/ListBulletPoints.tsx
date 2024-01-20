import ElementSpacer from "./ElementSpacer"
import TextBlock from "./TextBlock"

interface Props {
  textStrings: string[]
}

export default function ListBulletPoints(props: Props) {
  return (
    <TextBlock
      text={(
        <ul>
          {props.textStrings.map((item, index) => {
            if (index === props.textStrings.length - 1)
              return <li>{item}</li>
            else {
              return (
                <>
                  <li>{item}</li>
                  <ElementSpacer size="tiny" />
                </>
              )
            }
          })}
        </ul>
      )}
    />
  )
}