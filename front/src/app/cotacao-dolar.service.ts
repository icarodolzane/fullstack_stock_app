import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CotacaoDolarService {

  private apiUrl = 'https://api.exchangerate.host/latest?base=brl';

  constructor(private http: HttpClient) { }
  getCotacaoDolar(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
