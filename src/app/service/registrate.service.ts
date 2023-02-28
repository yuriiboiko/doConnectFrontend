import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from '../model/jwtRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrateService {

  private baseUrl = "http://localhost:8080/register";

  constructor(private httpClient : HttpClient) { }

  registrateUser(user : JwtRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, user)
  }


}
