var employees = [employee1, employee2, employee3];

function AddEmployee (name, jobTitle, salary) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status = "Full-time";
};

AddEmployee.prototype.printEmployeeForm = function() {
    console.log(this);
}

var employee1 = new AddEmployee ("John", "Physician", 30000);
var employee2 = new AddEmployee ("Tom", "Coach", 60000, "Coach");
employee2.status = "Part-time";
var employee3 = new AddEmployee ("Sally", "Director", 68550);

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();


// Put the generated employees into the employees array using whichever method you prefer.