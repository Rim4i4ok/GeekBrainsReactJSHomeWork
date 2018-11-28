class Human {
  constructor(name = 'empty', age = 0, dateOfBirth = 'empty') {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  
  displayInfo() {
    return `name: ${this.name}, age: ${this.age}, dateOfBirth: ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(salary = 0, department = 'empty') {
    super();
    this.salary = salary;
    this.department = department;
  } 
  
  displayInfo() {
    return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`
  }
  
}

class Developer extends Employee {
  constructor() {
    super();
    this.manager = {};
  }
  
  setManager(manager) {
    this.manager = manager;
  }
}

class Manager extends Employee {
  constructor() {
    super();
    
    this.developers = [];
  }
  
  addDeveloper(developer) {
    this.developers.push(developer);
  }
  
  removeDeveloper(developer) {
    var index = this.developers.indexOf(item);
    if (index !== -1) this.developers.splice(index, 1);
  }
}

const person = new Employee('wan');
console.log(person.displayInfo());
