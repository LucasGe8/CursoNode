// let username = 'fazt';
// let age = 30;
// let hasHobbies = false;
// let points = [10,20,30]
// let user  = {
//     name: 'ryan',
//     lastname: 'ray'
// }
// console.log(username)
// console.log(age)
// console.log(hasHobbies)
// console.log(points)
// console.log(user)

// if (age>=18) {
//     console.log("Sos adulto")
// }else{
//     console.log("Sos menor")
// }

const names = ["joe", "john", "marco"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function showUserInfo(userName, userAge) {
  return `The username is ${userName}, the user is ${userAge} years old`;
}
console.log(showUserInfo("Lucas", 21));
