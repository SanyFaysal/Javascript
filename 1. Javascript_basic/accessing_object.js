const user = {
    name:'Karim',
    contact: {
        phone:'014444',
        email:'user@user.com'
    },
    pet: {
        name: 'Jacky',
        info: {
            color:'Black',
            weight: '1.5 kg', 
        }
    },
    familyMembers: [
        {name:"X", age:54},
        { name:"Y", age: 42},
    ]
}


const {familyMembers: [{age, name}, {name:fName, age:fAge}] } =user


// access email 
// const email = user.contact.email;
// const {contact: {email}} = user;
// console.log(email)

// access pet color
// const petColor = user?.pet?.info?.price?.offer
// console.log(petColor)
