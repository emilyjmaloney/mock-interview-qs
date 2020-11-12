// 3.	Write the code to generate an object whose keys are the names of the banks and the values are an array with only the taxNumber of its clients ordered alphabetically.

var aBank = { tax_number: [ 123 ] };
var bBank = { tax_number: [ 456 ] };
var cBank = { tax_number: [ 789 ] };

var clients = { banks: [ aBank, bBank, cBank ] };

function addAllTaxNumbers(anArray) {
var sumOfAllTaxNumbers = 0; 
for (let i of anArray) {
for (let x of i.tax_number) {
    sumOfAllTaxNumbers += x
}
}
return sumOfAllTaxNumbers;
}
console.log(addAllTaxNumbers(clients.banks)); 
