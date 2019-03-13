export class Subject{
    _id: string;
    name: string;
    teacher: string;
    credits: string;
    prom: string;

    constructor(_id, name, teacher, credits, prom){
        this.name = name;
        this.teacher = teacher;
        this.credits = credits;
        this.prom = prom;
    }
}