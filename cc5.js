U#35549532

// Employee Class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        // Log the name and monthly salary upon instantiation
        console.log(`Employee Name: ${this.name}`);
        console.log(`Monthly Salary: $${this.salary}`);
    }

    // Method to calculate and return the annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

