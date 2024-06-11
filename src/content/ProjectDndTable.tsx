import Page from "../components/Page"
import TextBlockWithInlineElement from "../components/TextBlockWithInlineElement"
import {textBlockStarter} from "../style/commonStyles"
import dndTableOverall from "../assets/dnd-table/dnd-table-overall.jpg"
import CardImage from "../components/CardImage"
import ContainerGrid from "../components/ContainerGrid"
import dndTableSketchup from "../assets/dnd-table/gamingTable_final.png"
import ListBulletPoints from "../components/ListBulletPoints"
import {useAtom, useAtomValue} from "jotai"
import {screenIsSmallAtom, sidebarContentAtom} from "../atoms"
import {useEffect} from "react"
import TextBlock from "../components/TextBlock"
import finishedDimensionalLumber from "../assets/dnd-table/finished-dimensional-lumber.jpg"
import cutPlywood from "../assets/dnd-table/cut-plywood.jpg"
import flippedTop from "../assets/dnd-table/tabletop-flipped.jpg"
import flippedTopOneLeg from "../assets/dnd-table/tabletop-flipped-oneleg.jpg"
import carpentersSquareTrick from "../assets/dnd-table/carpenter-square-trick.jpg"
import lBraces from "../assets/dnd-table/l-braces.jpg"
import closeup from "../assets/dnd-table/closeup.jpg"

