import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
//for catch:
import { catchError } from 'rxjs/operators';

//for throw:
import { throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employee.json";
  constructor(private http:HttpClient) { }

  getEmployees() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
