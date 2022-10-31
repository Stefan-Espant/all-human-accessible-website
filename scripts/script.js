const allButtons = document.querySelectorAll('.subcat-btn')
const allContent = document.querySelectorAll('.content-item')

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        allContent.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })
});


//stappen plan voor een actie of microinteractie
//1: selecteer het element in een variabele (queryselector)
//2: event toevoegen (addEventlistener)
//3: class aan een element toevoegen (classlist)

//const increaseFontSize = document.querySelector('p')

function fontSize() {
    const textincrease = document.getElementById("fontIncrease")
    textincrease.classList.toggle('text-large')
    textincrease.style.fontSize = textincrease.style.fontSize === '200%' ? '100%' : '200%'
};

const allHeadingOne = document.querySelectorAll('h1');

function colorChange() {
    const allHeadingOne = document.querySelector('h1');
    allHeadingOne.classList.toggle('dark-contrast');
    allHeadingOne.addEventListener('click, colorChange()');
};