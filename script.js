Array.prototype.findFake = function(func){
    let res;

    this.forEach(function(val){
        if(func(val)){
            res = val;
        }
    });

    return res;
}



const arr = [1,2,3];


console.log(arr.findFake(function(val){
    return val === 2;
}));