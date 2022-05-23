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
let finalResult = fullName("amar", "prasad");
let finalexpected = "amar prasad";
if(finalResult === finalexpected){
    console.log("Test case Passed");
} else {
    console.warn("Test Case Failed")
}