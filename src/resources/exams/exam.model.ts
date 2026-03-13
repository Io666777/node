export interface Exam {
    id: string
    abiturientId:string | null;
    teacherId:string | null;
    subject: string
    date:string
    score:number
}

export default Exam

