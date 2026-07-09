let arr = [1,2,3,4,6,2,3]

console.log(arr);

for(let i = 0; i<=arr.length; i++){
    let num = 2;
    if(arr[i] ==2){
        arr.splice(i,1);
        console.log(arr);
    }
}