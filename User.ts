class User {
    fname: string;
    lname: string;	
    weight: number;	
 
    constructor(fname:string, lname:string, weight:number) {
         this.fname = fname;
         this.lname = lname;
         this.weight = weight;
    }
 
    fullname():string {
       return (this.fname+" "+this.lname+" weighs "+this.weight);
    }
}

