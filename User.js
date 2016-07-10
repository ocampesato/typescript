var User = (function () {
    function User(fname, lname, weight) {
        this.fname = fname;
        this.lname = lname;
        this.weight = weight;
    }
    User.prototype.fullname = function () {
        return (this.fname + " " + this.lname + " weighs " + this.weight);
    };
    return User;
})();
