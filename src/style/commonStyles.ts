import { CSSProperties } from "react";
import { fontSizes, fontWeights } from "./theme";

// This are essentially classes, but I wanted to divest from using classes entirely for simplicities sake.
export const textBlockStarter: CSSProperties = {
  fontSize: fontSizes.mediumXLarge,
  fontWeight: fontWeights.mediumHeavy
}