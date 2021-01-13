import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Criminalidade } from '../model/criminalidade';
import { Homicidio } from '../model/Homicidio';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service.service';

@Injectable({
  providedIn: 'root'
})
export class SegurancaService {
  [x: string]: any;

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  
  retornaHomicidioAnoCorrente(): Observable<Homicidio[]> {
    return this.http.get<Homicidio[]>(baseURL + '/homicidiosanocorrente')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  retornaCriminalidadeAnoCorrente(): Observable<Criminalidade[]> {
    return this.http.get<Criminalidade[]>(baseURL + '/criminalidadeanocorrente')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
