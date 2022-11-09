// let url = "https://restcountries.com/v3.1/name/burundi";


// function getData() {

//     fetch(url)
//         .then(response => {
//             return response.json();
//         }).then(displayData);
// }
// getData()


// //Display Data

// let output = '';
// let cont = document.querySelector(".container")
//  function displayData(response) {

//     let output =`<div>  
//     <img src=${response[0].flags.png} alt="">
//    <h2>${response[0].name.common}</h2>
//    <h2>${response[0].capital}</h2>
//    <p> borders</p>
//    <ul>
//    <li> ${response[0].borders[0]}</li>
//    <li> ${response[0].borders[1]}</li>
//    <li> ${response[0].borders[2]}</li>
//    </ul>
//   <p> Languages</p>
//    <ul> 
  
//    <li> ${response[0].languages.fra}</li>
//    <li> ${response[0].languages.run}</li>
   
//    </ul>
//  </div>`

// console.log(response);
// console.log(response[0].name);
// console.log(response[0].name.common);

// cont.innerHTML = output;

//  }




// 1. What is an object?
// 2. How to access the keys and values inside an object
// 3. Object methods
// 4. Change properties of an object


// let numbers = [1, 2, 3];

// console.log(numbers[1])

// console.log(car.color)  

// console.log(car["color"])  

// let result = Object.keys(car); 

// console.log(result[0])

// let result2 = Object.values(car);

// console.log(result2)


// for(let key in car){

// //    let value = car[key];
//    let value = car.key;

//    console.log( typeof value);

// //     // console.log(key + ": " + value);
// // }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullDetail: function (){
//         return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullDetail());



const student = [
{ 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
},

{ 
    name: 'Paul',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
},
]

console.log(student[0].hobbies[1]);

student.map(x => console.log(x))
