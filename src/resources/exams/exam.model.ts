export interface Exam{
    id: number
    abiturientId:number | null;
    teacherId:number | null;
    subject: string
    date:number
    score:number
}

export default Exam

