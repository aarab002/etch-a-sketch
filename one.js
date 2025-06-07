const body=document.body
const container=document.querySelector('#div')
const buttonContainer=document.querySelector('#btns')
const gridsize=600
let num=2;
let row=num
let col=num


//reset button
const reset=document.createElement('button')
reset.textContent='Reset'
reset.id='btn'
reset.addEventListener('click',()=>{
    document.querySelectorAll('.cell').forEach(cell =>{
        cell.style.backgroundColor='white';
    });
}) 
buttonContainer.append(reset)


//grid create
function create(num){
    for (let i = 0; i < (num*num); i++) {

        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.style.width= `${(100/num)}%`;
        cell.style.height=`${(100/num)}%`;
            cell.addEventListener('mouseover',()=>{
        if(press==true){
            cell.style.backgroundColor=randomColor();
        }        
        else{
            cell.style.backgroundColor='black'
        }    
        });

        container.appendChild(cell);
    
}
}
create(num)

let press=false

//random colors button
const randomize=document.createElement('button');
randomize.textContent='Random Colors';
randomize.id='btn'
randomize.addEventListener('click',() =>{
    press=true;
})   
buttonContainer.append(randomize)


let op=false

//opacity button
const opacity=document.createElement('button')
opacity.id='btn'
opacity.textContent='Opacity'
opacity.addEventListener('click',() =>{
    op=true;
})
buttonContainer.append(opacity)








//grid change user button
const useri=document.createElement('button');
useri.id='btn'
useri.textContent='Change Grid';
useri.addEventListener('click',() =>{
    const input=prompt("What would you like your grid dimesions to be?");
     let val=parseInt(input);
     if (val>=1 && val<=100){
     const gridCells=document.querySelectorAll('.cell');
     gridCells.forEach(cell => cell.remove());
    create(val);
     }
     else{
        alert('Error; please enter a number between 1-100');
     }
     
})
buttonContainer.append(useri)



//randomcolor()
function randomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let a=Math.round(Math.random()*10)/10;
     if (op=true){
        return`rgba(${r},${g},${b},${a})`
    }
    else{
    return `rgb(${r},${g},${b})`
}}
    
console.log(randomColor())


