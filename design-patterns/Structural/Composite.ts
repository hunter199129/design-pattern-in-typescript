interface IEmployee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
}

export class Developer implements IEmployee {
  protected salary: number;
  protected name: string;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }
  getName = () => this.name;
  getSalary = () => this.salary;
}

export class Designer implements IEmployee {
  protected salary: number;
  protected name: string;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }
  getName = () => this.name;
  getSalary = () => this.salary;
}

export class Organization {
  protected employees: Array<IEmployee> = [];

  addEmployee(employee: IEmployee) {
    this.employees.push(employee);
  }
  getNetSalaries = () =>
    this.employees.reduce(
      (totalSalary, employee) => (totalSalary += employee.getSalary()),
      0
    );
}
