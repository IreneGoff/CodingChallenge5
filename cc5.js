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

// Manager Subclass
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // Call the parent class constructor
        this.department = department;
    }

    // Override the annual salary calculation method to include a 15% bonus
    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary(); // Call the parent method
        const bonus = annualSalary * 0.15; // Calculate the bonus
        const totalAnnualSalary = annualSalary + bonus;
        
        // Log the amount of the bonus and the total annual salary including the bonus
        console.log(`Bonus: $${bonus}`);
        console.log(`Total Annual Salary (including bonus): $${totalAnnualSalary}`);
        
        return totalAnnualSalary;
    }
}

// Instantiate Manager Objects
// Manager 1: Bob Ross works in the Digital Marketing department and earns $6600.00 a month.
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.calculateAnnualSalary();

// Manager 2: Debbie Little works in the Finance department and earns $7205.00 a month.
const manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.calculateAnnualSalary();

