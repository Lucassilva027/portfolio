const uiEn = require("./ui-en");
const uiPt = require("./ui-pt");
const profileEn = require("./profile-en");
const profilePt = require("./profile-pt");

const UI = { en: uiEn, pt: uiPt };
const PROFILE = { en: profileEn, pt: profilePt };

function getUi(locale) {
  return UI[locale] || UI.en;
}

function getProfile(locale) {
  return PROFILE[locale] || PROFILE.en;
}

function normalizeLocale(locale) {
  return locale === "pt" ? "pt" : "en";
}

module.exports = { getUi, getProfile, normalizeLocale };
