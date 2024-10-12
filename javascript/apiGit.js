const divCount= document.querySelector(".github-count");

const cuentaGit=`https://github.com/CristianAGarces`;

const ApiUserGit= `https://api.github.com/users/CristianAGarces`;

async function fetchingData(){
    try{
        const response= await fetch(`${ApiUserGit}`);

        const data= await response.json();

        console.log(response);
        console.log(data)

        const username=data.login;
        const name=data.name;
        const avatar=data.avatar_url;
        const bio=data.bio;
        const followers=data.followers;
        const following=data.following;
        const location=data.location;

        divCount.innerHTML=`<div class="git"><div class="text-git"><p>${username}</p> <p>${name}</p></div> <img src=${avatar} alt="usuario ${name}"  title="usuario ${name}" /> <p class="location">${location}</p> <p class="bio">${bio}</p> <div class="text-git"><p>Seguidores: ${followers}</p> <p>Siguiendo: ${following}</p></div><a id="button" title="ir ami github de: ${name}" href="${cuentaGit}">Ir a mi GitHub</a></div>`

        // const button=document.getElementById("button");

        // button=addEventListener("click",()=>{

        // })
    }catch(e){
        console.log(`Error tipo: ${e}`);
    }
}

fetchingData();