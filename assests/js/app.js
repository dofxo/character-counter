// gets the input of the textArea and stores in a variable every 0.5s

const textArea = document.getElementById('text-area')
const colorTemplate = document.getElementById('color-template')
const countedWords = document.getElementById('counts')
const body = document.body
setInterval(() => {
    let words = textArea.value
    let wordsLength = words.length
    countedWords.innerHTML = `${wordsLength}`
}, 500)

// template changes
const colorsTemps = document.querySelectorAll('.colors')
const newColors = document.querySelectorAll('.new-colors')


function templateChange(templateColor, bodyBgColor) {
    newColors.forEach(el => {
        el.style.color = templateColor
        textArea.style.borderColor = templateColor
        colorTemplate.style.borderColor = templateColor
        body.style.background = bodyBgColor

    })

}



// listens for events to change templateColors

colorsTemps[0].addEventListener('click', () => {
    templateChange('#828282', '#d9d9d9f9')
})
colorsTemps[1].addEventListener('click', () => {
    templateChange('#2f572f', '#2f572f99')
})
colorsTemps[2].addEventListener('click', () => {
    templateChange('#F96666', '#ff1e1e6b')
})
colorsTemps[3].addEventListener('click', () => {
    templateChange('#848413', '#eded6658')
})
colorsTemps[4].addEventListener('click', () => {
    templateChange('#5C2E7E', '#5d2e7e9d')
})
colorsTemps[5].addEventListener('click', () => {
    templateChange('#182747', '#7895B2b2')
})
colorsTemps[6].addEventListener('click', () => {
    templateChange('#4C0033', '#e80f8686')
})
