const labels = document.querySelectorAll('.form-control label')

labels.forEach (label => {
    label.innerHTML = label.innerText
        // Splits the letters into an array
        .split('')
        // turns into an array of whatever we want
        .map((letter, indx) => `<span>${letter}</span>`)
        // Turns it back into a string
        .join('')
})