//Recuper gli elemte dal DOM
const grid=document.getElementById('grid');
const button=document.querySelector('button');
const level=document.getElementById('level')
const score=document.getElementById('counter')
//Preparo i dati iniziali 
const rows=10;
const cols=10;
const rowsMedium=9;
const colsMedium=9;
const rowsHard=7;
const colsHard=7;
const bombs=[];
const totalBombs =16;
//Totali
let totalCells='';
let cells = '';
const maxScore=totalCells-totalBombs;
console.log(maxScore)
//Stampiamo la griglia la click
button.addEventListener('click',function(){
    button.innerText='Restart'
    grid.innerHTML='';
    let counter='';
    if(level.value==='easy'){
        totalCells= rows * cols;
        cells='cell';
    }else if (level.value==='medium'){
        totalCells= rowsMedium * colsMedium;
        cells='cell-medium';
    }else if(level.value==='hard'){
        totalCells= rowsHard * colsHard;
        cells='cell-hard';
    }
    //Stampiamo le celle
    for(let i=1;i<=totalCells;i++){
        const cell =createCell(i);
        
        cell.addEventListener('click',function () {
            if(cell.classList.contains('clicked')) return;
            cell.classList.add('clicked');
            console.log(i);
            //Controllo se la cell è una bomba
            const isABomb=bombs.includes(parseInt(cell.innerText))
            if(isABomb){
                cell.classList.add('.bomb')
            }else{
                counter++;
                score.innerText=counter;
            }
        })
        grid.appendChild(cell);
    }
    score.innerText='';
})

//Function
function createCell(cellNumber){
    const cell =document.createElement('div');
    cell.classList.add(cells) ;
    cell.innerText=cellNumber;
    return cell;
}
//Genero le bombe
function randomBobs(totalBombs) {
    let bombs=[];
    while(bombs.length<totalBombs){

    }
    const numberBobs=Math.floor(Math.random() * 1);
    console.log(numberBobs)
    return bombs;
}

