let nm = document.getElementById('name_label')
let veh = document.querySelector('#veh_txt')
let dt = document.querySelector('#reserver_date')
var tax = ''
var photoTag = document.querySelector('#photo_tag')

nm.addEventListener('click', ()=>{
    let name = document.querySelector('.name_txt')
    

    if(name.value.length == 0){
        alert("Please inform your name.")
    }else{
        photoTag.innerHTML = name.value
        name.value = ''
    }
})

veh.addEventListener('click', ()=>{
    let kindVehicle = document.querySelector('.kind_vehicle').value
    let imgAvatar = document.querySelector('.stand_img')
   
    switch(kindVehicle){
        case 'bike':
            imgAvatar.src = 'fotobike.png'
            tax = 0.89
            break
        case 'moto':
            imgAvatar.src = 'fotomoto.png'
            tax = 4.99
            break
        case 'suv':
            imgAvatar.src = 'fotosuv.png'
            tax = 12.99
            break
        case 'sport':
            imgAvatar.src = 'fotosport.png'
            tax = 20.59
            break
        case 'pickup':
            imgAvatar.src = 'fotopickup.png'
            tax = 25.99
            break
    }
})

dt.addEventListener('click', ()=>{
    let dtIn = new Date( document.querySelector('.dt_in').value)
    let timeIn = dtIn.getTime()
    let dayIn = dtIn.getDate()
    let dtOut = new Date(document.querySelector('.dt_out').value)
    let timeOut = dtOut.getTime()
    let now = new Date()
    let dayNow = now.getDate()
    
    console.log()
    if(photoTag.innerHTML == 'Gorgeous Friends'){
        alert('Hey bud, i need know how can i call you when hit your bullshit face!')
    }else if (dayIn < dayNow){
        alert('R u kinding me?! You must choose a valid date.')
    }else if(tax.length == 0){
        alert(`I need to know what vehicle you´ll parking.`)
    }else if(timeIn>timeOut){
        alert('Please pic a correct date to check-out')
    }else{
        let lengthStay = (timeOut-timeIn)/60000
        let priceMinute = (tax/1440).toFixed(10)
        let res = (lengthStay*priceMinute).toFixed(2)

        let result = document.querySelector('.res')
        let center = document.querySelector('.center')
        let resultText = document.querySelector('.res_txt')


        result.removeAttribute("style")
        resultText.innerHTML=`Hey ${photoTag.innerHTML}, your reserve were done! You´ll must pay US$ ${res} in check-in.`
        center.style.display = 'none'
    }
    
})