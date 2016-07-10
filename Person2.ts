class Person2 {
//unnecessary because constructor specifics "public":
//fname:string;
//lname:string;
//zip:string;
 
  constructor(public fname:string,
              public lname:string,
              public zip:string) {
    this.fname = fname;
    this.lname = lname;
    this.zip   = zip;
  }
}

