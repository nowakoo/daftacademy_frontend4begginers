const hambButton = document.querySelector('#hamburger')
const nav = document.querySelector('#navigation')

hambButton.addEventListener ('click', () => {
    nav.classList.toggle('page-navigation-displayed');
})


const concertButtons = document.querySelectorAll('.concerts__button')


concertButtons.forEach(button => {
    button.addEventListener ('click', () => {
        const container = button.parentElement;
        const paragraph = document.createElement('p');
        paragraph.textContent = ('Have Fun!');
        paragraph.classList.add('concerts__message');
        container.append(paragraph);
        button.remove();
    })
})

const submitForm = document.querySelector('.contact__form')
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(submitForm);
    console.log(Object.fromEntries(data));
})

