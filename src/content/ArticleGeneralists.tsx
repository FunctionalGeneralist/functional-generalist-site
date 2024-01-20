import TextBlock from "../components/TextBlock"
import Page from "../components/Page"
import TextQuoteBlock from "../components/TextQuoteBlock"
import { useAtom, useAtomValue } from "jotai"
import { screenIsSmallAtom, sidebarIsCollapsedAtom, sidebarIsHiddenAtom } from "../atoms"
import { textBlockStarter } from "../style/commonStyles"
import TextBlockWithInlineElement from "../components/TextBlockWithInlineElement"
import { useEffect } from "react"

export default function ArticleBadCareerAdvice() {
  return (
    <Page
      titleText="Most Advice On Choosing a Career Is Comically Bad and It's Not Too Late to Change Course"
      subtitleText="Only here for showing to a few people before I launch"
      additionalSubtitleText="Published 2024/01/17"
      italicizeAddSubtitle={true}
      addFollowingLine={true}
    >
      <TextBlock text={(<p><span style={textBlockStarter}>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)} />
      <TextBlock text={(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>)} />

      <TextBlockWithInlineElement
        colSizes={[10, 7]}
        textBlocks={[
          <p>It's primarily because of the mental tools gained from working in greatly varied disciplines (and directly transferrable soft skills, but that's more obvious). </p>,
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        ]}
        inlineElement={<TextQuoteBlock text={`"...breadth of training predicts breadth of transfer. That is, the more contexts in which something is learned, the more the learner creates abstract models, and the less they rely on any particular example."`} /> }/>
      <TextBlock text={(<p>Wicked environments are what most of us deal with daily, especially when it comes to work as open-ended in its implementation as programming. In these wicked environments, the mental tools you've built by past problem solving come into play. Past experience turns out to not be a significant factor unless you're dealing with the exact same problem you've faced before. David Epstein puts it better:</p>)} />

      <TextBlock
        titleText="Improv Masters"
        text={(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)}
      />
      <TextBlock text={(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)} />
      <TextBlock
        titleText="Conclusions"
        text={(<p>I'll cut myself off there, but if you'd like to hear more, get David Epstein's book <strong><i>Range: Why Generalist's Triumph in an Increasingly Specialized World</i></strong>. The takeaway for my fellow generalists is this: you haven't fallen behind, market yourselves appropriately and you'll find you're just getting started.</p>)}
      />
    </Page>
  )
}