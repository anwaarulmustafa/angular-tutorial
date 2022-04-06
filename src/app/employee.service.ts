import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id": 1, "name": "Asif", "age": 30},
      {"id": 2, "name": "Najaf", "age": 25},
      {"id": 3, "name": "Reema", "age": 26},
      {"id": 4, "name": "Alina", "age": 28},
    ];
  }
}
