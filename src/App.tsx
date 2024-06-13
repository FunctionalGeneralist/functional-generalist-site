import {Route, Routes} from "react-router-dom"
import StyleSheetCSS from "./types/Style"
import {colors, setGridAreas, usedSpacerSizes} from "./style/theme"
import './index.scss'
import Header from "./components/Header"
import HomePage from "./content/PageHome"
import PageNotFound from "./content/PageNotFound"
import {colGap, smallScreenWidth, styleRules} from "./style/styles"
import {useAtom, useAtomValue} from "jotai"
import {screenIsSmallAtom, sidebarIsCollapsedAtom, visitLoggedAtom} from "./atoms"
import {useEffect} from "react"
import PageArticles from "./content/PageArticles"
import ContainerGrid from "./components/ContainerGrid"
import ProjectDndTable from "./content/ProjectDndTable"
import ProjectSimpleDmxController from "./content/ProjectSimpleDmxController"
import Sidebar from "./components/Sidebar"
import PageProjects from "./content/PageProjects"
import ElementSpacer from "./components/ElementSpacer"
import ArticleTeachingEffectively from "./content/ArticleTeachingEffectively"
import slugs from "./constants/navSlugs"
import PageWarnoSeizeDeep from "./content/GamesWarnoSeizeDeep"
import PageAbout from "./content/PageAbout"
import { logVisit } from "./helpers/networkH"

export default function App() {
  const [screenIsSmall, setScreenIsSmall] = useAtom(screenIsSmallAtom)
  const sidebarIsCollapsed = useAtomValue(sidebarIsCollapsedAtom)
  const visitLogged = useAtomValue(visitLoggedAtom)

  const mediaWatcher = window.matchMedia(`(max-width: ${smallScreenWidth})`)

  // Setup for logging that a vistor has visited site.
  useEffect(() => {
    if (visitLogged == false)
      logVisit()
  }, [])

  // Setup for screen resize watcher.
  useEffect(() => {
    setScreenIsSmall(mediaWatcher.matches)
    mediaWatcher.addEventListener("change", (e: MediaQueryListEvent) => setScreenIsSmall(e.matches))

    return () => {
      mediaWatcher.removeEventListener("change", (e: MediaQueryListEvent) => setScreenIsSmall(e.matches))
    }
  }, [screenIsSmall, mediaWatcher, setScreenIsSmall])

  const styles: StyleSheetCSS = {
    appContainer: {
      width: "100vw",
      height: "100vh",
      minHeight: "100vh",
      lineHeight: "normal",
      display: "grid",
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      backgroundColor: colors.containers.app,
      color: colors.text.primary,
    },
    pageContainer: {
      display: "grid",
      columnGap: colGap,
      transition: "50ms",
      gridTemplateColumns: screenIsSmall ? styleRules.screenIsSmallContentCols : styleRules.fullWidthContentCols,
      gridTemplateRows: "fit-content(80px) 1fr fit-content(80px)", // Header, then content, then footer.
      gridTemplateAreas:
        `
      "${setGridAreas.appHeader} ${setGridAreas.appHeader} ${setGridAreas.appHeader}"
      "${setGridAreas.appSidebar} ${setGridAreas.appContent} ${setGridAreas.empty}"
      "${setGridAreas.appFooter} ${setGridAreas.appFooter} ${setGridAreas.appFooter}"
      `,
      width: "100%",
      height: "100%",
      minHeight: "100%"
    },
    contentContainer: {
      display: "grid",
      gridArea: setGridAreas.appContent,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr",
      height: "100%",
      width: "100%",
      alignItems: "start",
      justifyItems: "center",
      justifySelf: "center",
    }
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.pageContainer}>
        <Header />

        <Sidebar />

        <div style={styles.contentContainer}>
          <ElementSpacer size={usedSpacerSizes.headerAndPageContent} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={slugs.home} element={<HomePage />} />

            <Route path={slugs.projects} element={<PageProjects />} />
            <Route path={slugs.simpleDmxController} element={<ProjectSimpleDmxController />} />
            <Route path={slugs.dndTable} element={<ProjectDndTable />} />

            <Route path={slugs.articles} element={<PageArticles />} />
            <Route path={slugs.teachingEffectively} element={<ArticleTeachingEffectively />} />

            <Route path={slugs.warnoSeizeDeep} element={<PageWarnoSeizeDeep /> } />

            <Route path={slugs.contactAndAbout} element={<PageAbout />} />

            <Route path="*" element={<PageNotFound />} />

          </Routes>

          <ElementSpacer size={usedSpacerSizes.pageContentAndFooter} />

        </div>

        {/*Placeholder for footer*/}
        <ContainerGrid
          minHeight={"60px"}
          gridArea={setGridAreas.appFooter}
          showTopBorder={true}
          borderRadius="0"
          backgroundColor={colors.containers.nav}>

        </ContainerGrid>
      </div>
    </div>
  )
}
