# Features
This site, made with ReactJS and TypeScript, has a number of notable features that are good for a smaller personal site:
- No backend
- All important CSS values, such as the sites color palette, element spacing and more kept in a single file with logical, easy to understand variable names for easy dev configuration. Styling is done in component using these values, so no confusing or conflicting classes
- Flexible components with many props, all of which are self documenting or explicitly documented in-code.

Other features are more my personal preference but that I think make development easier or are beneficial overall:
- is a Single Page Application
- Utilizes entirely grid containers with row-gap, column-gap, justify, align and padding to determine childrens position and spacing. This way, children aren't pushing around other children using margin, the only time margin is used is when its set to 0 to override default margin values on things like headers and paragraph text

# Style Configuration
"Fundamental" CSS values are kept and calculated in styles.ts, namely standardized element spacing and the breakpoint for desktop to mobile view. These values are not meant to be alterable by the user.

"Theme" values are kept in theme.ts, such as the color palette and font sizes, things that will (one day) be user alterable, that's coming at some point.
