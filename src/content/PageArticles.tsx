import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { screenIsSmallAtom, sideBarContentAtom, sidebarIsCollapsedAtom } from "../atoms";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import Documents from "../assets/documents.svg"

export default function PageArticles() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sideBarContentAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)

  useEffect(() => {
    setSidebarContent([<></>])
  }, [setSidebarContent, setSidebarIsCollapsed])

  return (
    <Page
      titleText="Articles"
      numContentCols={screenIsSmall ? 1 : 3}
      addFollowingLine={true}>
      <CardImage
        image={Documents}
        overlayText="You Were Probably Given Awful Advice on Choosing a Career but It's Not Too Late To Change"
        enableDefaultHoverBehavior={true}
        padImage={true}
        altDescription="An icon that indicates a document or documents"
        navigateLocation="/articles/given-bad-career-advice" />
    </Page>
  )
}