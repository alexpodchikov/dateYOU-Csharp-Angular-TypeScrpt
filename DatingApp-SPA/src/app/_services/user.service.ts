import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Message } from '../_models/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getUsers(page?: any, itemsPerPage?: any): Observable<PaginatedResult<User[]>> {
  const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
  let params = new HttpParams();
  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
}
  return this.http.get<User[]>(this.baseUrl + 'users', {observe: 'response', params}).pipe(
    map(response => { paginatedResult.result = response.body;
                      if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
                      return paginatedResult;
  })
  );
}

getUser(id: string): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

// tslint:disable-next-line: typedef
updateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'users/' + id, user);
}

// tslint:disable-next-line: typedef
setMainPhoto(userId: number, id: number) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
}

// tslint:disable-next-line: typedef
deletePhoto(userId: number, id: number) {
  return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
}

// tslint:disable-next-line: typedef
sendLike(id: number, recipientId: number) {
  return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
}

// tslint:disable-next-line: typedef
getMessages(id: number, page?: any, itemsPerPage?: any, messageContainer?: string) {
  const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();
  let params = new HttpParams();
  console.log(messageContainer);
  params = params.append('MessageContainer', messageContainer);

  if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
  }

  return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params}).pipe(
    map(response => { paginatedResult.result = response.body;
                      if (response.headers.get('Pagination') !== null) {
                           paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                      }
                      return paginatedResult;
  })
  );
}

// tslint:disable-next-line: typedef
getMessageThread(id: number, recipientId: number) {
  return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
}

// tslint:disable-next-line: typedef
sendMessage(id: number, message: Message) {
  return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
}

// tslint:disable-next-line: typedef
deleteMessage(id: number, userId: number) {
  return this.http
      .post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
}

// tslint:disable-next-line: typedef
markAsRead(userId: number, messageId: number) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {}).subscribe();
}
}
