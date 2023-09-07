



document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password')
    const username = document.getElementById('user')
    const button = document.getElementById('button')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const data = {
            username: username.value,
            password: password.value 
        };
        console.log(data)

    });

});

document.addEventListener('DOMContentLoaded', () => {

    let checkbox = document.getElementById('casilla');

    checkbox.addEventListener('change', (e) => {
        console.log(e)
    })
});

