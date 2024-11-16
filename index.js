let users = [
    { name: "John", eyeColor: "blue", gender: "male", isActive: true, email: "john@example.com", age: 25 },
    { name: "Jane", eyeColor: "green", gender: "female", isActive: false, email: "jane@example.com", age: 30 },
    { name: "Alex", eyeColor: "brown", gender: "male", isActive: true, email: "alex@example.com", age: 20 },
    { name: "Sara", eyeColor: "blue", gender: "female", isActive: false, email: "sara@example.com", age: 28 },
    { name: "Mike", eyeColor: "green", gender: "male", isActive: true, email: "mike@example.com", age: 32 }
  ];
  
  // Завдання 1: Отримати масив імен всіх користувачів (поле name).
  let names = users.map(user => user.name);
  console.log("Завдання 1:", names);
  
  // Завдання 2: Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
  let getUsersByEyeColor = (color) => users.filter(user => user.eyeColor === color);
  console.log("Завдання 2 (blue eyes):", getUsersByEyeColor("blue"));
  
  // Завдання 3: Отримати масив імен користувачів за статтю (поле gender).
  let getNamesByGender = (gender) => users.filter(user => user.gender === gender).map(user => user.name);
  console.log("Завдання 3 (female):", getNamesByGender("female"));
  
  // Завдання 4: Отримати масив тільки неактивних користувачів (поле isActive).
  let inactiveUsers = users.filter(user => !user.isActive);
  console.log("Завдання 4:", inactiveUsers);
  
  // Завдання 5: Отримати користувача (не масив) по email (поле email, він унікальний).
  let getUserByEmail = (email) => users.find(user => user.email === email);
  console.log("Завдання 5 (john@example.com):", getUserByEmail("john@example.com"));
  
  // Завдання 6: Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
  let getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max);
  console.log("Завдання 6 (20-30 років):", getUsersByAgeRange(20, 30));
  