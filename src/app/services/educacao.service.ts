import { Educacao } from './../model/Educacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  

  retornaEducacaoCorrente(): Observable<Educacao[]> {
    return this.http.get<Educacao[]>(baseURL + '/educacaocorrente')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
