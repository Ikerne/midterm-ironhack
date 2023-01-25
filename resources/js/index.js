/* geting text, images & links for the projects section from an api */

const getProjects = () => {
    fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then((response)=> response.json())
    .then ((data)=> {
        console.log(data)
        for (let i=0; i<3; i++){
            document.querySelector(".container-project").innerHTML += 
            `<div class = "project"> 
            <img src= "./resources/images/projects-section/${data[i].id}.jpg" alt="project image fail">
            <h3>${data[i].title}</h3>
            <p>${data[i].body}</p>
            <a href = "project.html?p=${data[i].id}">Learn More</a>  
            </div>`;
        }
    
    })
    .catch((error) => console.log(error))
}
window.addEventListener("load", getProjects);