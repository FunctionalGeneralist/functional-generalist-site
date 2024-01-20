import {Route, Routes} from "react-router-dom"
import StyleSheetCSS from "./types/Style"
import {colors, setGridAreas, usedSpacerSizes} from "./style/theme"
import './index.scss'
import Header from "./components/Header"
import HomePage from "./content/PageHome"
import PageNotFound from "./content/PageNotFound"
import {colGap, rowGap, smallScreenWidth, styleRules} from "./style/styles"
import {useAtom} from "jotai"
import {screenIsSmallAtom} from "./atoms"
import {useEffect} from "react"
import ArticleGeneralistsInSpecializedWorld from "./content/ArticleGeneralists"
import PageArticles from "./content/PageArticles"
import ContainerGrid from "./components/ContainerGrid"
import ProjectDndTable from "./content/ProjectDndTable"
import ProjectSimpleDmxController from "./content/ProjectSimpleDmxController"
import Sidebar from "./components/Sidebar"
import PageProjects from "./content/PageProjects"
import ElementSpacer from "./components/ElementSpacer"

export default function App() {
  const [screenIsSmall, setScreenIsSmall] = useAtom(screenIsSmallAtom)

  const mediaWatcher = window.matchMedia(`(max-width: ${smallScreenWidth})`)

  // Only here so I can insert actions on this.
  function mediaChangeHandler(e: MediaQueryListEvent) {
    setScreenIsSmall(e.matches)
    console.log(e.matches)
  }

  // One time setup.
  useEffect(() => {
    setScreenIsSmall(mediaWatcher.matches)
    mediaWatcher.addEventListener("change", (e: MediaQueryListEvent) => mediaChangeHandler(e))
  }, [])

  const styles: StyleSheetCSS = {
    appContainer: {
      width: "100%",
      height: "100%",
      minHeight: "100%",
      lineHeight: "normal",
      display: "grid",
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      backgroundColor: colors.containers.app,
      color: colors.text.primary,
    },
    pageContainer: {
      display: "grid",
      gridTemplateColumns: screenIsSmall ? styleRules.screenIsSmallContentCols : styleRules.fullWidthContentCols,
      gridTemplateRows: "fit-content(80px) 1fr fit-content(80px)", // Header, then content, then footer.
      gridTemplateAreas:
        `
      "${setGridAreas.appHeader} ${setGridAreas.appHeader} ${setGridAreas.appHeader}"
      "${setGridAreas.appSidebar} ${setGridAreas.appContent} ${setGridAreas.empty}"
      "${setGridAreas.appFooter} ${setGridAreas.appFooter} ${setGridAreas.appFooter}"
      `,
      columnGap: colGap,
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

            <Route path="/articles" element={<PageArticles />} />
            <Route path="/articles/generalist" element={<ArticleGeneralistsInSpecializedWorld />} />

            <Route path="/projects" element={<PageProjects />} />
            <Route path="/projects/simple-dmx-controller" element={<ProjectSimpleDmxController /> } />
            <Route path="/projects/dnd-table" element={<ProjectDndTable /> } />

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
