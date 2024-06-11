import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { screenIsSmallAtom, sidebarContentAtom, sidebarIsCollapsedAtom } from "../atoms";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import SimpleDmxController from "../assets/simple-dmx-controller-arduino-beauty-shot.jpg"
import navSlugs from "../constants/navSlugs";
import dndTable from "../assets/dnd-table/dnd-table-overall.jpg"

export default function PageProjects() {
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)
  const screenIsSmall = useAtomValue(screenIsSmallAtom)

  useEffect(() => {
    setSidebarContent([<></>])
  }, [setSidebarContent, setSidebarIsCollapsed])

  return (
    <Page
      titleText="Projects"
      subtitleText="Programs and scripts, wood and metalworking, microcontrollers, cool stuff in general"
      numContentCols={screenIsSmall ? 1 : 3}
      addFollowingLine={true}>
      <CardImage
        overlayText="DMX512 Controller With BLE App"
        navigateLocation="/projects/simple-dmx-controller"
        image={SimpleDmxController}
        enableDefaultHoverBehavior={true}
        limitMaskToText={true}
        altDescription="a microcontroller with a DMX512 HAT"/>

      <CardImage
        overlayText="D&D Table with Underneath Shelf"
        navigateLocation={navSlugs.dndTable}
        image={dndTable}
        altDescription="A hardwood table with an inlaid tv and smaller shelf underneath"
        limitMaskToText={true}
      />

    </Page>
  )
}