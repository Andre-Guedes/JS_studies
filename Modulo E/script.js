var btn = document.querySelector("#button")

btn.addEventListener('click', () =>{
    var start = document.querySelector('#start').value
    var finish = document.querySelector('#finish').value
    var int = document.querySelector('#int').value
    var res = document.querySelector('#res')

    if (start.length == 0 || finish.length == 0){ 
        res.innerHTML = "Please, choose your numbers!"
    }else if(int.length == 0){
        alert("If you don´t choose a interval for your sequence i´ll take the number 1.")
        int = 1
        sequence()
    }else{
        sequence()
    }

    function sequence(){
        res.innerHTML = 'The decompose is '
        let s = Number(start)
        let f = Number(finish)
        let i = Number(int)

        if (i<f){
            for (let c = s ; c <= f ; c+=i) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }else{
            for (let c = s ; c >= f ; c-=i) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML +=  ` \u{1F192}`
    }

})