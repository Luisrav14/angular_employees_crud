import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/users`, data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/users/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(`${this.apiUrl}/users`);
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`${this.apiUrl}/users/${id}`);
  }
}
