const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

lengthRange.addEventListener("input", () => {
    lengthValue.textContent = lengthRange.value;
});

const passwordInput = document.getElementById("passwordInput");
const capital = document.getElementById("capital");
const small = document.getElementById("small");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genratePasswordBtn = document.getElementById("genratebtn");

genratePasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const leng = parseInt(lengthRange.value);

    let Charset = "";
    if (capital.checked) {
        Charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (small.checked) {
        Charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked) {
        Charset += "0123456789";
    }
    if (symbols.checked) {
        Charset += "!@#$%^&*()_+{}[]|:;<>,.?/~`";
    }

    if (Charset == "") {
        alert("Please select at least one checkbox");
    }

    let password = "";
    for (let i = 0; i < leng; i++) {
        const randomIndex = Math.floor(Math.random() * Charset.length);
        password += Charset[randomIndex];
    }

    passwordInput.value = password;
})