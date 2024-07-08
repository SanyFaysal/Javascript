const taskOne = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('task one is completed ')
    })
}
const taskTwo = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
       resolve('Task two is completed')
       }, 3000);
    })
}
const taskThree = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        resolve('Task three is completed')
       }, 1000);
    })
}

async function show(){
    const t1 =await taskOne()
    console.log(t1)

    const t2 =await taskTwo();
    console.log(t2)
    const t3 =await taskThree();
    console.log(t3)
}

show()