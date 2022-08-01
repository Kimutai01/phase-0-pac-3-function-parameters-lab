const introduction = (nam) => `Hi, my name is ${nam}.`;

const introductionWithLanguage = (name, language) => {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

const introductionWithLanguageOptional = (name, language = "JavaScript") => {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

module.exports = {
  introduction,
  introductionWithLanguage,
  introductionWithLanguageOptional,
};
