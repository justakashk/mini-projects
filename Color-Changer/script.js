const buttons = document.querySelectorAll('.color-box')
const body = document.querySelector('.changed-box')
const status = document.querySelector('#current-color')

for(i=0; i<buttons.length;i++)
{
    buttons[i].style.backgroundColor = buttons[i].id
}

buttons.forEach(function(buttons) {

    buttons.addEventListener('click', function(e) {
        const color = e.target.id
        body.style.backgroundColor = color
        status.textContent = color.toUpperCase()
    })
})
