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
      titleText="The Final Boss of WARNO: Seizing a Deep Position"
      addFollowingLine={true}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg1">
        <defs
          id="defs1" />
        <g
          id="layer1"
          style={{display: "inline"}}>
          {tangle}
          <ellipse
            style={{fill: "#209600", fillOpacity: 1, strokeWidth: 0.26483}}
            id="path3"
            cx="160.15215"
            cy="91.534004"
            rx="35.344814"
            ry="30.683958" />
          <ellipse
            style={{fill: "#9c1f45", fillOpacity: 1, strokeWidth: 0.26483}}
            id="path4"
            cx="60.850044"
            cy="159.76373"
            rx="32.367046"
            ry="30.295553" />
          <path
            style={{fill: "#000000", fillOpacity: 1, strokeWidth: 0.26483}}
            id="path5"
            d="m 154.84395,180.47864 -17.08365,2.29523 -7.79423,15.3743 -7.46203,-15.53825 -17.03038,-2.66183 12.47186,-11.8984 -2.73113,-17.0194 15.17007,8.18463 15.34245,-7.85674 -3.09625,16.95678 z" />
        </g>
      </svg>
    </Page>
  )
}