/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
const sendForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;

    //console.log(`${name} ${email} ${phone} ${message}`);

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
                alertMessage('Thank you! Your message has been sent correctly.');
                document.querySelector('.alertMessage').style.display = "block";
                setTimeout(()=> document.querySelector('.alert').style.display = "none", 4500);
                document.getElementById("formularioMessage").reset();
            } else {
                errorMessage('Uh-Oh! Something went wrong. Please fill out the form again.');
                document.querySelector('.errorMessage').style.display = "block";
                setTimeout(()=> document.querySelector('.errorMessage').style.display = "none", 4500);
            }
            return response.json();
        })
        .then((json) => console.log(json));
}

document.querySelector('#formularioMessage').addEventListener('submit', sendForm);