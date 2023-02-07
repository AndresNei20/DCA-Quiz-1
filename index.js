

function numerosDiv (n){
    i = 1;
    while(i<=n){
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
i++
}}
//lo que fue fue

numerosDiv(25)
