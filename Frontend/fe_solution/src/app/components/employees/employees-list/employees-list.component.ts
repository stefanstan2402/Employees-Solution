import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})



export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  hiringDates: string[] = [];

  constructor(private employeesService: EmployeesService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(
      {
        next: (employees) => {
          this.employees = employees;
          console.log(this.employees);
        } , 
        error: (err) => {
          console.log(err);
        }
      }
    );
  }


  

  // change date format to dd/MM/yyyy for all employees
}
