import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    public token = env.TOKEN;
    constructor(private authService: AuthService) {
        // this.store.select(selectAuthState).subscribe((state: any) => {
        //     this.token = state.accessToken;
        // });
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const newReq = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.token,
            },
        });
        return next.handle(newReq);
    }
}
