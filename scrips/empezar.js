export function empezar(){
    let btn=document.getElementById("btn")
    btn.addEventListener("click",()=>{
      setTimeout(()=>{
        location.reload();
        
      },1000)
    })
    
    
  }