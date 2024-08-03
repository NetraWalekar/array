const arr = ['45','67','88','34','65']

let sum = 0;

for(let i = 0 ; i<=arr.length;i++){
    if(i % 2 ==1){
        sum += [i]
    }
}

console.log(sum)