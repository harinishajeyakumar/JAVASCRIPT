//objects
// how will you declare objects 3types
//1st way
var customerDetails={
    "Name" :"Harinisha",//comma is optional for the key pair value of object
    "Age"  :"20",
    "phoneNo":"97483903939",
}
console.log(customerDetails)
//why key does not holds any quote in your object? key will not hold aany quote as its inbuiltly present

customerDetails["id"]="21ECR074"
console.log(customerDetails)
//2nd way
var customDetails={}
customDetails["id"]="21ECR074"
customDetails["name"]="harinisha"
customDetails["age"]="20"
customDetails["PhoneNo"]="89987283902"

console.log(customDetails)
//3rd way
var kongu = new Object()
kongu["fees"]=200000
kongu["accomodation"]="Excellant"
kongu["food"]="worst"
kongu["HostelCount"]=10
console.log(kongu)
console.log(kongu.fees)
console.log(kongu["accomodation"])