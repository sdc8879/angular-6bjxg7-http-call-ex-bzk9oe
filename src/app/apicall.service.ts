import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  API_BASE_URL: any = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient) { }

  getCall(url: any) {
    return this.httpClient.get(this.API_BASE_URL + url);
  }


  postCall(url: any, data: any) {
    return this.httpClient.post(this.API_BASE_URL + url, data);
  }

}
