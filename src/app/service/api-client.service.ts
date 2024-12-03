import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  postRequest(url: string, body: any): Observable<any> {
    return this.http.post(environment.backend+url, body)
  }

  putRequest(url: string, id: number, body: any): Observable<any> {
    return this.http.put(environment.backend+url + '?id=' + id, body)
  }

  getRequest(url: string, params = {}, headers = {}): Observable<any> {
    return this.http.get(environment.backend+url, {headers, params})
  }

  deleteRequest(id: number, url: string): Observable<any> {
    return this.http.delete(environment.backend+url + '/' + id)
  }
}
