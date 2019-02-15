$(function () {
    $(".box").on("click",".div",function(){
        $(this).addClass("show").siblings(".div").removeClass("show");
    });


    // var x = 21;
    // var fn = function(){
    //     console.log(x);
    //     var x = 20;
    //     var y = x = 3;
    // };
    // fn();//undefined
    // console.log("x defined?"+ (typeof x !== 'undefined')) //ture
    // console.log("y defined?"+ (typeof y !== 'undefined')) //false

    // function sortNumber(a,b)
    // {
    //     return a - b
    // }
    // let arr = [43,32,1,5,9,22];
    // console.log(arr.sort(sortNumber)) // [1, 5, 9, 22, 32, 43]

    // (function (arr){
    //     console.log([...(new Set(arr))])
    // })([1,2,3,1,'1','2',2])
    //[1, 2, 3, "1", "2"]
    
    
    var a = [1,3,5];
    var b = [2,7,0];
    console.log(a.concat(b))
});