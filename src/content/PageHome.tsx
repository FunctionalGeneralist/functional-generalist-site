import Page from "../components/Page"
import {styleRules} from "../style/styles"
import Title from "../components/Title"
import ElementSpacer from "../components/ElementSpacer"
import StringCheeseLogo from "../assets/string-cheese-logo-not-original.jpg"
import ContainerGrid from "../components/ContainerGrid"
import { useAtom, useAtomValue } from "jotai"
import { screenIsSmallAtom, sideBarContentAtom, sidebarIsCollapsedAtom, sidebarIsHiddenAtom } from "../atoms"
import CardImage from "../components/CardImage"
import SimpleDmxController from "../assets/simple-dmx-controller-arduino-beauty-shot.jpg"
import {useEffect} from "react"
import Documents from "../assets/documents.svg"
import DndTable from "../assets/dnd-table-overall.jpg"

export default function PageHome() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sideBarContentAtom)

  useEffect(() => {
    setSidebarContent([<></>])
  }, [setSidebarIsCollapsed, setSidebarContent])

  return (
    <Page
      titleText="Functional Generalist"
      subtitleText="A Site For Interesting Things I Make and Do"
      titleType="site"
      addFollowingLine={true}>
      <ElementSpacer size="nothing" />

      <Title titleText="Featured" />

      <ContainerGrid numCols={screenIsSmall ? 1 : 3}>
        <CardImage
          image={SimpleDmxController}
          altDescription="A microcontroller with a DMX expansion board"
          enableDefaultHoverBehavior={true}
          overlayText={"DMX Controller with\nReact App"}
          limitMaskToText={true}
          navigateLocation="/projects/simple-dmx-controller" />

        <CardImage
          image={StringCheeseLogo}
          altDescription="The logo for the String Cheese Theory podcast, which is a piece of frayed string cheese in front of a brain and an atom, jokingly implying maximum brain power is found here"
          enableDefaultHoverBehavior={true}
          overlayText={`Comedy Podcast\nI'm a Host On`}
          limitMaskToText={true}
          externalLink="https://www.stringcheesepodcast.com/"/>

        <CardImage
          image={Documents}
          altDescription="An icon that looks like a document"
          enableDefaultHoverBehavior={true}
          limitMaskToText={true}
          overlayText={`Placeholder Article\nAbout Thing`}
          navigateLocation="/articles/given-bad-career-advice"
          padImage={true}/>

        <CardImage
          image={DndTable}
          altDescription="An icon that looks like a document"
          limitMaskToText={true}
          enableDefaultHoverBehavior={true}
          overlayText="Placeholder Project"
          navigateLocation="/projects/none" />

        <CardImage
          image={Documents}
          altDescription="An icon that looks like a document"
          enableDefaultHoverBehavior={true}
          overlayText={`Placeholder Article`}
          navigateLocation="/articles/given-bad-career-advice"
          limitMaskToText={true}
          padImage={true}/>

        <CardImage
          image={Documents}
          altDescription="An icon that looks like a document"
          enableDefaultHoverBehavior={true}
          overlayText="Another Placeholder"
          navigateLocation="/articles/given-bad-career-advice"
          limitMaskToText={true}
          padImage={true} />

      </ContainerGrid>

    </Page>
  )
}