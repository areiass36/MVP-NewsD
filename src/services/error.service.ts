import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, ObservableInput, tap } from "rxjs";
import { AlertService } from "./alert.service";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

    constructor(private alert: AlertService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((e: any, a: Observable<any>) => {
                if (e instanceof HttpErrorResponse) {
                    this.alert.showMessage("Erro", e.error);
                }
                return new Observable;
            }));
    }


}