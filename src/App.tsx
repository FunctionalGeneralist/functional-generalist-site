import {Route, Routes} from "react-router-dom"
import StyleSheetCSS from "./types/Style"
import {colors, setGridAreas, usedSpacerSizes} from "./style/theme"
import './index.scss'
import Header from "./components/Header"
import HomePage from "./content/PageHome"
import PageNotFound from "./content/PageNotFound"
import {colGap, rowGap, smallColGap, smallScreenWidth, styleRules} from "./style/styles"
import {useAtom, useAtomValue} from "jotai"
import {screenIsSmallAtom, sidebarIsCollapsedAtom} from "./atoms"
import {useEffect, useRef, useState} from "react"
import ArticleGeneralistsInSpecializedWorld from "./content/ArticleGeneralists"
import PageArticles from "./content/PageArticles"
import ContainerGrid from "./components/ContainerGrid"
import ProjectDndTable from "./content/ProjectDndTable"
import ProjectSimpleDmxController from "./content/ProjectSimpleDmxController"
import Sidebar from "./components/Sidebar"
import PageProjects from "./content/PageProjects"
import ElementSpacer from "./components/ElementSpacer"
import { calcAppColumnWidths, extractIntFromPx } from "./helpers/styleH"

export default function App() {
  const [screenIsSmall, setScreenIsSmall] = useAtom(screenIsSmallAtom)
  const sidebarIsCollapsed = useAtomValue(sidebarIsCollapsedAtom)

  const [appColTemplate, setAppColTemplate] = useState("6fr 20fr 6fr")
  const mediaWatcher = window.matchMedia(`(max-width: ${smallScreenWidth})`)

  // One time setup.
  useEffect(() => {
    setScreenIsSmall(mediaWatcher.matches)
    mediaWatcher.addEventListener("change", (e: MediaQueryListEvent) => setScreenIsSmall(e.matches))

    // TODO: Will change to all theme values, too sleepy rn.
    let leftMarginMin = sidebarIsCollapsed ? 240 : 240
    window.addEventListener("resize", () => setAppColTemplate(calcAppColumnWidths(window.innerWidth, 1920, 1170, leftMarginMin, 0, 0.7, 0.15, 0.15, extractIntFromPx(colGap))))

    return () => {
      mediaWatcher.removeEventListener("change", (e: MediaQueryListEvent) => setScreenIsSmall(e.matches))
      window.removeEventListener("resize", () => setAppColTemplate(calcAppColumnWidths(window.innerWidth, 1920, 1170, leftMarginMin, 0, 0.7, 0.15, 0.15, extractIntFromPx(colGap))))
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
      transition: "50ms",
      gridTemplateColumns: screenIsSmall ? styleRules.screenIsSmallContentCols : appColTemplate,
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
            <Route path="/home" element={<HomePage />} />

            <Route path="/projects" element={<PageProjects />} />
            <Route path="/projects/simple-dmx-controller" element={<ProjectSimpleDmxController />} />
            <Route path="/projects/dnd-table" element={<ProjectDndTable />} />

            <Route path="/articles" element={<PageArticles />} />
            <Route path="/articles/given-bad-career-advice" element={<ArticleGeneralistsInSpecializedWorld />} />

            <Route path="*" element={<PageNotFound />} />

          </Routes>

          <ElementSpacer size={usedSpacerSizes.pageContentAndFooter} />

        </div>

        {/*Placeholder for footer*/}
        <ContainerGrid
          minHeight={"60px"}
          gridArea={setGridAreas.appFooter}
          showTopBorder={true}
          backgroundColor={colors.containers.nav}>

        </ContainerGrid>
      </div>
    </div>
  )
}
