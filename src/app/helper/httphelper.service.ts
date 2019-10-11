import { Injectable, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod, RequestOptions } from "@angular/http";
import { RequestArgs } from "@angular/http/src/interfaces";
import { Observable } from 'rxjs/Observable';
import { Globals } from '../globals.module';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpHelper {
  protected headers: Headers;
  protected requestOptions;
  constructor(private _http: Http, private globals: Globals, public cookieService: CookieService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.requestOptions = new RequestOptions({ headers: this.headers });
  }

  getAccessToken() {

    let AccessToken = this.cookieService.get('airtmd') == "" ? null : (JSON.parse(this.cookieService.get('airtmd'))).accessToken;
    if (AccessToken != null) {
      if (!this.headers.has('Authorization'))
        this.headers.append('Authorization', 'Bearer ' + AccessToken)
    }
    else {
      this.headers.delete('Authorization');
    }

    this.requestOptions = new RequestOptions({ headers: this.headers });
  }

  get(url: string): Observable<any> {
    this.getAccessToken();
    return this._http.get(url, this.requestOptions)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  post(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    this.getAccessToken();
    if (args == null) args = {};
    if (args.headers === undefined) args.headers = this.headers;
    return this._http.post(url, data, args)
      .map((res: Response) => HttpHelper.json(res))
      .catch(this.handleError);
  }

  put(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    this.getAccessToken();
    if (args == null) args = {};
    if (args.headers === undefined) args.headers = this.headers;

    return this._http.put(url, data, args)
      .map((res: Response) => HttpHelper.json(res))
      .catch(this.handleError);
  }

  remove(url: string, data?: any, args?: RequestOptionsArgs): Observable<any> {
    this.getAccessToken();
    if (args == null) args = {};

    args.url = url;
    args.method = RequestMethod.Delete;
    if (!args.headers) args.headers = this.headers;
    args.body = data ? data : null;

    return this._http.request(new Request(<RequestArgs>args))
      .map((res: Response) => HttpHelper.json(res))
      .catch(this.handleError);
  }

  private static json(res: Response): any {
    return res.text() === "" ? res : res.json();
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}