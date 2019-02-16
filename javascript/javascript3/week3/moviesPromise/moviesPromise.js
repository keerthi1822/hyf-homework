
function mapItems(dataItems){
dataItems.map((dataitem)=>{
    console.log(dataitem.full_name);
    console.log(dataitem.owner.login);
    console.log(dataitem.owner.repos_url);
    renderList(dataitem.owner.login,dataitem.full_name,dataitem.owner.repos_url);
  
});
}

function renderList(owner,fullname,repourl){
const uList = document.querySelector('ul');
    const liElement = document.createElement('li');
    liElement.innerHTML= owner;

    const uListChild = document.createElement('ul');
    const liElementChild = document.createElement('li');
    liElementChild.innerHTML= fullname;
    uListChild.appendChild(liElementChild);
    
    const liRepo = document.createElement('li');
    liRepo.innerHTML = repourl;
    
    uListChild.appendChild(liRepo);

    liElement.appendChild(uListChild);
    uList.appendChild(liElement);
}
let p1 = fetch('https://api.github.com/search/repositories?q=user:SQasemi')
    .then(response=> response.json())
    .then((data)=>{
        // console.log(data);
        //  console.log(data.items);
        //  console.log(data.items[0].owner.repos_url);
         mapItems(data.items);
    });

let p2 = fetch('https://api.github.com/search/repositories?q=user:kseniiazar ')
.then(response=> response.json())
.then((data)=>{
    // console.log(data);
    // console.log(data.items);
    mapItems(data.items);
});

let p3 = fetch('https://api.github.com/search/repositories?q=user:humayunadilshahzad')
.then(response=> response.json())
.then((data)=>{
    // console.log(data);
    // console.log(data.items);
   mapItems(data.items);
});

Promise.all([p1,p2,p3]);
