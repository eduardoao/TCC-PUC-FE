import { ProcessHTTPMsgService } from './process-httpmsg.service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SaudeGeral } from '../model/SaudeGeral';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class HeathService {

 
  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  

  retornaSaudeAnoCorrente(): Observable<SaudeGeral[]> {
    return this.http.get<SaudeGeral[]>(baseURL + '/saudeanocorrente')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
