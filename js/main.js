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

    if (btn_cancel.textContent == 'Назад' && pbarh2.textContent == 'Шаг 5/5') {
    btn_next.textContent = "Далее"  
    document.querySelector('.inputd').classList.remove('dnone')
    document.querySelector('.inputf').remove()
    document.querySelector('.attention > h1').textContent = 'Когда вы планируете приступить к ремонту?'
    pbarh2.textContent = 'Шаг 4/5'
    document.querySelector('.progress-bar').style.width = '75%'
    document.querySelector('.progress-bar').textContent = '75%'
    return
    }

    if (btn_cancel.textContent == 'Назад' && pbarh2.textContent == 'Шаг 4/5') {
        document.querySelector('.inputr').classList.remove('dnone')
        document.querySelector('.inputd').remove()
        document.querySelector('.attention > h1').textContent = 'Выбирете тип ремонта'
        pbarh2.textContent = 'Шаг 3/5'
        document.querySelector('.progress-bar').style.width = '50%'
        document.querySelector('.progress-bar').textContent = '50%'
        return
    }

    if (btn_cancel.textContent == 'Назад' && pbarh2.textContent == 'Шаг 3/5') {
        document.querySelector('.inputm2').classList.remove('dnone')
        document.querySelector('.inputr').remove()
        document.querySelector('.attention > h1').textContent = 'Выбирете площадь объекта'
        pbarh2.textContent = 'Шаг 2/5'
        document.querySelector('.progress-bar').style.width = '25%'
        document.querySelector('.progress-bar').textContent = '25%'
        return
    }

    if (btn_cancel.textContent == 'Назад' && pbarh2.textContent == 'Шаг 2/5') {
        document.querySelector('.row.cardset').classList.remove('dnone');
        document.querySelector('.inputm2').remove()
        document.querySelector('.attention > h1').textContent = 'Выбирете тип помещения'
        btn_cancel.textContent = 'Отмена'; 
        pbarh2.textContent = 'Шаг 1/5'
        document.querySelector('.progress-bar').style.width = '2%'
        document.querySelector('.progress-bar').textContent = '2%'
    }
   
    else if (btn_cancel.textContent == 'Отмена' && document.querySelector('.card-active')) {
        for (let y = 0; y < btn_cards.length; y++) {
        if (btn_cards[y].classList.contains("card-active"))
            btn_cards[y].classList.remove("card-active")
            }
            btn_cancel.textContent = 'Отмена';
            if(userSet.typeHouse) userSet.typeHouse = ''
        }

    
    else if (btn_cancel.textContent == 'Отмена')
        {
        btn_cancel.textContent = 'Возврат к странице';
        location.reload()  
    }
}

let btn_next = document.querySelector('.btn-next')

let pbarh2 = document.querySelector('.pbar > h2')

