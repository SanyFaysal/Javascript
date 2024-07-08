// const nums = [1,2,3,4];
// const num2 = [...nums];//refrench

// num2.push(4)

// console.log(nums)
// console.log(num2)

// const nums =[1,2,3,4,5, 6,4,7,8]

// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];
// const num4 = nums[3];

// const [num1,num2, num3, ...others ] = nums

// console.log(num1,num2, others)
// console.log("num1", num1)
// console.log("num2", num2)
// console.log("others", others)

const person1 = {
  name: "Faysal",
  age: 50,
  address: "Dhaka",
  isMarried: false,
  dob: "11",
  nationality: "Bangladeshi",
  book: {
    author: "Nazrul",
    year: 1920,
  },
};
const name = person1?.book?.color?.isFavrourit;
console.log(name)
// const {age, ...userData}= person1;
// cons

// const nums =[1,2,3,4,5]

const users = [
    {
        name:'test'
    },
    {
        name: 'test 2'
    }
]

const userOne = users[0]?.name

const hello = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'