import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

apiUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

sendMessage(model:any) {
 return this.http.post(this.apiUrl + 'message', model);
}

}