btn_next.onclick = () => {
    if (!userSet.typeHouse) alert('Пожалуйста выбирете тип помещения') 
    else if(userSet.typeHouse && pbarh2.textContent == 'Шаг 1/5') {
        document.querySelector('.row.cardset').classList.add('dnone')
        if(btn_cancel) btn_cancel.textContent = 'Назад'
        pbarh2.textContent = 'Шаг 2/5'
        document.querySelector('.progress-bar').style.width = '25%'
        document.querySelector('.progress-bar').textContent = '25%'
        document.querySelector('.attention > h1').textContent = 'Выбирете площадь объекта'
        document.querySelector('.attention').classList.remove('mb-5')
        document.querySelector('.attention').insertAdjacentHTML('beforeend', `<div class="inputm2 col-lg-12 col-md-6 col-sm-3">
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">до 40 м2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">40 - 70 м2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
        <label class="form-check-label" for="inlineRadio3">70 - 100 м2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
        <label class="form-check-label" for="inlineRadio4">100 - 200 м2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5">
        <label class="form-check-label" for="inlineRadio5">Больше 200 м2</label>
      </div></div>`)
        let fch2 = document.querySelectorAll('input[name="inlineRadioOptions"]')
        for(let i = 0; i < fch2.length; i++) {fch2[i].addEventListener('click', () => userSet.m2 = document.querySelector(`label[for="inlineRadio${i+1}"]`).textContent)}

    }  
    else if(userSet.typeHouse && pbarh2.textContent == 'Шаг 2/5') {
        document.querySelector('.inputm2').classList.add('dnone')
        pbarh2.textContent = 'Шаг 3/5'
        document.querySelector('.progress-bar').style.width = '50%'
        document.querySelector('.progress-bar').textContent = '50%'
        document.querySelector('.attention > h1').textContent = 'Выбирете тип ремонта'
        document.querySelector('.attention').insertAdjacentHTML('beforeend', `<div class="inputr col-lg-12 col-md-6 col-sm-3">
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio11" value="option1">
        <label class="form-check-label" for="inlineRadio11">Косметический</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio12" value="option2">
        <label class="form-check-label" for="inlineRadio12">Капитальный</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio13" value="option3">
        <label class="form-check-label" for="inlineRadio13">По дизайн-проекту</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio14" value="option4">
        <label class="form-check-label" for="inlineRadio14">Премиальный</label>
      </div>
      </div>`)
        let fch3 = document.querySelectorAll('input[name="inlineRadioOptions1"]')
        for(let i = 0; i < fch3.length; i++) {fch3[i].addEventListener('click', () => userSet.rem = document.querySelector(`label[for="inlineRadio1${i+1}"]`).textContent)}

    }  
    else if(userSet.typeHouse && pbarh2.textContent == 'Шаг 3/5') {
        document.querySelector('.inputr').classList.add('dnone')
        pbarh2.textContent = 'Шаг 4/5'
        document.querySelector('.progress-bar').style.width = '75%'
        document.querySelector('.progress-bar').textContent = '75%'
        document.querySelector('.attention > h1').textContent = 'Когда вы планируете приступить к ремонту?'
        document.querySelector('.attention').insertAdjacentHTML('beforeend', `<div class="inputd col-lg-12 col-md-6 col-sm-3">
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio21" value="option1">
        <label class="form-check-label" for="inlineRadio21">В течении недели</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio22" value="option2">
        <label class="form-check-label" for="inlineRadio22">В течении 2 недель</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio23" value="option3">
        <label class="form-check-label" for="inlineRadio23">В ближайший месяц</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio24" value="option4">
        <label class="form-check-label" for="inlineRadio24">В ближайщие 3 месяца</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio25" value="option5">
        <label class="form-check-label" for="inlineRadio25">В ближайшие полгода</label>
      </div>
      </div>`)
        let fch4 = document.querySelectorAll('input[name="inlineRadioOptions2"]')
        for(let i = 0; i < fch4.length; i++) {fch4[i].addEventListener('click', () => userSet.date = document.querySelector(`label[for="inlineRadio2${i+1}"]`).textContent)}

    }  
    else if(userSet.typeHouse && pbarh2.textContent == 'Шаг 4/5') {
      document.querySelector('.inputd').classList.add('dnone')
      pbarh2.textContent = 'Шаг 5/5'
      document.querySelector('.progress-bar').style.width = '95%'
      document.querySelector('.progress-bar').textContent = '95%'
      document.querySelector('.attention > h1').textContent = `Почти готово! Введите Ваш номер телефона для того, чтобы мы могли прислать смс с примерным расчётом стоимости, а также забронировать скидку на ремонтные работы`
      document.querySelector("body").insertAdjacentHTML('beforeend', `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Мы ценим Ваше время</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <h1>Спасибо за заявку!</h1><br>
            <h3>Мы свяжемся с Вами в ближайшее время и сориентируем Вас по бюджету и срокам ремонта</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
          </div>`)
      document.querySelector('.attention').insertAdjacentHTML('beforeend', `<div class="inputf col-12 mt-5">
      <form class="telnum">
          <div class="mb-3">
              <input type="tel" class="form-control" id="exampleInputtel1" placeholder="8 (999) 999-99-99" maxlength="11" required">
          </div>
      </form>
      </div>`) 
      btn_cancel.remove()
      btn_next.classList.add("mt-1")
      btn_next.textContent = "Отправить"
      btn_next.setAttribute("data-bs-toggle", "modal")
      btn_next.setAttribute("data-bs-target", "#exampleModal")
      btn_next.setAttribute("disabled", true)
      document.querySelector(".form-control").addEventListener("input", async function () {
      if(document.querySelector(".form-control").value.length == 11) {
      btn_next.removeAttribute("disabled", false)
      userSet.tel = document.querySelector(".form-control").value;  
      }
     
     })
    }   
    else if(userSet.tel.length == 11 && pbarh2.textContent == 'Шаг 5/5') {
      (async () => {
          let response = await fetch('sendmail.php', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
          body: JSON.stringify(userSet)
          }); 
          })();
}


}