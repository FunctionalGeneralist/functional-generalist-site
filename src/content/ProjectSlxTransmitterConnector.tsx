import Page from "../components/Page";
import TextBlockWithInlineElement from "../components/TextBlockWithInlineElement";
import { textBlockStarter } from "../style/commonStyles";
import slxScrews from "../assets/slx-repair/shureSlx_markedScrews.jpg"
import slxMarkedSolder from "../assets/slx-repair/shureSlx_markedSolder.jpg"
import CardImage from "../components/CardImage";
import TextBlock from "../components/TextBlock";
import ListBulletPoints from "../components/ListBulletPoints";
import slxCloseup from "../assets/slx-repair/shureSlx_closerMarkedSolder.jpg"

export default function ProjectSlxTransmitterConnector() {
  return (
    <Page
      titleText="SLX Transmitter Connector Repair"
      subtitleText="Potentially save a transmitter in less than 10 minutes"
      additionalSubtitleText="Published 2024/06/13"
      italicizeAddSubtitle={true}
      addFollowingLine={true}>
      <TextBlock text={(<p><span style={textBlockStarter}>My</span> SLX transmitters go through a lot of rough use. The most common killer is popping caused by the pack itself, almost always seemingly caused by the packs mic connection becoming loosened. After opening up a pack to see if I could rectify this common failure myself, I found that in fact I could very easily and quickly. You only need to know how to solder to do this.</p>)}/>

      <CardImage
        image={slxScrews}
        subtitleText="Start by removing these 4 screws"
        altDescription="the backside of a SLX transmitter, 4 screws are marked" />

      <TextBlock text={(<p>The culprit is in fact the connector, specifically the connection points between the connector itself and the board. As you can see in the next picture, the mic connector "plugs in" to the board; Shure sells these packs with several different mic connectors and rather than soldering it right on, the pins plug into this thing that itself is connected to the board. This is what is gradually coming loose and causing popping.</p>)} />

      <CardImage
        image={slxMarkedSolder}
        altDescription="A partially disassembled transmitter, a connector is marked"/>

      <TextBlock text={(<p>I don't ever need to change the mic connector, so to fix this I solder the mic connector directly to the board.</p>)} />

      <CardImage
        image={slxCloseup}
        altDescription="Closeup of a partially disassembled transmitter, a connector is marked" />

      <TextBlock text={(<p>Put 3 big blobs of solder on the marked points and voila, you've extended the effective life by quite a bit, the packs are quite sturdy aside from this one weakpoint. You may need to push the mic connector a little farther in to expose the pins on this side.</p>)} />

    </Page>
  )
}