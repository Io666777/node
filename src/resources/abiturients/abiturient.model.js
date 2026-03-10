import { v4 as uuid4 } from 'uuid';

class Abiturient {
  constructor({ id = uuid4(), lastName = 'capoka', firstName = 'caja', numCertificate = 5 } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.numCertificate = numCertificate;
  }
}

export default Abiturient;
