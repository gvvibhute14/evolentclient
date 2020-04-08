import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
}) 

export class AddEmployeeComponent implements OnInit {
  
     user: Employee = new Employee(null,"","","","",true,"",'',true);
     error_message: string[];
     error_message1: string[];
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    const regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          this.error_message = this.error_message1;
          alert(data.message);
        },
        error => {
          console.log('oops', error.error);
          this.error_message = error.error.details;
        });

  };

}