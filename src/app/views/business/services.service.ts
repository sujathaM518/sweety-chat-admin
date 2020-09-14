import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getClientList(userType):Observable<any> {
    // let params = new HttpParams(userType);
    return this.http.get(environment.apiURL +`admin/users/${userType}`);     
  }
}
