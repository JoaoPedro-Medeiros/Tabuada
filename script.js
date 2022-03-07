function result(){
    let mult = document.getElementById('mult')
    let sec = document.getElementById('tab')
    let opt = document.getElementById('opt_0')

    if(mult.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        sec.innerHTML = ""
        for(var element = 0; element <= 10; element++){
            let newopt = document.createElement('option')
            let optnew = sec.appendChild(newopt)
            optnew.value = `opt_${element}`
            optnew.setAttribute('id', `opt_${element}`)
            optnew.innerHTML = `${element} x ${Number(mult.value)} = ${Number(mult.value)*element}`
    }
    

    }
}