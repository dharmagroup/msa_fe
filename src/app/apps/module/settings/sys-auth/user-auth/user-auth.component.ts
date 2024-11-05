import { Component } from '@angular/core';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' }
  ];

  selectedEmployees: number[] = [];
  availableSelected: number[] = [];
  searchQuery: string = '';
  isAllChecked: boolean = false;

  get filteredEmployees() {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    ).filter(emp => !this.selectedEmployees.includes(emp.id)); // Filter out selected employees
  }

  moveToSelected() {
    this.availableSelected.forEach(empId => {
      if (!this.selectedEmployees.includes(empId)) {
        this.selectedEmployees.push(empId);
      }
    });
    this.availableSelected = []; // Clear selected from available
  }

  moveToAvailable() {
    this.selectedEmployees = this.selectedEmployees.filter(empId => !this.availableSelected.includes(empId));
    this.availableSelected = []; // Clear selected from selected
  }

  getEmployeeNameById(id: number): string | undefined {
    const employee = this.employees.find(emp => emp.id === id);
    return employee ? employee.name : undefined;
  }

  toggleAll() {
    if (this.isAllChecked) {
      this.selectedEmployees = this.filteredEmployees.map(emp => emp.id);
    } else {
      this.selectedEmployees = [];
    }
  }

  filterEmployees() {
    // Filtering handled in `filteredEmployees` getter
  }

  select(event:any){
    
  }
}
