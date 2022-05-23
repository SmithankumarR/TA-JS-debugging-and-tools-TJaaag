function fullName(firstName =" ", lastName=" "){
    return firstName + " " + lastName ;
}
let firstResult = fullName("amar", "prasad");
let expected = "amarprasad";
if(firstResult === expected){
    console.log("Test case Passed");
} else {
    console.warn("Test Case Failed")
}
// passed test case
let finalResult = fullName("amar", "prasad");
let finalExpected = "amar prasad";
if(finalResult === finalExpected){
    console.log("Test case Passed");
} else {
    console.warn("Test Case Failed")
}
// problem 2
function totalAmount(amount =" ",taxRate = ""){
    return amount + (amount * taxRate);
}
let count = totalAmount(50000,3);
let countExpected = 20000;
if(count === countExpected){
    console.log(`Total amount is ${count}`)
}else {
    console.warn(" not expected result try again!")
}
// passed test case 
let finalCount = totalAmount(5000,3);
let finalCountExpected = 20000;
if(finalCount === finalCountExpected){
    console.log(`Total amount is ${finalCount}`)
}else {
    console.warn(" not expected result try again!")
}
