const repositoriesUrls = [
  "https://api.github.com/search/repositories?q=user:SQasemi",
  "https://api.github.com/search/repositories?q=user:kseniiazar ",
  "https://api.github.com/search/repositories?q=user:humayunadilshahzad"
];
console.log(repositoriesUrls);

const promises = repositoriesUrls.map(repository => fetch(repository));
//console.log(promises);

Promise.all(promises)
  .then(responses => {
    const promisesJsons = responses.map(response => response.json());
    //console.log(promisesJsons);
    return Promise.all(promisesJsons);
  })
  .then(repositories => {
    console.log(repositories);
    repositories.forEach(repository => {
      console.log(repository);
      const uList = document.querySelector("ul");

      const liElement = document.createElement("li");
      liElement.innerHTML = repository.items[0].owner.login;
      repository.items.forEach(item => {
        const uListChild = document.createElement("ul");
        const liElementChild = document.createElement("li");
        liElementChild.innerHTML = item.full_name + " -- " + item.git_url;
        uListChild.appendChild(liElementChild);

        liElement.appendChild(uListChild);
        //console.log(item.full_name);
        //console.log(item.git_url);
      });
      uList.appendChild(liElement);
    });

    /*     const allReopositoriesAsOneArray = eachRepoItems.flat();
    console.log(allReopositoriesAsOneArray);
    allReopositoriesAsOneArray.forEach(eachRepo => {
      renderList( eachRepo.owner.login, eachRepo.full_name, eachRepo.url)
      
    }); */
  });

//using Promise All
/* Promise.all([p1, p2, p3])
.then(repoInfo => {
  console.log(repoInfo);
  //console.log(typeof repoInfo);
  }) */

//Mapping array of fetch object to find owner, fullname, repository urls
/*--------Actual programm(Benjamin solution from class)-----*/

 const githubUserRepositiries = ['https://api.github.com/search/repositories?q=user:keerthi1822','https://api.github.com/search/repositories?q=user:Sanahayat', 'https://api.github.com/search/repositories?q=user:nmoskaleva']
    const repositoryPromises = githubUserRepositiries.map (repository => fetch(repository))
    let usersUl = document.querySelector ('.users');

    Promise.all(repositoryPromises)
        .then (responses => {
            const jsonPromises = responses.map(response => response.json());
            //console.log(jsonPromises);

            return Promise.all (jsonPromises)
        })
        .then(repositories => {
            console.log(repositories);
            repositories.map ((user) => {
                let userLi = document.createElement ('li')
                userLi.innerHTML = user.items[0].owner.login;
                usersUl.appendChild (userLi);
    
                user.items.map((repo) => {
                        
                    let newUl = document.createElement ('ul');
                    let li = document.createElement ('li');
                    li.innerHTML = repo.name + ': ' + repo.html_url;
        
                    newUl.appendChild (li);
                    userLi.appendChild (newUl);
                    
                });
            })
        });
