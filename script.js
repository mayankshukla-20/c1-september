const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i in data){
        if(data[i].profession=="developer"){
            console.log(data[i].name);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter the name:");
    let numbers = prompt("Enter the age:")
    let age = parseInt(numbers);
    let profession = prompt("Enter the profession:");

// Create a new object using the collected values
    let newObject = {
    name: name,
    age: age,
    profession: profession
};

// Add the new object to the array
data.push(newObject);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i in data){
        if(data[i].profession=="admin"){
            let indextodelete = i;
            data.splice(indextodelete,1);
        }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummy ={
        ...data[0],
        ...data[1]
    };
    console.log(dummy);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalage = 0;
    for(let i in data){
        totalage += data[i].age;
    }
    console.log(totalage/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i in data){
        if(data[i].age > 25){
            console.log(data[i].name,data[i].age);
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    for(let i in data){
        if(data[i].profession != "developer" && data[i].profession != "admin"){
            console.log(data[i]);
        }
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(data.age);
    for(let i in data){
        console.log(data[i]);
    }
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i in data){
        if(data[i].name == "john"){
            data[i].profession = "Manager";
        }
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devect = 0;
    let adminct = 0;
    for(let i in data){
        if(data[i].profession == "developer"){
            devect++;
        }
        if(data[i].profession == "admin"){
            adminct++;
        }
    }
    console.log("Total no. of developers: ",devect);
    console.log("Total no. of admins: ",adminct);
  }