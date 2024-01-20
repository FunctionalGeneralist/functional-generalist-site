import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { screenIsSmallAtom, sideBarContentAtom, sidebarIsCollapsedAtom } from "../atoms";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import SimpleDmxController from "../assets/simple-dmx-controller-arduino-beauty-shot.jpg"

export default function PageProjects() {
  const [sidebarContent, setSidebarContent] = useAtom(sideBarContentAtom)
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

    </Page>
  )
}