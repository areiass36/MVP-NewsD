import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscriber, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private innerSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor() { }

    public setTerm(term: string): void {
        this.innerSubject.next(term);
    }

    public subscribe(callback: (t: string) => void): Subscription {
        return this.innerSubject.subscribe(callback);
    }
}