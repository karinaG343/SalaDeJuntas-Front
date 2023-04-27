import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = 'https://localhost:7200/api/salas'; 


  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> { 
    return this.http.get<any[]>(this.apiUrl); 
  } 

  create(item: any): Observable<any> { 
    return this.http.post<any>(this.apiUrl, item); 
  } 

  update(id: number, item: any): Observable<any> { 
    return this.http.put<any>(`${this.apiUrl}/${id}`, item); 
  } 

  delete(id: number): Observable<any> { 
    return this.http.delete<any>(`${this.apiUrl}/${id}`); 
  }
}
