function sum(numA ,numB){
return numA + numB;
}
function multiply(numA,numB){
    return numA * numB;
}
// testing framework
function test(message, callback){
    try{
        callback();
        console.log(`test passed`,message);

    } catch(error){
        console.error(error);
        console.log(`test failed not as expected`, message)
    }
}
// testing assertion
function expect(actual){
    return {
        toEqual: function(expected) {
            if(actual !== expected){
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }, toBeEqual : function(expected){
            if(actual !== expected){
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }
    }
}
let result , expected;
function testAdd() {
    result = sum(20,40);
    expected = 60;
    expect(result).toEqual(expected);
}
test(`adding 2 and 4`, testAdd);

function testMultiply(){
  result = multiply(5,6);
  expected = 30;
  expect(result).toBeEqual(expected);

 
}
test('multiply 3 and 6' , testMultiply);