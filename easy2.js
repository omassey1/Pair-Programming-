var arr = new Array(1,2,3,4,5,6,7,8,9,10);
function findPrime(arr){
    var prime = [];
    var count=0; 
    for(var i=0;i<arr.length;i++){
        var flag = 0;
        for(var j=2;j<=arr[i]/2;j++){
            if(arr[i]%j===0){
                flag = 1;
                break;
            }
        }
        if(flag===0){
            prime[count++] = arr[i];
        }
    }
    console.log('Prime number are: ')
    console.log(prime);
}
findPrime(arr);