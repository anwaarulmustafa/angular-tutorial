import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [];
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error
        );
  }

}
