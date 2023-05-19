//este código vai ser executado antes dos elementos do body existirem


//document.addEventListener('readystatechange', (event) => {
   // if (event.target.readyState === 'interactive') {

       // document.querySelector("button").addEventListener('click', () => {

      //      document.querySelector('h1').innerText = "Texto do título alterado"
            
  //      })
 //   }
//})

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("button").addEventListener('click', () => {
        document.querySelector('h1').innerText = "Texto do título alterado"
    })
})