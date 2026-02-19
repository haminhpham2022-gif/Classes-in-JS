class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayinfo() {
    return `${this.constructor.name}: ${this.name} (${this.email})`;
  }
}

class Student extends Person {
  constructor(name, email, grade) {
    super(name, email);
    this.grade = grade;
  }

  displayinfo() {
    return `${super.displayinfo()}, Grade: ${this.grade}`;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }

  displayinfo() {
    return `${super.displayinfo()}, Subject: ${this.subject}`;
  }
}

class Registry {
  static people = [];

  static addPerson(person) {
    this.people.push(person);
  }

  static showAll() {
    return this.people.map(person => person.displayinfo()).join("<br>");
  }
}

function registerperson(type) {
  const name = document.getElementById(`${type}-name`).value;
  const email = document.getElementById(`${type}-email`).value;
  const extra = document.getElementById(`${type}-extra`).value;

  let person;
  if (type === 'student') {
    person = new Student(name, email, extra);
  } else if (type === 'teacher') {
    person = new Teacher(name, email, extra);
  }

  Registry.addPerson(person);
  document.getElementById('output').innerHTML = Registry.showAll();
}