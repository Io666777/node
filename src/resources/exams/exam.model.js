import { v4 as uuid4 } from 'uuid';

class Exam {
    constructor({ id= uuid4(), abiturientId = uuid4() , teacherId = uuid4(), subject = 'detka', date = 'sda', score = 4} = {}){
        this.id = id;
        this.abiturientId =abiturientId;
        this.teacherId = teacherId;
        this.subject = subject;
        this.date = date;
        this.score = score;
    }
}
