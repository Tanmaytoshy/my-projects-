const required = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const reqcolor = document.querySelector('.color');
const fed = document.querySelector('.changedcolor');
const  car = document.querySelector('body') 

function makechanges(){
    var changed = '#';
    for(i=0;i<6;i++){
        var col = Math.floor(Math.random()*required.length);
        console.log(col);
        changed += required[col];
        console.log(changed);

    }

    car.style.backgroundColor = changed;
    fed.innerHTML = changed;
}




