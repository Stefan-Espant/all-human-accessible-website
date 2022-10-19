const allButtons = document.querySelectorAll('.subcat-btn')
const allContent = document.querySelectorAll('.content-item')

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        allContent.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })
})

function increaseFontSize() {
    const text = document.getElementsByClassName(".folder");
    text.classList.toggle(".text120");
}

function increaseContrast() {
    const element = document.body;
    element.classList.toggle("dark-contrast");
  } 

