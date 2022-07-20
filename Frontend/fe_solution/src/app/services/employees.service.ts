import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmployeesImpl } from 'src/generated/src/operations';
import { from } from 'rxjs';
import { Employee, EmployeesGetEmployeesOptionalParams, EmployeesGetEmployeesResponse, EmployeesPostEmployeeOptionalParams, EmployeesPutEmployeeOptionalParams, EmployersSolution, EmployersSolutionOptionalParams } from 'src/generated/src';
import { OperationArguments } from '@azure/core-client';
import { $host } from 'src/generated/src/models/parameters';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  serviceAutorest!: EmployeesImpl;
  options : EmployersSolutionOptionalParams = {};
  clienta? : EmployersSolution = undefined;

  optionsPost : EmployeesPostEmployeeOptionalParams = {};
  optionsPut : EmployeesPutEmployeeOptionalParams = {};

  constructor(private http: HttpClient) { 
    this.clienta = new EmployersSolution(this.baseApiUrl, this.options);
    this.serviceAutorest = new EmployeesImpl(this.clienta!);
  }

  getAllEmployees():Observable<Employee[]> {
    return from(this.serviceAutorest.getEmployees());
  }

  getEmployeeById(id: string):Observable<Employee> {
    return from(this.serviceAutorest.getEmployee(id));
  }

  addEmployee(employee: Employee):Observable<Employee> {
    this.optionsPost.body = employee;
    return from(this.serviceAutorest.postEmployee(this.optionsPost));
  }

  updateEmployee(id: string, employee: Employee):Observable<void> {
    this.optionsPut.body = employee;
    return from(this.serviceAutorest.putEmployee(id, this.optionsPut));
  }

  deleteEmployee(id: string):Observable<any> {
    return from(this.serviceAutorest.deleteEmployee(id));
  }

}
