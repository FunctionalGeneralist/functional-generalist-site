import { useAtom } from "jotai";
import { useEffect } from "react";
import { sidebarContentAtom } from "../atoms";
import ListBulletPoints from "../components/ListBulletPoints";
import Page from "../components/Page";
import TextBlock from "../components/TextBlock";

export default function PageAbout() {
  const [sidebarContent, setSidebarContent] = useAtom(sidebarContentAtom)

  useEffect(() => {
    setSidebarContent([
      <a target="_blank" rel="noreferrer" href="https://github.com/FunctionalGeneralist/functional-generalist-site">This sites GitHub repo</a>
    ])
  }, [])

  return (
    <Page
      titleText="What This Site Is and Who I Am">

      <TextBlock
        text={(<p>I can be contacted at jeffrey@functionalgeneralist.com and I will probably reply.</p>)} />

      <TextBlock
        titleText="What's the purpose of this site?"
        text={(<p>As the homepage says, a repository for interesting things I make and things I have to say. Basically a personal blog.</p>)}/>

      <TextBlock
        titleText="Who are you, Jeffrey?"
        text={(<p>Just some guy, nobody particularly special. Having your actual identity known on to the public internet seems like a generally bad idea (see: <i>So You've Been Publicly Shamed</i>) so forgive me if I'm vague in some areas. That being said, I have a varied work history that's of some note: I started out teaching technical theater at a high (secondary) school and also worked events that took place in the school's auditorium, both internal and rented. I did this for about a decade and, in addition to needing to learn a lot of the skills on the job, had some control over my activities that enabled me to learn at least a moderate amount about the following skills:</p>)}/>

      <ListBulletPoints
        textStrings={[
          "How to teach",
          "Lighting design and general electrician work",
          "Live sound, sound design, etc (also got a 2 year degree in audio engineering)",
          "Set design, scenic carpentry and welding (mig, oxy acetlyene)",
          "Electronics (arduino's and such)",
          "Rigging",
          "Stage makeup and general costuming skills like taking someones measurements, light sewing, etc",
          "Project management, work as a tech director"
        ]}
      />

      <TextBlock
        text={(<p>Naturally the pay was awful but there were a lot of less obvious perks of working the job, one of which is that I was able to learn a ton of soft skills. The mention of that might make some linkedin-weary people roll their eyes but they do matter and it was great to pick up so many useful ones. I left this job around 2022 to work in software development full time, which is what I do now, mostly web development.</p>)} />

    </Page>
  )
}