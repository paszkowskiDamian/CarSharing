import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {
	constructor(private http : Http) {}

	get(url: string): Promise<any> {
		return this.http.get(url)
			.toPromise()
			.then(res => res.json());
	}

	post(url: string, params: any): Promise<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(url, JSON.stringify(params), options)
			.toPromise()
			.then(res => res.json());
	}

	deleteHTTTP(url: string): Promise<any> {
		return this.http.delete(url)
			.toPromise()
			.then(res => res.json());
	}
}
