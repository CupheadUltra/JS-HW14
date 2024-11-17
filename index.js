let users = [
    { name: "John", eyeColor: "blue", gender: "male", isActive: true, email: "john@example.com", age: 25 },
    { name: "Jane", eyeColor: "green", gender: "female", isActive: false, email: "jane@example.com", age: 30 },
    { name: "Alex", eyeColor: "brown", gender: "male", isActive: true, email: "alex@example.com", age: 20 },
    { name: "Sara", eyeColor: "blue", gender: "female", isActive: false, email: "sara@example.com", age: 28 },
    { name: "Mike", eyeColor: "green", gender: "male", isActive: true, email: "mike@example.com", age: 32 }
  ];
  
  let names = users.map(user => user.name);
  console.log("Завдання 1:", names);

  let getUsersByEyeColor = (color) => users.filter(user => user.eyeColor === color);
  console.log("Завдання 2 (blue eyes):", getUsersByEyeColor("blue"));
 
  let getNamesByGender = (gender) => users.filter(user => user.gender === gender).map(user => user.name);
  console.log("Завдання 3 (female):", getNamesByGender("female"));
  
  let inactiveUsers = users.filter(user => !user.isActive);
  console.log("Завдання 4:", inactiveUsers);
  
  let getUserByEmail = (email) => users.find(user => user.email === email);
  console.log("Завдання 5 (john@example.com):", getUserByEmail("john@example.com"));
  
  let getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max);
  console.log("Завдання 6 (20-30 років):", getUsersByAgeRange(20, 30));
  