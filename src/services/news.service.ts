import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { News } from "src/models/News";

@Injectable({
    providedIn: "root"
})
export class NewsService {


    constructor(private http: HttpClient) { }

    public getNews({ term = '', id = '' }): Observable<News[]> {
        return this.http.get<News[]>(`${environment.NewsDApi}News`, { params: { 'term': term, 'id': id } })
    }

    public createNews(news: News): Observable<News> {
        const form = new FormData();

        const values = Object.values(news);
        const keys = Object.keys(news);

        keys.forEach((k, i) => form.set(k, values[i]));

        return from(fetch(news.imageUrl!))
            .pipe(
                mergeMap(i => from(i.blob())),
                tap(i => form.append('image', i)),
                mergeMap(() => this.http.post<News>(`${environment.NewsDApi}News`, form))
            )
    }

    public getNewsById(id = ''): Observable<News> {
        return this.http.get<News>(`${environment.NewsDApi}News/${id}`)
    }
}