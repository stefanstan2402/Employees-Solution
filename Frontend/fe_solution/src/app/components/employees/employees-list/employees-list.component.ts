import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { DatePipe } from '@angular/common'
import { EmployeesImpl } from 'src/generated/src/operations';
import { Employee, EmployeesGetEmployeesResponse } from 'src/generated/src';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

@Injectable({
  providedIn: 'root' // just before your class
})

export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  hiringDates: string[] = [];
  numberOfEmployees: number = 0;

  constructor(
    private employeesService: EmployeesService,
     public datepipe: DatePipe,
     
     ) {}

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
}


