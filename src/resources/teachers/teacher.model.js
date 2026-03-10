class Teacher {
    constructor({ id = uuid4(), lastName = 'gojo', firstName = 'koja', degree = 'chto eto' } = {}) { 
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.degree = degree;
    }
}