import TextBlock from "../components/TextBlock"
import Page from "../components/Page"
import { textBlockStarter } from "../style/commonStyles"
import { sidebarContentAtom } from "../atoms"
import { useAtom } from "jotai"
import { useEffect } from "react"
import ListBulletPoints from "../components/ListBulletPoints"

export const articleTeachingEffectivelyTitle = "Teaching Effectively\n as a Non-Teacher"

export default function ArticleTeachingEffectively() {
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)

  useEffect(() => {
    setSidebarContent([<></>])
  })

  return (
    <Page
      titleText={articleTeachingEffectivelyTitle}
      subtitleText="How to manipulate people into enjoying learning"
      additionalSubtitleText="Published 2024/01/21"
      italicizeAddSubtitle={true}
      addFollowingLine={true}>
      <TextBlock text={(<p><span style={textBlockStarter}>Many</span> fields, software development especially, have this unfortunate habit of pushing experienced employees into teaching or mentoring less capable personnel with zero advice or training on how to actually do so (and probably no additional compensation, for that matter). How to be a good teacher is not easily intuited but is relatively straightforward, so as a former teacher with a decade of experience doing it, I'm going to concisely lay it out here.</p>)} />
      <TextBlock text={(<p>Note: This has nothing to do with preparing boring teaching materials or whatever and many "real" teachers don't do these things, so hear me out.</p>)} />

      <TextBlock
        titleText="Psychology and Patience, Patience, Patience"
        text={(<p>Being a student puts 95% of people into a guarded, more introverted state. Nobody likes to feel stupid or be perceived as such and that goes triple for adults in a professional setting. What's more, your student(s) are probably young and inexperienced and as such likely unconfident in themselves and their abilities.</p>)}
      />      
      <TextBlock text={(<p>A student like this will rarely, if ever, prompt you for clarification on something they don't understand or respond affirmatively when you ask something like "Do you have any questions?" / "Anyone have any questions?". This is terrible because even mildly complicated concepts don't sink in until they've been explained two or three different times and practically used, and even then odds are decent more practical use is needed to really cement it.</p>)} />
      <TextBlock text={(<p>So your first objective, which you'll be working towards the entire time you're this students teacher, is making them comfortable around you and trust that you will never make them feel stupid or privately see them as such. Make a real effort to be friendly and most critically, never display the slightest hint of annoyance, impatience or anger, not even with issues unrelated to your students while you're in their presence.</p>)} />
      <TextBlock text={(<p>If it's aimed at them you're dealing a killing blow to their confidence, you're telling them they're stupid, do it enough times and they'll either disengage entirely or come to resent you, but probably both. I say to avoid it even when it's not directed at them because just knowing you're capable of that reaction makes their brains subconsciously dread that it'll be aimed at them if they mess up.</p>)} />
      <TextBlock text={(<p>Here are some active ways to gain their trust and build their confidence while you're not accidentally cratering it:</p>)}/>
      <ListBulletPoints
        textStrings={[
          `Prompts like "Any questions?" rarely yield results with new students. Privately prompting a student right before they have to demonstrate their knowledge with a friendly "Anything you want to brush up on real quick?" is much more likely to get an affirmative response and signals to their brain that you're not bothered by reexplaining things. They're also likely nervous about this imminent "test", especially regarding the concepts they're fuzzy on, so you swooping in at this moment can be an immense relief and confidence booster. It also signals that you actually give a shit about them, which you ideally do anyway, which makes them like you and therefore more comfortable and trusting.`,
          `Whenever possible, do live, unrehearsed demonstrations of what you're teaching, like writing code. Making mistakes is not only a good potential mini-segue to explaining how this mistake was made (and troubleshooting is a major aspect of many jobs), it also shows that even you, the best pro ever, makes silly mistakes.`
        ]}
      />

      <TextBlock
        titleText="Always Be Honest, but with a Light Touch"
        text={(<p>People are very good at knowing when you're blowing smoke up their ass or condescending to them in any way. Doing so tells them you think they're stupid, you're just too nice to express it. When it comes to evaluating their work, always be honest, but with a light touch. Specifically, tell them in objective terms what the biggest problems are and how they can be addressed. If there's a ton of problems, don't bring up lesser offenses, you can address those in subsequent attempts. Balance the negativity with interspersed good things they did, even if very minor, and point out every last good thing. You're presumably knowledegeable in this area, you can find good aspects in even awful work.</p>)}
      />
      <TextBlock text={(<p>Bringing up every last good aspect <u>honestly, never condescendingly making something up</u>, also signals you're diligently looking through the entirety of their effort and as such give a shit, which matters because of the following:</p>)} />
      <TextBlock text={(<p>This practice of honestly and thorough analysis of their work has a critical effect if you're able to get your students confident, trusting and ideally liking you, which is that they'll want to impress you. Receiving praise and recognition feels good to anyone, but getting it on all the aspects you worked hard on, from a person whose knowledge on the topic you respect and you know is truthful, is crack-cocaine to the human brain.</p>)} />
      <TextBlock text={(<p>To receive this addictive praise, students become highly engaged in learning and will start asking questions or for help of their own accord, which they're no longer scared of doing, and the work they turn in will be high effort. When a student prompts you with a startlingly insightful question you'll know you've won, congrats on accomplishing something unfortunately few teachers know how to.</p>)} />

    </Page>
  )
}
