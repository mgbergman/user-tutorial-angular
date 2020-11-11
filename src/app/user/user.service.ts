import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl = "http://localhost:8080/api/users";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseurl: string = "http://localhost:8080/api/users";

constructor(
  private http: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  get(id: number): Observable<User> {
    return this.http.get(`{baseurl}/${id}`) as Observable<User>;
  }

  create (user: User): Observable<User> {
    return this.http.post(`${baseurl}`, user) as Observable<User>;

  }
  change(user: User): Observable<any> {
    return this.http.put(`${baseurl}/$(user.id)`, user) as Observable<User>;
  }
  remove(user:User): Observable<User> {
    return this.http.delete('${baseurl}/${user.id}') as Observable<User>;
  }

}
