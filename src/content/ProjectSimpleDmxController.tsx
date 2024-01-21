import {useAtom, useAtomValue} from "jotai"
import {useEffect} from "react"
import {screenIsSmallAtom, sideBarContentAtom, sidebarIsCollapsedAtom, sidebarIsHiddenAtom} from "../atoms"
import Page from "../components/Page"
import TextBlock from "../components/TextBlock"
import {textBlockStarter} from "../style/commonStyles"
import SimpleDmxControllerBeautyShot from "../assets/simple-dmx-controller-arduino-beauty-shot.jpg"
import EtcIon from "../assets/etc-ion.jpg"
import CardImage from "../components/CardImage"
import TextBlockWithInlineElement from "../components/TextBlockWithInlineElement"
import ListBulletPoints from "../components/ListBulletPoints"
import ControlScreen from "../assets/control-screen.png"

export default function ProjectSimpleDmxController() {
  const screenIsSmall = useAtomValue(screenIsSmallAtom)
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useAtom(sidebarIsCollapsedAtom)
  const [sidebarContent, setSidebarContent] = useAtom(sideBarContentAtom)

  useEffect(() => {
    setSidebarIsCollapsed(false)
    setSidebarContent([
      <a target="_blank" rel="noreferrer" href="https://github.com/FunctionalGeneralist/simple-dmx-controller-arduino">Microcontroller GitHub Repo</a>,
      <a target="_blank" rel="noreferrer" href="https://github.com/FunctionalGeneralist/simple-dmx-controller">React Native App GitHub Repo</a>
    ])
  }, [setSidebarIsCollapsed, setSidebarContent])

  return (
    <Page
      titleText="My First Major Project: Simple DMX Controller"
      subtitleText="A saga of hopeless naivety and pain, but ultimately, triumph"
      additionalSubtitleText="Published 2024/01/17"
      italicizeAddSubtitle={true}
      addFollowingLine={true}>
      <TextBlockWithInlineElement
        colSizes={[1, 1]}
        textBlocks={[
          <p><span style={textBlockStarter}>This</span> was originally made back in 2020 when I was relatively new to programming, in hindsight it's amazing that I got all the way to completion because many parts were a true nightmare for a novice developer.</p>,
          <p>I started this project to solve a problem at the school I taught at, namely that it was very annoying for both me and other staff to turn on the lights on stage. Professional lighting equipment isn't controlled by simple dimmer switchs, instead it's controlled by rather complicated dimmer switches, which are themselves controlled from a dedicated lighting controller like the popular ETC Ion you see pictured here.</p>
        ]}
        inlineElement={
          <CardImage
            image={EtcIon}
            altDescription="a professional lighting controller, an ETC Ion"
            subtitleText="Functionally a $20,000 Windows 7 device with neato switches and a UI that's hardly advanced since the 80's" />
        } />

      <TextBlock text={(<p>These controllers are bulky, <i>very</i> expensive, require some technical knowledge to use, and are typically located in the booth where the tech personnel control the show which is in the very back of the house (where the audience sits) and up a flight of stairs. Most venues, ours included, have a very simple controller onstage for daily use. Ours, however, was broken and funds for a replacement were nonexistent.</p>)} />

      <TextBlock
        titleText="SparkFun to the Rescue"
        text={(<p>SparkFun is a small-ish manufacturer of Arduino-type microcontrollers (and a very good one, in my opinion) and I discovered that they made a HAT that allowed their ESP32 Thing Plus to send and receive signals in the DMX512 protocol, which is used to talk to most professional lighting equipment. It was also the height of the 2020 pandemic and I had been working on learning CS and programming to transition careers, so I threw caution and the requisite $40 for the hardware to the wind. I thought it would be tough, but I was up to a challenge and had a lot free time, I'll crank this out in a couple months right? ...Right?</p>)}
      />

      <TextBlock
        titleText="Design"
        text={(<p>Armed with this microcontroller capable of communication over wifi and bluetooth, my phone, a few CS50 courses and way too much ambition, I began by laying out some broad design objectives.</p>)}
      />
      <ListBulletPoints
        textStrings={[
          "First, it needs to be extremely fast to turn on and off the lights. Nobody is going to use the app if takes forever to connect or there's many actions that need to be taken to do so. I would like the user to be able to open the app and be immediately presented with a slider to fade up their particular group of lights, no additional actions, no waiting for more than a handful of seconds for the app to wirelessly.",
          "Second, it needs to be childishly simple for the end user to use while also including some more technical options for the resident lighting technician (myself in this case, although I was hoping other people could use this thing, which some people actually did! Shoutout to that one French guy that emailed me).",
          "And finally, it has to be dirt cheap. I'm doing this of own volition, god only knows why, and on a salary funded by the US public school system that means inexpensive is the name of the game. That was easy enough, the microcontroller and HAT cost me about $40 and I'll be writing both the mobile app and microcontroller code myself. The biggest cost by far ended up being the tremendous damage to me, mostly whatever metrics that are used to measure an individuals general level of innocence, overall contentment with life, stuff like that. We'll get to that."
        ]}
      />
      <CardImage
        image={SimpleDmxControllerBeautyShot}
        altDescription="a microcontroller with a DMX hat"
        subtitleText="Enjoy this picture of the microcontroller in question, it breaks up visual monotony and ideally helps your brain stay engaged"
      />
      <TextBlock text={<p>We can only control the intensity (level of brightness) of these older lighting instruments. The DMX commands the microcontroller will be issuing to control the lights are pretty simple: specify a channel, which is an int between 1 and 512, and an intensity between 0 and 100. Large, computer controlled dimmers then adjust the amount of power sent to that channel (which here is essentially just a power circuit) and the attached light changes in intensity.</p>} />
      <TextBlock text={<p>Precisely what the flow of the program would be would solidify as I worked on this, but here's how it ended up:</p>} />
      <ListBulletPoints
        textStrings={[
          "When the microcontroller is turned on, an object that represents saved settings is deserialized from the onboard flash memory. Each object has a string nickname, an array of 32 ints that are the groups channels, an intensity int, and a unique ID. 32 is going to be the maximum number of channels we can control at one time, the microcontroller can do more but there's an inconsistent, rather long slowdown if I go over around 32, so that's our hard limit. If the object isn't in memory, a blank one is initalized.",
          "When the app is opened, which defaults to the 'control' screen, it starts scanning for BLE devices. It will automatically connect to the microcontroller, identified by its UUID. Note: I highly doubt my extremely niche project becomes so popular that this UUID conflicts with other instances of the hardware within BLE range, so I'll deal with that if it happens. The user can also manually connect and disconnect from BLE devices.",
          "On connection, the microcontroller sends the object as a JSON to the phone, which the phone uses to populate both the control screen and the setup screen where groups can be altered.",
          "The user can now adjust the intensity of groups of channels and change which channels are in the group or the nickname, both of which send a JSON to the microcontroller that indicates what action the user is doing alongside the payload. The microcontroller saves these settings whenever any setting is altered and pushes the updated data to all connected devices."
        ]}
      />

      <TextBlock
        titleText="The Rubber Meets the Bluetooth Road, and It's A Massacre"
        text={(<p>One of the CS50 courses I went through was on mobile app development using React Native, so that would be the framework for the mobile app. This microcontroller, like most, was programmed in C++. I also took the base CS50 course where you use primarily C, which is probably close enough, right? ...Right?</p>)}
      />
      <TextBlockWithInlineElement
        colSizes={[3, 1]}
        textBlocks={[
          <p>I have two potential ways to wirelessly connect to the microcontroller from the app: wifi or BLE. I can't do a dedicated router for the wifi because the user would have to switch from the schools network which is time consuming and annoying. I can't connect the microcontroller to the schools network because it uses credentials and I suspect I'd be introducing a vulnerability even if I could connect, so Bluetooth it is.</p>,
          <p>First roadblock: the CS50 course had the React Native app managed by Expo and Expo does not support BLE. In fact, public knowledge about using Bluetooth with React Native was strangely scarce, which I could hardly believe in the year of our lord 2020. I settle on one of the two libraries available, react-native-ble-plx, which is fully documented but examples are few and it's clearly written for mobile developers, not casual schlubs like me. Getting this library to do what I wanted was excrutiating and by far the most annoying and time consuming part of the project.</p>,
          <p>Second roadblock: getting the microcontroller to also communicate in Bluetooth and serve as a RESTful API. Counterintuitively, this was easier than React Native was but still an annoying process.</p>,
          <p>Third roadblock: saving an object to the microcontrollers memory. This completely blindsided me as I had foolishly assumed that I could simply save an object to memory. I didn't know about serializing objects and couldn't find the right terms to google to discover serializing, so I came up with my own solution: Process the object into a formatted string to save and reinflating the object using the string on load. Or put more concisely, serialization and deserialization. I'm actually a little proud that I came up with an identical solution to what's already used.</p>,
        ]}
        inlineElement={
          <CardImage
            image={ControlScreen}
            altDescription="the control screen for the app, which has presents a slider and nickname for every group of channels"
            subtitleText="Here's a very low res image of the control screen that I pulled from its Google Play listing, I'll maybe eventually get a fresh one." />
        }
      />

      <TextBlock text={(<p>Fourth roadblock: the cumulation of all the miscellaneous technical problems completely unrelated to making the programs, mostly stemmed by bugginess with React Native and phone emulators, React Native's "hot reload" feature, and everything to do with iOS. Just getting the damn app onto the iOS app store was a convoluted slog.</p>)} />

      <TextBlock
        titleText="One Year Later"
        text={(<p>In the end, it would be about a year before I got it all working and seemingly bug-free. But I did it! And it's not like it was anything close to a year of full time work and I learned a tremendous amount from the whole experience.</p>)}
      />
      <TextBlock text={(<p>I glanced over the microcontroller and React Native code and the microcontrollers is actually very solid. It's readable, it never failed or crashed for the year or so I used it, and even has some unused BLE hooks for some miscellaneous features that were implemented but eventually cut from the app due to React Native issues.</p>)} />
      <TextBlock text={(<p>And speaking of which, significant chunks of the React Native stuff is much more questionable. It's written in JS because I didn't know about TS, the UI is just hideous (if functional), it uses Redux which is kind of tedious to work with, and so on. But if you want to do this because the hardware is cheap, the app is functional as it exists, or if you want to make your own compatible thing I would at least glance it over to copy how it communicates with the microcontroller.</p>)} />

    </Page>
  )
}