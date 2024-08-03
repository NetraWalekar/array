const arr = ['47','78','45','99','56']

let largestNum = 0;
for(let i=0;i<=arr.length;i++){
    if(largestNum<arr[i]){
        largestNum=arr[i]
    }
}
console.log(largestNum)