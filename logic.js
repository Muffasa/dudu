


console.log("hello")

//alert('yo yo yo')


var hi = "hi there"
console.log("first hi: "+ hi)
hi = function () {
    return "hi there from function"
    }
    
console.log("hi: %s", hi)
console.log(" hi(): "+ hi())
    
hi = () => {
            return "lol"
            }

var firstJson = {}

console.log(firstJson)
firstJson.newProp = "new prop"

console.log(firstJson)

var secondJson = {
    key1: "val1",
    key2: "val2",
    maSheBaLi: "ma she ba li"
    }
    
 console.log(secondJson)
 secondJson.anotherKey = "whatever"
 console.log(secondJson)
 secondJson.key1 = "I just change key1 value to this!"
    console.log(secondJson)