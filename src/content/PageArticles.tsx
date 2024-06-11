import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { screenIsSmallAtom, sidebarContentAtom, sidebarIsCollapsedAtom } from "../atoms";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import Documents from "../assets/documents.svg"
import { articleTeachingEffectivelyTitle } from "./ArticleTeachingEffectively";
import navSlugs from "../constants/navSlugs";

export default function PageArticles() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)
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
        overlayText={articleTeachingEffectivelyTitle}
        enableDefaultHoverBehavior={true}
        padImage={true}
        altDescription="An icon that indicates a document or documents"
        navigateLocation={navSlugs.teachingEffectively} />
    </Page>
  )
}