// testing framework
function test(message,callback){
    try{
        callback();
        console.log("test passed")

    }catch(error){
        console.error("test failed");
        console.log(message)
    }
}
function sum(numA ,numB){
let sum = numA + numB;
return sum;
}
test("sum of numA and numB", sum(23,42));
function assertion(actual,expected){
if(actual === expected){

}
}