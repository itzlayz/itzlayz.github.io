btn = document.querySelector('#break')
color = 'black'

btn.onclick = function() {
    style = document.body.style 
    color = style.backgroundColor

    if (color == 'black'){
        style.backgroundColor = 'white'
        style.color = 'black'

        btn.innerHTML = 'Починить жизнь'
    }
    else {
        style.backgroundColor = 'black'
        style.color = 'white'

        btn.innerHTML = 'Сломать жизнь'
    }
};