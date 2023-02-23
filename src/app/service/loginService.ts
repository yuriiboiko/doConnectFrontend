import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtRequest } from "../model/jwtRequest";

@Injectable({
    providedIn:"root"
})
export class LoginService{

private baseUrl="http://localhost:8080/authenticate";
    constructor(private httpClient:HttpClient){

    }

    loginUser(user:JwtRequest):Observable<object>{
        console.log(user)
        return this.httpClient.post('${this.baseUrl}',user);
    }
}
