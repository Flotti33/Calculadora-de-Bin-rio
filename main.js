function contar(){
  let inicio = document.getElementById('txti')
  let res = document.getElementById('res')
  if( inicio.value.length == 0 ){
    res.innerHTML = 'Inicio não pode estar vazio'
  }else{
    let i = Number(inicio.value)
   let bin = []
   res.innerHTML = ''
   if(i == 0){
    bin.push(0)
   }else if(i == 1){
     bin.push(1)
   }else{
   for (let c = i; c > 1; c = r ){
       if (c % 2 == 1){
       bin.push(1)
     } else{
       bin.push(0)
     }
    var r = Math.floor(c/2)
   if(r == 1){
    bin.push(1)
   }
   }
  }
  bin.reverse()
   for(let pos in bin){
   res.innerHTML += `${bin[pos]}`
   }
  }
    
  
  } 
