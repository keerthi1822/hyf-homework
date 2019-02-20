class Candidate {
    constructor(title,skills,personality,languages){
     this.title=title;
      this.skills= skills;
      this.personality= personality;
      this.langúages= languages;
    }
}
  
class Personality {
    constructor(fastLearner,curios,independent){
      this.fastLearner= fastLearner;
      this.curios= curios;
      this.independent= independent;
    }
   apply_position(candidate) {
      let confirmed_traits = ['fastLearner', 'curious', 'independent'].every(x => {
          return typeof(candidate.personality[x]) !== 'undefined' ? candidate.personality[x] === true : false;
      });
  
      let confirmed_languages = ['danish', 'english'].some(x => {
          return candidate.langúages.indexOf(x) > -1;
      });
  
      let confirmed_skills = ['Javascript', 'CSS', 'HTML'].every(x => {
          return candidate.skills.indexOf(x) > -1;
      });
  
      if ([confirmed_traits, confirmed_languages, confirmed_languages].every((x) => {
          send_application(candidate, 'https://thehub.dk/jobs/front-end-developer-join-an-innovative-team')
      })){
          console.log("Ready to go");
      }
    }
  }
  const candidateProfile = new Candidate("web developer",["HTML","CSS","Javascript"],[],["english","danish"]);

  
  const doPersonalSkillsMatches = new Personality("true","true","true");
 const isRightPerson = doPersonalSkillsMatches.apply_position("keerthi");
 console.log(isRightPerson);
  