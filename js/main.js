let userSet = {}

let btn_slider = document.querySelector('.bquiz')

btn_slider.onclick = function goSlider() {
    document.querySelector(".btn-modal").remove()
    document.querySelector(".slider").remove()
    document.querySelector(".btn-quiz").remove()
    document.querySelector("footer").remove()
    document.querySelector("body").style.background = "url(img/roomm.jpg) 50%/cover no-repeat fixed" 
    document.querySelector(".squiz").style.display = "flex"

}

let btn_cards = document.querySelectorAll('.card')

for (let i = 0; i < btn_cards.length; i++) {
    btn_cards[i].addEventListener('click', function() {
       for (let y = 0; y < btn_cards.length; y++) {
        if(btn_cards[y].classList.contains("card-active")) btn_cards[y].classList.remove("card-active")
        }     
        btn_cards[i].classList.toggle("card-active")
        userSet.typeHouse = document.querySelector('div.card-active > div.card-body > p.card-text').textContent  
    });
}

let btn_cancel = document.querySelector('.btn-cancel')

btn_cancel.onclick = () => {
    if(btn_cancel.textContent = 'Назад' && document.querySelector('.row.cardset.dnone')) {
        document.querySelector('.row.cardset').classList.remove('dnone');
        document.querySelector('.inputm2').remove()
        document.querySelector('.attention > h1').textContent = 'Выбирете тип помещения'
        btn_cancel.textContent = 'Отмена'; 
    } 
        
    else if (btn_cancel.textContent = 'Отмена' && document.querySelector('.card-active')) {
        for (let y = 0; y < btn_cards.length; y++) {
        if (btn_cards[y].classList.contains("card-active"))
            btn_cards[y].classList.remove("card-active")
            }
            btn_cancel.textContent = 'Отмена';
            if(userSet.typeHouse) userSet.typeHouse = ''
        }

    else if (btn_cancel.textContent = 'Отмена')
        {
        btn_cancel.textContent = 'Возврат к странице';
        location.reload()  
    }
}

let btn_next = document.querySelector('.btn-next')


btn_next.onclick = () => {
    if (!userSet.typeHouse) alert('Пожалуйста выбирете тип помещения') 
    else if(userSet.typeHouse && !userSet.m2 && !document.querySelector('.inputm2')) {
        document.querySelector('.row.cardset').classList.add('dnone')
        if(btn_cancel) btn_cancel.textContent = 'Назад'
        document.querySelector('.attention > h1').textContent = 'Выбирете площадь объекта'
        document.querySelector('.attention').insertAdjacentHTML('beforeend', '<div class="inputm2">тестовый</div>')
    }   
}



