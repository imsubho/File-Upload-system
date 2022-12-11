import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl = "https://file.io"

  constructor(private http: HttpClient) { }
  //Return as Observable
  upload(file: any): Observable<any> {
    //Create from Data
    const formData = new FormData();
    //Store form name as "file" with file data
    formData.append("file", file, file.name);
    return this.http.post(this.baseUrl, formData)
  }
}
