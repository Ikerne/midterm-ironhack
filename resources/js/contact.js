/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
const sendForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;

    console.log(`Form values: ${name} ${email} ${phone} ${message}`);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: `${email} ${phone} ${message}`,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => {
            if(response.status===201){
                // alert('Thank you! Your message has been sent.');
                document.querySelector('.alertMessage').style.display = "block";
                setTimeout(()=> document.querySelector('.alertMessage').style.display = "none", 3000);
                document.getElementById("formularioContent").reset();
            } else {
                // alert('Uh-Oh! Something went wrong.');
                document.querySelector('.errorMessage').style.display = "block";
                setTimeout(()=> document.querySelector('.errorMessage').style.display = "none", 3000);
            }
            return response.json();
        })
        .then((json) => console.log(json));
}

document.querySelector('#formularioContent').addEventListener('submit', sendForm);


/*BURGER*/

const hamburger = document.querySelector(".hamburger");
const barmenu = document.querySelector(".barmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    barmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    barmenu.classList.remove("active");

}))