export default function ProjectDndTable() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)

  useEffect(() => {
    setSidebarContent([
      <a key="sketupmodellink" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1qAKOCl5uKcKMwFSlQ-sxRWqc9ljJV3rF/view?usp=sharing">SketchUp model</a>,
      <a key="cutlistlink" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1FY-ShP4fvthww2i4LHljohA8XF6Xec-tPztKQ_JBHSY/edit?usp=sharing">Cut list</a>
    ])
  }, [])

  const headerBit = () => {
    if (screenIsSmall) {
      return (
        <>
          <CardImage
            image={dndTableOverall}
            altDescription="A hardwood dinner table with an inlaid 40 inch TV"
            subtitleText="The finished product, which I think came out quite nicely" />

          <ListBulletPoints
            titleText="Required Skills"
            textStrings={["Moderate fine woodworking ability", "Processing roughcut lumber to finished boards (recommended, not technically required)"]} />
          <ListBulletPoints
            titleText="Tools"
            textStrings={[
              "Handheld circular saw (required)",
              "Handheld drill (required)",
              '3/8" drill bit with extended shank (required)',
              "Miter saw (recommended)",
              "Table saw (recommended)",
              "Planer (recommended)",
              "Random orbital sander (highly recommended)",
              "Table router (only if you want to make your own moulding)",
              "Pocket screw jig (highly recommended)"
            ]} />
          <ListBulletPoints
            titleText="Expenses: $1,410 (could be as low as ~$600 if softwood used)"
            textStrings={[
              "~65 hours of my time: free?",
              "Lumber (American Cherry): $880.12",
              '40" TV: $204.81',
              "Tempered Glass (Custom Order): $225.59",
              "Misc materials (stain, sandpaper, etc): ~$100"]} />
        </>
      )
    }
    else {
      return (
        <>
        <ContainerGrid
          numCols={[1, 1]}>
          <ContainerGrid
            numCols={1}
            alignContent="start"
            alignSelf="start"
            rowStyle="min">
            <ListBulletPoints
              titleText="Required Skills"
              textStrings={["Moderate woodworking ability", "Processing roughcut lumber to finished boards (recommended, not technically required)"]} />
            <ListBulletPoints
              titleText="Tools"
              textStrings={[
                "Handheld circular saw (required)",
                "Handheld drill (required)",
                '3/8" drill bit with extended shank (required)',
                "Miter saw (recommended)",
                "Table saw (recommended)",
                "Planer (recommended)",
                "Random orbital sander (highly recommended)",
                "Table router (only if you want to make your own moulding)",
                "Pocket screw jig (highly recommended)"
              ]} />
            

          </ContainerGrid>

          <CardImage
            image={dndTableOverall}
            altDescription="A hardwood dinner table with an inlaid 40 inch TV"
            subtitleText="The finished product, which I think came out quite nicely" />

          </ContainerGrid>

          <ListBulletPoints
            titleText="Expenses: $1,460 (could be as low as ~$600 if softwood used)"
            textStrings={[
              "~65 hours of my time: free?",
              "Lumber (American Cherry): $880.12",
              '40" 1080p TV: $204.81',
              "Tempered Glass (Custom Order): $225.59",
              "SteamLink: $50",
              "Misc materials (stain, sandpaper, etc): ~$100"]} />
        </>
      )
    }
  }

  return (
    <Page
      titleText="Hardwood D&D Table With Storage Shelf"
      subtitleText="Or, a table with an inlaid TV in the center and shelf underneath"
      additionalSubtitleText="Published 2024/06/10"
      italicizeAddSubtitle={true}
      addFollowingLine={true}>

      {headerBit()}

      <TextBlock
        text={(<p><span style={textBlockStarter}>This</span> was originally made 3 or 4 years ago, but the project came out quite well so I'm going to post this in case you'd like to make your own. Note, however, that there is a change I'd recommend making to the design of this table, namely the gap above and below the TV. I would eliminate this gap entirely and perhaps try using glass thinner than 3/8", if you're not as nervous about strength as I am. Also, if you're experienced with making tables and have a more clever solution of attaching the legs, consider doing that. Relevant links are in the sidebar.</p>)}
      />

      <ListBulletPoints
        titleText="Design Objectives"
        textStrings={[
          "Seat 8 in total",
          "Easily display battle maps on an inlaid TV from physically connected computer or over network",
          "Top and legs easily seperate for moving house",
          "Sturdy enough to be stood on by a heavy person (even standing on the glass)"
        ]}
      />

      <TextBlock
        text={(<p>First design had little private sections for each player, but in addition to being much more complicated I would also have to make a bulky insert, as space is limited and this would serve as a dining table as well. Those previous designs are still in the SketchUp file if you're interested, although they probably need a little work. Legs are simple 4x4's partly because I like the simplicity of the look but also because I don't own a lathe large enough to turn them on.</p>)}
      />

      <CardImage
        image={dndTableSketchup}
        altDescription="Blueprint view of finished table"
        subtitleText="Final design of table" />
      <TextBlock text={(<p>One element of this design that might jump out at you is the underneath shelf. The table is quite large at ~7'x4', the glass itself is quite heavy (~50lbs) and one of my objectives is being sturdy enough for a heavy person (250lbs+) to stand on, so after some agonizing I opted for additional legs in the middle. The thick "moulding" on either end of the small shelf might appear strange, this is because I wanted to use the same piece of ply that I cut for the hole and it's a tad too small otherwise.</p>)} />

      <TextBlock
        titleText="Build Process"
        text={(<p>I decided that since this table would be front and center for meals and D&D alike, and because I had never worked with hardwood, I might as well go all the way and pick up roughcut American Cherry from a local lumberyard. American Cherry was among the least expensive hardwoods at the time, although I still managed to purchase nearly $900 worth. I also picked up a used Delta planer to finish the tops and bottoms of the boards, although you could theoretically use your table saw to achieve a similar effect. Note that while you could use regular hardware store precut lumber for this, I would at least make sure you get very straight boards but I wouldn't do go this route myself.</p>)}
      />
      <TextBlock text={(<p>Cutting, plane-ing, sanding and staining the dimensional lumber was routine enough. Processing roughcut lumber into boards can be tedious but getting nearly perfectly straight boards with nice, crisp edges was well worth it to me. I also made some bullnose moulding to cover the edges of the plywood by running a board through my table router with a 3/4" cove bit twice (obviously flipping it over) and then cutting off ~3/32" with my table saw.</p>)} />
      <CardImage
        image={finishedDimensionalLumber}
        altDescription="Cut and stained dimensional lumber"
        subtitleText="Always remember proper respiratory protection and ventilation"
      />

      <TextBlock text={(<p>After thinking on how to precisely cut the center hole in the ply for the glass and screen, I couldn't think of a better solution than marking and plunge cutting with my handheld circular saw. This actually worked marvellously, the glass fit like a dream.</p>)} />
      <CardImage
        image={cutPlywood}
        altDescription="Plywood top of table with square cut for glass"
        subtitleText="No, I didn't cut this in my kitchen"
      />

      <TextBlock text={(<p>After sanding and staining the plywood, it's' time to attach the frame. It attaches to the ply with pocket screws for which I used Kreg's pocket screw jig, which was great, if a little expensive. I intended (and still do) to hide 12 screws that will normally be visible by countersinking and plugging the hole, I still have some stained lumber from this project so I'll maybe do that eventually.</p>)} />
      <CardImage
        image={flippedTop}
        altDescription="The tabletop flipped to reveal the underside before being attached to the legs"
      />
      <TextBlock text={(<p>As you can see I did quite a few pocket screws, but the relative weakness of each screw and the weight of the ply made me a little nervous. Next is attaching the legs, I neglected to take any pictures of this process but it's relatively simple. Quick aside about the legs, which are not true 4x4's but two pieces of 2x material glued together. Pro tip for gluing two flat wood surfaces, sprinkle extremely coarse rock salt on the glue before clamping, it bites into both pieces of wood and stops them from sliding all over.</p>)} />
      <TextBlock text={(<p>Since I want to be able to easily disassemble this table (and because I'm not familiar with other methods of attaching legs to tables and didn't bother to do research) I chose to use carriage bolts to attach the legs. There's probably a better looking solution that fits my requirements but this doesn't look so bad, a bit rustic even, after concealing the bolt heads with a bit of "rust" colored spray paint they don't stand out'.</p>)} />
      <TextBlock text={(<p>Here's where the long shank drill bit comes in. There will be 3 bolts on one side, 2 on the other, making each leg rock solid. Make sure to start drilling from the public facing side and I would have a piece of scrap material where the bit will exit, so no wood breaks off when the bit exits. On flipping the table I was dismayed that not all of the main legs were touching down, but I soon realized my kitchen floor is hilariously uneven, so some shims will live under those legs until I move. Bottom shelf and its legs are not attached at this point, that would be one of the last things I would do.</p>)} />
      <CardImage
        image={flippedTopOneLeg}
        altDescription="Underside of table with one main leg attached"
        subtitleText="Most legs not pictured here"
      />

      <TextBlock text={(<p>Now for the glass. I want the surface of the table to be mirror smooth, no noticeable height difference from the plywood to the glass. This would prove to be the most migrane-inducing part of this build. I cut the hole in the plywood 3/32" larger than the glass required so I could fit strips of cherry in there to hide the edges of the ply, which I glued in now and sanded down to make flush with the table surface. Since the glass is 3/8" and the ply 3/4", I also cut some strips to lay on the boards to bring the glass up to the table surface.</p>)} />
      <TextBlock text={(<p>The trouble came from getting the glass to the perfect height. After the inserts it fits snugly but is too high in some parts, everything is cut correctly but minor variations in the cut of both the board and the inserts make the glass stick up in some parts. I initially start by putting in the glass, seeing where it sticks up, taking it out and sanding that area, but I quickly realize I need to remove a little more material than I thought and break out the chisels. The glass is heavy and moving it constantly really sucks so I devised a makeshift tool using a carpenters square. I find a spot where the glass is perfectly level and extend the ruler down, lock it in place and then slide the square around until the ruler sticks and chisel away where it sticks. It's still tedious and by far the least fun part of this.</p>)} />
      <CardImage
        image={carpentersSquareTrick}
        altDescription="A carpenters square that I used for this little trick with the glass."
        subtitleText="This trick with the carpenters square saved a lot of time and annoyance"
      />
      <TextBlock text={(<p>After several hours of this, the glass fits like a dream, which btw is tempered and custom cut that I ordered online by searching something like "order custom cut tempered glass". To keep any liquids from getting into the crack or under the glass, and to keep the glass snugly in place, I used a clear adhesive sealant intended for aquarium repair.</p>)} />

      <TextBlock text={(<p>Next comes the TV. Like I said at the beginning, there's unnecessary space above and below the TV, one of those design artifacts that made it to the end without me questioning something that should have changed. One quick aside before explaining how I installed the TV and a bit of advice to learn from my mistakes, as I have a bad habit that reared its head here. In planning I wasn't exactly sure how I'd install the TV when I got to this point but figured I'd be more able to come up with something when I had it in front of me. Of course, that's often not how that works, and if I'd come up with a definitive solution during planning I could've done something more clean and clever.</p>)} />
      <TextBlock text={(<p>So with that preface, to keep the TV up there I bought some L braces to screw into the frame. To make the TV snug to the glass I put one screw into the L brace and rotated it as far upward as I could before putting in the others. The TV still slid on top of the metal braces so I jammed some very thick double sided tape up there to keep it in place. This all worked far better than it should have, it's actually very snug up there.</p>)} />
      <CardImage
        image={lBraces}
        altDescription="L braces with double sided tape holding up the inlaid TV"
        subtitleText="If it looks stupid but works, etc"
      />

      <TextBlock text={(<p>Last part is the shelf and its legs, I didn't take pictures of this process but it's relatively simple. Each leg is attached with one bolt only on the top and bottom, there will be close to zero lateral strain on these legs so I judged one to be sufficient and it has been. I didn't track my time for this project but I'd estimate the entire process, including planning and shopping, to be somewhere around 100 hours. If I were to make this again from scratch, it'd probably be more like 65 hours.</p>)} />
      <CardImage
        image={closeup}
        altDescription="Closeup of table"
        subtitleText="Not affiliated with this patreon but they had a lot of cool battle maps when I took this picture ~4 years ago"
      />

      <TextBlock
        titleText="Conclusions & What I'd Do Differently"
        text={(<p>As I said at the top, I would eliminate the gap above and below the TV. I would also consider using thinner glass, I'm still not sure about the strength of thinner glass and I would still hit my strength requirement first, but if you're slouching in your chair it can take a moment to parse which square a mini is on exactly.</p>)}
      />

    </Page>
  )
}