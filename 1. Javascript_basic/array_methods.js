// forEach, map, find, filter, reducer



// const numbers1 = numbers.forEach((item)=>item)
// console.log("numbers1", numbers1)

 const numbers2 = numbers.map((item)=>console.log(item+1))
//  console.log(numbers2)
//  console.log('numbers 2', numbers2)

// const foundValue = numbers.find((item)=>item===30)
// console.log(foundValue)


// const filteredArray = numbers.filter((item)=>item<40)

// console.log('FIltered Array', filteredArray)

const numbers = [10,20,30,40,50]
const sum = numbers.reduce((previousValue, currentValue)=> previousValue + currentValue )

// first stage - 10 -> prev- 0 , current value - 10 => 0+10    = 10
// second stage- 20 -> prev- 10, current value - 20 => 10 + 20 = 30
//third stage  - 30 -> prev - 30, current value - 30 => 30 + 30 = 60
//fourth stage  - 40 -> prev - 60, current value - 40 => 60 + 40 = 100
//Fifth stage  - 50 -> prev - 100, current value - 50 => 100 + 50 = 150
 

// console.log(sum)



// [1,2,3,4]