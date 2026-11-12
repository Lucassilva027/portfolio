const {
  getAllProjects,
  getFeaturedProject,
  getPrimaryProjects,
  getArchiveProjects
} = require("../models/projectModel");
const { getUi, getProfile, normalizeLocale } = require("../i18n");

const DEVELOPER_BASE = {
  name: "Lucas Oliveira da Silva",
  email: "lucasoliveirasilva2008@gmail.com",
  whatsapp: "https://wa.me/555197715632",
  linkedin: "https://www.linkedin.com/in/lucas-oliveira-silva032/",
  github: "https://github.com/Lucassilva027"
};

const DEVELOPER_COPY = {
  en: {
    role: "Full Stack Developer",
    tagline:
      "Shipping web apps, AI agents, and browser games — with real demos and documented code."
  },
  pt: {
    role: "Desenvolvedor Full Stack",
    tagline:
      "Apps web, agentes de IA e jogos no navegador — com demos reais e código documentado."
  }
};

function buildViewModel(locale) {
  const loc = normalizeLocale(locale);
  const ui = getUi(loc);
  const profileData = getProfile(loc);
  const devCopy = DEVELOPER_COPY[loc];

  const developer = {
    ...DEVELOPER_BASE,
    role: devCopy.role,
    tagline: devCopy.tagline
  };

  const profile = {
    stackMain: profileData.stackMain,
    aboutLead: profileData.aboutLead,
    aboutBullets: ui.about.bullets,
    proof: {
      headline: ui.proof.tag,
      title: ui.proof.title,
      subline: ui.proof.subline,
      sections: profileData.proof.sections
    }
  };

  return {
    locale: loc,
    ui,
    pageTitle: ui.pageTitle,
    metaDescription: ui.metaDescription,
    developer,
    profile,
    allProjects: getAllProjects(loc, ui),
    featuredProject: getFeaturedProject(loc, ui),
    primaryProjects: getPrimaryProjects(loc, ui),
    archiveProjects: getArchiveProjects(loc, ui),
    langOtherUrl: loc === "en" ? "/pt" : "/",
    langOtherLabel: loc === "en" ? "PT" : "EN"
  };
}

function renderHome(locale) {
  return (req, res) => {
    res.render("index", buildViewModel(locale));
  };
}

module.exports = {
  buildViewModel,
  renderHome,
  renderHomeEn: renderHome("en"),
  renderHomePt: renderHome("pt")
};
