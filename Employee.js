var Employee = (function () {
    function Employee(fname, lname) {
        this.fname = "";
        this.lname = "";
        this.fname = fname;
        this.lname = lname;
    }
    return Employee;
})();
var emp1 = new Employee("Jane", "Smith");
var emp2 = new Employee("Dave", "Jones");
