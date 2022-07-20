import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/generated/src';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    phone: 0,
    hiringDate: new Date(),
    salary: 0,
    department: ''
  };

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  check_empty_fields() {
    if (this.addEmployeeRequest.name == '' || this.addEmployeeRequest.email == '' || this.addEmployeeRequest.phone == 0 || this.addEmployeeRequest.hiringDate == new Date() || this.addEmployeeRequest.salary == null || this.addEmployeeRequest.department == '') {
      return true;
    }
    else {
      return false;
    }
  }

  onClick() {
    if (this.check_empty_fields()) {
      alert('Please fill all fields');
      return;
    }

    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);
    });
  }
}
