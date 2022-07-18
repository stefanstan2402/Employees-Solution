import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseApiUrl}/api/employees`);
  }

  getEmployeeById(id: string):Observable<Employee> {
    return this.http.get<Employee>(`${this.baseApiUrl}/api/employees/${id}`);
  }

  addEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(`${this.baseApiUrl}/api/employees`, employee);
  }

  updateEmployee(id: string, employee: Employee):Observable<Employee> {
    return this.http.put<Employee>(`${this.baseApiUrl}/api/employees/${id}`, employee);
  }

  deleteEmployee(id: string):Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseApiUrl}/api/employees/${id}`);
  }

}
