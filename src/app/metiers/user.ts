
export class User{

    constructor(public id : number,
        public username : string,
        public enabled : boolean,
        public roles ? : any[],
        public password ? : string) {}

}