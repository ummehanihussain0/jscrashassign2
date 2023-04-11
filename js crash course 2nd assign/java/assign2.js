//-------------- QUESTION 01---------------------

// function add(a){
//     return function(b){
//         console.log(a+b);
//     }
// }
// let result = add(5);
// result(5);

//----------QUESTION 02----------------------

// function Array(arro, value) {
//     if (arro.length === 0) {
//         return false;
//       } else if (arro.length === value) {
//       return true;
//     } else {
//       return Array(arro.slice(1), value);
//     }
//   }
//   const arro = [1, 2, 3, 4, 5];
//   console.log(Array(arro, 3)); 
  
//---------------------- QUESTION 03--------------------

// function newPara(text){
//     let myPara = document.getElementById("my-para");
//     myPara.textContent =text; 
// }
// newPara("This is new Paragraph!!");

// -----------------QUESTION 04-----------------------

// function listItem(text){
//        let newList = document.getElementById("new-list");
//        newList.textContent = text;
//   }
//   listItem("new item");

// --------------------QUESTION 05------------------------

// let myPara = document.getElementById("my-para");
// myPara.innerHTML = "<b>Pakistan</b>";
// function para(){
//     let color1 = myPara.style.backgroundColor ="#000";
//     let color2 = myPara.style.color="#efefef";
//     console.log(color1,color2);
// }
// para();

// ----------------QUESTION 06---------------------

// function LocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObj = { name: "Hani", age: 20 };
//   LocalStorage("myKey", myObj);
//   const savedObj = JSON.parse(localStorage.getItem("myKey"));
//   console.log(savedObj); 
 
// ---------------------------QUESTION 07------------------

// function LocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   }
//   const myObj = LocalStorage('myKey');
//   console.log(myObj);
    
// ---------------------QUESTION 08-------------------------------
            
// let prevstudents = localStorage.getItem("students");
// let students = prevstudents ? JSON.parse(prevstudents) :[];
// function providestudents(){
//     let std = {
//      name : prompt("enter your name here"),
//      rollno : prompt("enter your Roll no." ),
//      coursename : prompt("enter Course name")
//     };
//     students.push(std);
//     console.log (students);

//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }