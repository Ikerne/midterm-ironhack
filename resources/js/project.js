/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */

/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
let parameters = new URLSearchParams(location.search);
const postUrl = parameters.get('p');

// hero post


const getHeroProject = () => {
     fetch(`https://jsonplaceholder.typicode.com/posts`)
     .then((response) => {
        if(!response.ok) throw new Error("Post not found");
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const title = data[0].title.substring(0, data[0].title.indexOf(" "));
        const subtitle = data[0].title;
        const subtitleWords = subtitle.split(' ');
        const shortenedSubtitle = subtitleWords.slice(0, 5).join(' ');

        document.querySelector(".hero-project-container").innerHTML +=
        `<h1>${title}</h1>
        <div class = "subtitle-container">
            <h2>${shortenedSubtitle}</h2>
            <h3>Completed on 24/01/23</h3>
        </div>
        <div class = "image-container">
            <img src="/resources/images/projects-section/${data.id <= 3 ? data.id : Math.floor(Math.random() *6+1)}.jpg" alt="hero project image fail"
        </div>
        <div class="project-body-container"><p>${data[0].body}</p></div>`;
    })
    .catch((error) => console.log(error))
}
getHeroProject(postUrl);

//3 projects 


// window.addEventListener("load", getHeroProject);
// three projects section

const getProjects = () => {

    fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then((response)=> response.json())
    .then ((data)=> {
        console.log(data)
        let i = 0;
        for (i; i<3; i++){
            const subtitle = data[i].title;
            const subtitleWords = subtitle.split(' ');
            const shortenedSubtitle = subtitleWords.slice(0, 5).join(' ');
            document.querySelector(".container-project").innerHTML += 
            `<div class = "project"> 
            <img src= "./resources/images/projects-section/${data[i].id}.jpg" alt="project image fail">
            <h3>${shortenedSubtitle}</h3>
            <p>${data[i].body}</p>
            <a href = "project.html?p=${data[i].id}">Learn More</a>  
            </div>`;
        }

    
    })
    .catch((error) => console.log(error))
}
window.addEventListener("load", getProjects);