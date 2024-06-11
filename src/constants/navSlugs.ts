function buildSlugs() {
  let home = "/home"
  let projects = "/projects"
  let articles = "/articles"
  let gamingThings = "/gaming-things"
  let contactAndAbout = "/contact-and-about"

  return {
    home: home,
    projects: projects,
    articles: articles,
    contactAndAbout: contactAndAbout,

    // Projects.
    simpleDmxController: projects + "/simple-dmx-controller",
    dndTable: projects + "/dnd-table",

    // Articles.
    teachingEffectively: articles + "/teaching-effectively",

    // Gaming things.
    warnoSeizeDeep: gamingThings + "/warno-seize-deep"
  }
}

export default buildSlugs()
