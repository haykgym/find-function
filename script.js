// Array.prototype.findFake = function(func){
//     let res;

//     this.forEach(function(val){
//         if(func(val)){
//             res = val;
//         }
//     });

//     return res;
// }



// const arr = [1,2,3];


// console.log(arr.findFake(function(val){
//     return val === 2;
// }));

//Xndir 1
// Unenq object vor mej sax usanoxneri gnahatakannern en, petq e hashverl xmbi mijin gnahatakan@


// const obj = {
//     Armen: 7,
//     Gurgen: 8,
//     Vazgen: 9
// };


// console.log(Object.values(obj).reduce((aggr,val)=> aggr+val) / Object.values(obj).length);\

// Nkaragrel usanox object vor petq e unena usanoxin nkaragrox dashter u 3 method mek tpum en usanoxi hakirch info, 2-rd mutqagrum gnahatakanner, 3-rd artacum mijin@


// const student = {
//     university: "YSU",
//     faculty: "History",
//     course: 2,
//     getInfo(){
//         console.log(`This student studies at ${this.university}, faculty of ${this.faculty} on ${this.course} course`);
//     },
//     printRating(){
//         return  Array.from(prompt("You can print Ratings"));
//     },
//     getAverage(){
//         const ratings= student.printRating();
//         console.log(ratings.reduce((aggr,val)=> +aggr + +val) / ratings.length);
//     }
// }


// student.getInfo();
// student.getAverage();


// Grel function vor objecti mejic jnjum a en keye@ vor mej test bar@ ka, inchpes nav bolor Date type value poxum es stringi

// function foo(obj){
//     Object.keys(obj).forEach(key=>{
//         if(key.indexOf('test') !== -1){
//             delete obj[key];
//         }
//         if(obj[key] instanceof(Date)){
//             obj[key] = obj[key].toString();
//         }
//     })


//     console.log(obj);
// }

// foo({
//     key: 'value',
//     test: "sldfkc",
//     fatest: ',djkfn',
//     val: 'key',
//     data: new Date()
// })

