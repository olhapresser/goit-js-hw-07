const inputData = document.querySelector('#name-input');
const spanData = document.querySelector('span');


inputData.addEventListener('input', (evt) => {
    const name = evt.target.value.trim();

    if (name === "") {
        spanData.textContent = "Anonymous";
    } else {
        spanData.textContent = name;
    }
});

