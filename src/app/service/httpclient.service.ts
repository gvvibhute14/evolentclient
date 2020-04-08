import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public id: number,
    public firstName:string,
    public lastName:string,
    public email:string,
    public phoneNumber:string,
    public status:boolean,
    public statusDisplay : string,
    public message :string,
    public success : boolean

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/evolent/api/employee/allemployee');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/evolent/api/employee/changestatus" + "/"+ employee.id);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/evolent/api/employee/createmployee", employee);
  }
}
