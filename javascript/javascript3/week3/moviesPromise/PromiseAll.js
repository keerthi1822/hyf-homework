//rendering data to html using DOM
function renderList(owner, fullname, repourl) {
  const uList = document.querySelector("ul");

  const liElement = document.createElement("li");
  liElement.innerHTML = owner;

  const uListChild = document.createElement("ul");
  const liElementChild = document.createElement("li");
  liElementChild.innerHTML = fullname;
  uListChild.appendChild(liElementChild);

  const liRepo = document.createElement("li");
  liRepo.innerHTML = repourl;
  uListChild.appendChild(liRepo);

  liElement.appendChild(uListChild);
  uList.appendChild(liElement);
}
//returning 3 promises p1,p2,p3
const repositoriesUrls = [
  "https://api.github.com/search/repositories?q=user:SQasemi",
  "https://api.github.com/search/repositories?q=user:kseniiazar ",
  "https://api.github.com/search/repositories?q=user:humayunadilshahzad"
];
console.log(repositoriesUrls);

const promises = repositoriesUrls.map(repository => fetch(repository));
console.log(promises);

Promise.all(promises)
  .then(responses => {
    const promisesJsons = responses.map(response => response.json());
    console.log(promisesJsons);
    return Promise.all(promisesJsons);
  })
  .then(repositories=>{
    console.log(repositories);
  })

//using Promise All
/* Promise.all([p1, p2, p3])
.then(repoInfo => {
  console.log(repoInfo);
  //console.log(typeof repoInfo);
  }) */

//Mapping array of fetch object to find owner, fullname, repository urls
