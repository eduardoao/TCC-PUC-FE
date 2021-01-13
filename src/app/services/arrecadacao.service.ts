import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iptr } from '../model/Iptr';
import { Iptu } from '../model/Iptu';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service.service';

@Injectable({
  providedIn: 'root'
})
export class ArrecadacaoService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  

  retornaIptuContribuinte(contribuinte: string): Observable<Iptu[]> {
    return this.http.get<Iptu[]>(baseURL + '/taxationbycitizen?contribuinte=' + contribuinte)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }  

  retornaIptrContribuinte(contribuinte: string): Observable<Iptr[]> {
    return this.http.get<Iptr[]>(baseURL + '/taxationbycitizeniptr?contribuinte=' + contribuinte)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }  
}
