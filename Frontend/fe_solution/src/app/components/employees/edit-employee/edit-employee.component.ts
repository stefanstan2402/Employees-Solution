import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    phone: '',
    hiringDate: new Date(),
    salary: 0,
    department: ''
  }

  date_to_modify: string = '';

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute, private router: Router, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployeeById(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
          this.employeeDetails.id = id;
          this.date_to_modify = this.datepipe.transform(this.employeeDetails.hiringDate, 'dd/MM/yyyy')!;
        }
      }
    })
  }

  update() {

    if (this.check_empty()) {
      alert('Please fill all fields');
      return;
    }

    if (this.employeeDetails.email.indexOf('@') == -1) {
      alert('Please enter a valid email');
      return;
    }

    if (/^[0-9]+$/.test(this.employeeDetails.phone) == false) {
      alert('Please enter a valid phone number');
      return;
    }

    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/employees']);
      }
    });
  }
  
  check_empty() {
    if (this.employeeDetails.name == '' || this.employeeDetails.email == '' || this.employeeDetails.phone == '' || this.employeeDetails.salary == null || this.employeeDetails.department == '') {
      return true;
    }
    else {
      return false;
    }
  }

  deleteEmpl(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/employees']);
      }
    });
  }

}
