const display = document.querySelector('.display')
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const del = document.querySelector('[data-delete]')
const all_clean = document.querySelector('[data-clean]')
const previous = document.querySelector('[data-previous-operation]')
const current = document.querySelector('[data-current-operation]')

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        if (current.innerText.length > 9) display.style.paddingLeft = '1.6rem'
        if (current.innerText.length >= 30) return
        if (btn.innerText == '.' && current.innerText.includes('.')) return
        current.innerText += btn.innerText
    })
})

operations.forEach(btn => {
    btn.addEventListener('click', () => {
        if (current.innerText === '') return
        if (previous.innerText != '') {
            previous.innerText = compute() + btn.innerText
            current.innerText = ''
            return
        }
        previous.innerText = current.innerText + btn.innerText
        current.innerText = ''
    })
})

equals.addEventListener('click', () => {
    if (current.innerText == '') return
    current.innerText = compute()
    previous.innerText = ''
})

all_clean.addEventListener('click', () => {
    current.innerText = ''
    previous.innerText = ''
})

del.addEventListener('click', () => {
    current.innerText = current.innerText.slice(0, current.innerText.length - 1);
})

function compute() {
    if (previous.innerText.includes('x')) previous.innerText = previous.innerText.replace('x', '*')
    if (previous.innerText.includes('÷')) previous.innerText = previous.innerText.replace('÷', '/')
    return eval(previous.innerText + current.innerText)
}
