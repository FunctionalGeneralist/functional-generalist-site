import Page from "../components/Page"
import Title from "../components/Title"
import ElementSpacer from "../components/ElementSpacer"
import StringCheeseLogo from "../assets/string-cheese-logo-not-original.jpg"
import ContainerGrid from "../components/ContainerGrid"
import { useAtom, useAtomValue } from "jotai"
import { screenIsSmallAtom, sidebarContentAtom, sidebarIsCollapsedAtom, sidebarIsHiddenAtom } from "../atoms"
import CardImage from "../components/CardImage"
import SimpleDmxController from "../assets/simple-dmx-controller-arduino-beauty-shot.jpg"
import {useEffect} from "react"
import Documents from "../assets/documents.svg"
import DndTable from "../assets/dnd-table/dnd-table-overall.jpg"
import slugs from "../constants/navSlugs"
import { articleTeachingEffectivelyTitle } from "./ArticleTeachingEffectively"
import {simpleDmxControllerTitle} from "./ProjectSimpleDmxController"

export default function PageHome() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)

  useEffect(() => {
    setSidebarContent([<a key="thissitesgithub" href="https://github.com/FunctionalGeneralist/functional-generalist-site" target="_blank" rel="noreferrer">This sites GitHub repo</a>])
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
          limitMaskToText={true}
          overlayText={simpleDmxControllerTitle}
          navigateLocation={slugs.simpleDmxController} />

        <CardImage
          image={Documents}
          altDescription="An icon that looks like a document"
          enableDefaultHoverBehavior={true}
          overlayText={articleTeachingEffectivelyTitle}
          navigateLocation={slugs.teachingEffectively}
          limitMaskToText={true}
          padImage={true} />

        <CardImage
          image={StringCheeseLogo}
          limitMaskToText={true}
          altDescription="The logo for the String Cheese Theory podcast, which is a piece of frayed string cheese in front of a brain and an atom, jokingly implying maximum brain power is found here"
          enableDefaultHoverBehavior={true}
          overlayText={`Comedy Podcast\nI'm a Host On`}
          externalLink="https://www.stringcheesepodcast.com/"/>

        <CardImage
          image={DndTable}
          limitMaskToText={true}
          altDescription="A hardwood table with inlaid tv covered by tempered glass"
          enableDefaultHoverBehavior={true}
          overlayText={`D&D Table with\n Underneath Shelf`}
          navigateLocation={slugs.dndTable}
        />

      </ContainerGrid>

    </Page>
  )
}