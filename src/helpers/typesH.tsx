// Helper functions having to do with Types.

import { CommonPropValues } from "../types/CommonProps"

// Narrow strings, ints to a Types possible values. Each one defaults to a value if an arg provided matches none of the Type values.
export const castFrom = {
  stringTo: {
    size: function (sizeStr: string): CommonPropValues["size"] {
      switch (sizeStr) {
        case "tiny":
          return "tiny"
        case "small":
          return "small"
        case "medium":
          return "medium"
        case "large":
          return "large"
        case "xLarge":
          return "xLarge"
        default:
          return "medium"
      }
    }
  }
}