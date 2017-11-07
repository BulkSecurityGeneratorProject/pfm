import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { TransactionCategory } from './transaction-category.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TransactionCategoryService {

    private resourceUrl = SERVER_API_URL + 'api/transaction-categories';

    constructor(private http: Http) { }

    create(transactionCategory: TransactionCategory): Observable<TransactionCategory> {
        const copy = this.convert(transactionCategory);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(transactionCategory: TransactionCategory): Observable<TransactionCategory> {
        const copy = this.convert(transactionCategory);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<TransactionCategory> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to TransactionCategory.
     */
    private convertItemFromServer(json: any): TransactionCategory {
        const entity: TransactionCategory = Object.assign(new TransactionCategory(), json);
        return entity;
    }

    /**
     * Convert a TransactionCategory to a JSON which can be sent to the server.
     */
    private convert(transactionCategory: TransactionCategory): TransactionCategory {
        const copy: TransactionCategory = Object.assign({}, transactionCategory);
        return copy;
    }
}
