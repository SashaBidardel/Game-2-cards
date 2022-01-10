import { empezar } from "./empezar.js";


let imagenes=[
      {
        img:'./assets/CCatch.jpg',
        n:0
      },
      { 
        img:'./assets/haselofTajas.jpg',
        n:1
      },
      {
        img:'./assets/magicBird.jpg',
        n:2
      },
      {
       img: './assets/miliVanili.jpg',
       n:3
      },
      {
        img:'./assets/modernTalking.jpg',
        n:4
      },
      { 
        img:'./assets/robertSmith.jpg',
        n:5
      },
      {
        img:'./assets/v.jpg',
        n:6
      },
      {
       img: './assets/SabrinaFox.jpg',
       n:7
      },
      {
        img:'./assets/CCatch.jpg',
        n:0
      },
      { 
        img:'./assets/haselofTajas.jpg',
        n:1
      },
      {
        img:'./assets/magicBird.jpg',
        n:2
      },
      {
       img: './assets/miliVanili.jpg',
       n:3
      },
      {
        img:'./assets/modernTalking.jpg',
        n:4
      },
      { 
        img:'./assets/robertSmith.jpg',
        n:5
      },
      {
        img:'./assets/v.jpg',
        n:6
      },
      {
       img: './assets/SabrinaFox.jpg',
       n:7
      }
      ];
      imagenes=imagenes.sort(()=>{return Math.random()-0.5});
let cont=1;
let indexPrimeraCarta=0;
let arrayAciertos=[];
let aciertos=0;
let movimientos=0;

function destapar(){
  let mov=document.getElementById("mov");
  let aci=document.getElementById("aciertos");
  let final=document.getElementById("final");
  mov.innerHTML=`MOVIMIENTOS= 0` ;
  aci.innerHTML="ACIERTOS= 0" ;
  for (let index = 0; index < 16; index++) {
        
        let res=document.getElementById(index);
        res.addEventListener("click",()=>{
          if (cont % 2 !=0){
            if (arrayAciertos.includes(index)){
              alert("Escoga otra carta");
            }
           else{
           
            console.log("primera carta");
            res.innerHTML=`<img src=${imagenes[index].img} alt="cartas" class="cardo"></img>`
            indexPrimeraCarta =index;
          }
          
       
        }
          if (cont % 2==0){
            
            console.log(cont+"separador");
            res.innerHTML=`<img src=${imagenes[index].img} alt="cartas" class="cardo"></img>`
           
            if(( indexPrimeraCarta==index) || (arrayAciertos.includes(index))){
              alert("Escoga otra carta");
              cont=+1;
              console.log(cont);
            }
            else{
            console.log("segunda carta");
            if(imagenes[index].img==imagenes[ indexPrimeraCarta].img ){
              arrayAciertos.push(index);
              arrayAciertos.push( indexPrimeraCarta);
              console.log("bien");
              aciertos+=1;
              movimientos+=1;
              console.log("holi");
              console.log(movimientos);
              mov.innerHTML=`MOVIMIENTOS= ` + movimientos ;
              aci.innerHTML="ACIERTOS= " + aciertos + "<br>";
             
            }
            if (aciertos==8){
              final.innerHTML="<h2>Enhorbuena,has terminado</h2>";
              }
            else{
              console.log("mal");
              movimientos+=1;
              mov.innerHTML="MOVIMIENTOS= " + movimientos + "<br>";
              setTimeout(()=>{
                resetear();
                
              },600)
            }
            
          }
          }
          cont+=1;
         
        })
      
      }
      
    }
         
   function resetear(){
  for (let index = 0; index < 16; index++){
      if (arrayAciertos.includes(index)==false ){
      let res=document.getElementById(index);
      res.innerHTML=`<img src="./assets/img004.jpg" alt="cartas" class="card" ></img>`
      }
  }
}       
destapar();
empezar();       
          
        
           
           
            
         
  
       
       
        
      
      
      
            
      

  
 







