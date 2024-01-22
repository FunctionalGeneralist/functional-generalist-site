function buildSlugs() {
  let home = "/home"
  let projects = "/projects"
  let articles = "/articles"

  return {
    home: home,
    projects: projects,
    articles: articles,

    // Projects.
    simpleDmxController: projects + "/simple-dmx-controller",
    dndTable: projects + "/dnd-table",

    // Articles
    teachingEffectively: articles + "teaching-effectively"
  }
}

export default buildSlugs()
