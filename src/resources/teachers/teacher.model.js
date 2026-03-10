import { v4 as uuid4 } from 'uuid';

class Teacher {
  constructor({ id = uuid4(), lastName = 'gojo', firstName = 'koja', degree = 'chto eto' } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }
}

export default Teacher;
