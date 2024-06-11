import StyleSheetCSS from "../types/Style"
import {fontSizes, setGridAreas, colors, hardSizes} from "../style/theme"
import {colGap, styleRules} from "../style/styles"
import ContainerGrid from "../components/ContainerGrid"
import HeaderNavItem from "../components/HeaderNavItem"
import {useAtom, useAtomValue} from "jotai"
import {screenIsSmallAtom} from "../atoms"
import ElementIcon from "./ElementIcon"
import HamburgerMenu from "../assets/hamburger-menu.svg"
import Popover from "./Popover"
import {useState} from "react"
import CardPrimary from "./CardPrimary"
import Line from "./Line"
import ElementSpacer from "./ElementSpacer"
import navSlugs from "../constants/navSlugs"

export default function Header() {
  const [popoverAnchorRef, setPopoverAnchorRef] = useState<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const screenIsSmall = useAtomValue(screenIsSmallAtom)

  const styles: StyleSheetCSS = {
    container: {
      display: "grid",
      boxSizing: "border-box",
      gridTemplateColumns: "1fr",
      columnGap: colGap,
      width: "100%",
      height: hardSizes.header,
      backgroundColor: colors.containers.nav,
    },
    smallContainer: {
      display: "grid",
      gridTemplateColumns: styleRules.screenIsSmallContentCols,
      gridTemplateAreas:
        `
        ". nav-section ."
        `,
      width: "100%",
      height: "48px",
      backgroundColor: colors.containers.primary,
      justifyItems: "right",
      alignItems: "center"
    }
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setPopoverAnchorRef(e.currentTarget)
    setIsMenuOpen(!isMenuOpen)
  }

  const hamburgerMenu = (
    <div
      style={styles.smallContainer}
      onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}
    >
      <ElementIcon
        image={HamburgerMenu}
        size="medium"
        alt="three horizontal lines indicating a dropdown menu"
        gridArea="nav-section"
      />
    </div>
  )

  const dropdownMenu = (
    <ContainerGrid numCols={1} alignSelf="center">
      <HeaderNavItem displayText="Home" path="/home" />
      <Line type="horizontal" />
      <HeaderNavItem displayText="Projects" path="/projects" />
      <Line type="horizontal" />
      <HeaderNavItem displayText="Articles" path="/articles" />
      <Line type="horizontal" />
      <HeaderNavItem displayText="Contact & About" path={navSlugs.contactAndAbout} />
    </ContainerGrid>
  )

  if (screenIsSmall) {
    return (
      <ContainerGrid
        numCols={3}
        gridArea={setGridAreas.appHeader}
        backgroundColor={colors.containers.nav}
        showBottomBorder={true}>
        <div></div>
        <div></div>

        {hamburgerMenu}
        <Popover
          anchorElem={popoverAnchorRef}
          isOpen={isMenuOpen}
          anchorOrigin={{horizontal: "right", vertical: "bottom"}}
          controlIsOpenFunction={setIsMenuOpen}
          insertElement={dropdownMenu} />

      </ContainerGrid>
    )
  }
  else {
    return (
      <ContainerGrid
        gridColTemplateOverride={styleRules.fullWidthContentCols}
        rowGap="0"
        justifyContent="left"
        justifyItems="left"
        borderRadius="0"
        gridArea={setGridAreas.appHeader}
        backgroundColor={colors.containers.nav}
        showBottomBorder={true}>
        <ElementSpacer widthOverride={hardSizes.sidebarWidth} />

        <ContainerGrid
          justifySelf="left"
          justifyContent="left"
          minHeight={hardSizes.header}
          maxHeight={hardSizes.header}
          backgroundColor={colors.containers.primary}
          borderRadius={`0 0 0 0`}
          colStyle="fit"
          rowStyle="min"
          linesBetweenCols={true}>
          <HeaderNavItem displayText="Home" path="/home" />

          <HeaderNavItem displayText="Projects" path="/projects" />

          <HeaderNavItem displayText="Articles" path="/articles" />

          <HeaderNavItem displayText="Contact & About" path={navSlugs.contactAndAbout} />

        </ContainerGrid>


      </ContainerGrid>
    )
  }

}