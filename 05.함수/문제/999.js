let arr = [0,0,0,0,0,0,0,0,0,0];

for(let i=1; i<=1000; i++){
    let num = i;
    while (num > 0) {
        arr[num % 10] +=1;
      num = parseInt(num/10);
    }
}

console.log($.map( arr, function( val, key ) {return key+":"+val+"개"; }).join(", "));