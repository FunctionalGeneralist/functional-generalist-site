# Features
This site, made with ReactJS and TypeScript, has a number of notable features that are good for a smaller personal site:
- No backend
- All important CSS values, such as the sites color palette, element spacing and more kept in a single file with logical, easy to understand variable names for easy dev configuration. Styling is done in component using these values, so no confusing or conflicting classes
- Flexible components with many props, all of which are self documenting or explcitely documented in-code.

Other features are more my personal preference but that I think make development easier or are beneficial overall:
- is a Single Page Application
- Utilizes entirely grid containers so that parents determine childrens position, children do not push around other children with things like margin

# Style Configuration
"Fundamental" CSS values are kept and calculated in styles.ts, namely element spacing and the breakpoint for desktop to mobile view.
"Theme" values are kept in theme.ts, such as the color palette. Honestly, these *could* be in the same file but the differentitation between the two is logical enough to me.
