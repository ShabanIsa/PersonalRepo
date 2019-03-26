export class Person {
    firstname: string;
    constructor(fname: string){
        this.firstname = fname;
    }
    speak = (): void => {
        console.log(`Hello ${this.firstname}`);
    }
}