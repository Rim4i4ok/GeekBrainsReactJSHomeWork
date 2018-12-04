export default class Developer {
  constructor(name, age, dateOfBirth) {
    if(typeof name === 'string')
        this.name = name;
      
      if(typeof age === 'number')
        this.age = age;
      
      if(typeof dateOfBirth === 'string' || dateOfBirth instanceof Date)
        this.dateOfBirth = dateOfBirth;
    }
    
    displayInfo() {
      return 'name: ' + this.name + ', age: ' + this.age + ', dateOfBirth: ' + this.dateOfBirth;
    }
};

export const name = 'asdasd';