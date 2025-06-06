const body=document.body
const container=document.querySelector('#div')
const buttonContainer=document.querySelector('#btns')
const gridsize=600
const num=8
const row=num
const col=num


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
function create(){
    for (let i = 0; i < (num*num); i++) {

        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.style.width= `${(100/num)}%`;
        cell.style.height=`${(100/col)}%`;
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
create()

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


