import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {
  }

  // intercepta peticiones al salir para agregar el token de autenticacion
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.info('HeadersInterceptor inicio')
    request = this.authorization(request);
    // if (!(request.body instanceof FormData)) {
    //   request = this.setCommonHeaders(request);
    // } else if(request.responseType !== "arraybuffer") {
    //   request = this.formDataHeaders(request);
    // }
    console.info('HeadersInterceptor fin')
    return next.handle(request);
  }

  authorization(request: HttpRequest<any>): HttpRequest<any> {
    if (request.url === environment.backend + environment.apiLogin) return request;
    const user: any = JSON.parse(localStorage.getItem('auth'));

    if (user && user.token) {
      console.info('HeadersInterceptor set token')
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } else console.info('HeadersInterceptor no set token')
    return request;
  }

  private setCommonHeaders = (request: HttpRequest<any>): HttpRequest<any> => {
    return request.clone({
      setHeaders: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  private formDataHeaders = (request: HttpRequest<any>): HttpRequest<any> => {
    return request;
  }
}
