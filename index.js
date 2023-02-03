let macbooks = {
    White: './img/white.png',
    "Space Gray": './img/spaceGray.png'
}

let colorBtns = document.querySelectorAll('button[data-col]')
let macImg = document.querySelector('.main-block .left')
let blueSpan = document.querySelector('.main-block .right .blue')
let priceSpan = document.querySelector('.main-block .right .price')
let memoryBtns = document.querySelectorAll('div[data-addprice]')

let originalPrice = 1999


colorBtns.forEach(btn =>{
    btn.onclick = () =>{
        let key = btn.getAttribute('data-col')
        let imgPath = macbooks[key]

        macImg.style.backgroundImage=`url("${imgPath}")`

        colorBtns.forEach(el => el.classList.remove('active-btn'))

        btn.classList.add('active-btn')

        blueSpan.innerHTML = key
    }
})


function numberWithComas(x) {
    return x.replace(/\B(?<!\.d*)(?=(\d{3})+(?!\d))/g, ",");
}

memoryBtns.forEach(btn =>{
    btn.onclick = () =>{
        memoryBtns.forEach(el =>el.classList.remove('item-active'))
        btn.classList.add('item-active')

        let addPrice = +btn.getAttribute('data-addprice')
        let total=originalPrice + addPrice

        total = numberWithComas (total.toString())
        priceSpan.innerHTML = `$${total}`

    }
})
