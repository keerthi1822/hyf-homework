class Candidate {
  constructor(title, skills, personality, languages) {
    this.title = title;
    this.skills = skills;
    this.personality = personality;
    this.langúages = languages;
  }
}

class Personality {
  constructor(fastLearner, curios, independent) {
    this.fastLearner = fastLearner;
    this.curios = curios;
    this.independent = independent;
  }
  apply_position(candidate) {
    let confirmed_traits = ["fastLearner", "curious", "independent"].every(
      x => {
        return typeof candidate.personality[x] !== "undefined"
          ? candidate.personality[x] === true
          : false;
      }
    );

    let confirmed_languages = ["danish", "english"].some(x => {
      return candidate.langúages.indexOf(x) > -1;
    });

    let confirmed_skills = ["Javascript", "CSS", "HTML"].every(x => {
      return candidate.skills.indexOf(x) > -1;
    });

    const isMatched=[isTraits, isLanguages, isSkills].every(match => {
    return (match?true:false);
  });
  if (isMatched) {
    send_application(candidate, 'https://thehub.dk/jobs/front-end-developer-join-an-innovative-team');
  }
  else alert(`Dear ${candidate.name} we are sorry,\nyour application does not match\n our criteria`);
}
  }

const candidateProfile = new Candidate(
  "web developer",
  ["HTML", "CSS", "Javascript"],
  [],
  ["english", "danish"]
);

const doPersonalSkillsMatches = new Personality(true, true, true);
const isRightPerson = doPersonalSkillsMatches.apply_position("keerthi");

/* class Candidate {
  constructor(name,title,skills,personalities,languages){
    this.name=name;
    this.title=title;
    this.skills=skills;
    this.personalities=personalities;
    this.languages=languages;
  }
}

class Personality {
  constructor(isFastLearner,isCurious,isIndependent){
    this.isFastLearner=isFastLearner;
    this.isCurious=isCurious;
    this.isIndependent=isIndependent;
  }
}


const personalities= new Personality(true,true,true);
const candidateForm= new Candidate('Badr Amine','FullStack Developer',['Javascript','CSS','HTML'],personalities,['english']);


const send_application=function(applicant,url){
  console.log(applicant);
  console.log(url);
  alert(`Dear ${applicant.name} we have recieved your application.\nWe will come back to you.\nThank you for applying.`);
}
const apply_position = function(candidate) {
  const isTraits = ['isFastLearner', 'isCurious', 'isIndependent'].every(personality => {
    return (candidate.personalities[personality]) !== undefined ? candidate.personalities[personality] === true : false;
  });
  const isLanguages = ['danish', 'english'].some(language => {
    return candidate.languages.indexOf(language) > -1;
  });
  const isSkills = ['Javascript', 'CSS', 'HTML'].every(skill => {
    return candidate.skills.indexOf(skill) > -1;
  });
  const isMatched=[isTraits, isLanguages, isSkills].every(match => {
    return (match?true:false);
  });
  if (isMatched) {
    send_application(candidate, 'https://thehub.dk/jobs/front-end-developer-join-an-innovative-team');
  }
  else alert(`Dear ${candidate.name} we are sorry,\nyour application does not match\n our criteria`);
}
apply_position(candidateForm);
 */