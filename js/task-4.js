const form = document.querySelector('.login-form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const elems = evt.target.elements;
    const email = elems.email.value.trim();
    const password = elems.password.value.trim();

    if (!email || !password) {
         alert('All form fields must be filled in.');
        return;
    }

    const data = {
        email: email, 
        password: password,
    }
    console.log(data);
      form.reset();
})
