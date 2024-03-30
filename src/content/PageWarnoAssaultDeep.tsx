import { motion } from "framer-motion";
import { FC, SVGProps, useState } from "react";
import Page from "../components/Page";

export default function PageWarnoSeizeDeep() {
  const [animateStep, setAnimateStep] = useState("0")

  const variants = {
    "0": {x: 50},
    "1": {x:25}
  }

  const tangle = (
    <motion.rect
      onClick={() => setAnimateStep("1")}
      variants={variants}
      animate={animateStep}
      width={68}
      height={58}
      x={29}
      y={37}
      fill="#fff"
      fillOpacity={1}
      strokeWidth={0.26}
    />
  )

  

  return (
    <Page
      titleText="The Final Boss of Warno: Seizing an Established Deep Position"
      addFollowingLine={true}
    >
      
    </Page>
  )
}