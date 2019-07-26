import { Injectable }              from '@angular/core';
import { HttpHeaders, HttpResponse }   from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {datos_laborales} from './datos-laborales';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':'123'})
};
@Injectable({ providedIn: 'root' })
export class DatosLaboralesService {
  public servicioUrl = 'http://localhost:8080/techsoft';  // URL to web API
  public datosLaborales: datos_laborales;
  public  errorMessage: string;
  constructor (private http: HttpClient) {}
 


    public getEmpleado(): Observable<datos_laborales[]> {
      return this.http.get<datos_laborales[]>(this.servicioUrl+"/persona/datosPersonales/16001",  httpOptions).pipe(
        catchError(this.handleError('getEmpleado', []))
        );
      }




  public getInsertarDatos(datos_laborales:datos_laborales): Observable<datos_laborales>{
return this.http.post<datos_laborales>(this.servicioUrl+"/persona/insertarDependiente/",datos_laborales,httpOptions).pipe(
  catchError(this.handleError<datos_laborales>('create'))
);
  }
	
	
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
 