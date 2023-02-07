for (let ind = 0; ind < 25; ind++) {
    const number = Array[ind];
    console.log(ind)
}

function numerosDiv (number){
    i = 1;
    while(i<=number)
        console.log(i)
    if(i%3==0 && i%5==0){
        console.log("both")
    }
    else if(i%5==0){
        console.log("by 5") //deberia funcionar aca
    }
    else if(i%3==0){
        console.log("by 3")
   }
}
//lo que fue fue

numerosDiv(25)
