import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get("https://conduit.productionready.io/api/profiles/eric")
    .map((res:Response) => res.json());
  }

  getToken(){
    return this.http.get("https://conduit.productionready.io/api/profiles/eric")
    .map((res:Response) => res.json());
  }

}