import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorResponse} from './error-response';
import {Router} from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.info('ErrorInterceptor inicio')
    return next.handle(req).pipe(catchError((errorReponse: HttpErrorResponse) => {
      console.info('ErrorInterceptor hay error')
      // Loading.remove();
      switch (errorReponse.status) {
        case 0:
          // Notiflix.Report.failure(
          //   'Servicio no disponible',
          //   'No se pudo establecer la conexión con el servidor, por favor comuniquese con el administrador.',
          //   'Ok'
          // );
          return throwError(errorReponse.error);
        case HttpStatusCode.Forbidden:
          // Notiflix.Report.failure(
          //   'Sesión finalizada',
          //   'El tiempo de sesión ha finalizado, por favor inicie nuevamente.',
          //   'Ok',
          //   () => {
          //     this.storageService.cleanStorage();
                  this.router.navigate(['/login'], {replaceUrl: true});
          //   }
          // );
          return throwError(errorReponse.error);
        case HttpStatusCode.Unauthorized:
          // Notiflix.Report.failure(
          //   'Sesión finalizada',
          //   'El tiempo de sesión ha finalizado, por favor inicie nuevamente.',
          //   'Ok',
          //   () => {
          //     this.storageService.cleanStorage();
              this.router.navigate(['/login'], {replaceUrl: true});
          //   }
          // );
          return throwError(errorReponse.error);
        case HttpStatusCode.NotFound:
          // Notiflix.Report.failure(
          //   'Servicio desconocido',
          //   `El servicio "${errorReponse.error?.path}" no existe o no se encuentra disponible, por favor comuniquese con el administrador.`,
          //   'Ok'
          // );
          return throwError(errorReponse);
        case HttpStatusCode.InternalServerError:
          const body: ErrorResponse = errorReponse.error;
          // Notiflix.Report.failure(
          //   '¡Ocurrió un problema!',
          //   body.message,
          //   'Ok'
          // );
          return throwError(errorReponse);
        case HttpStatusCode.BadRequest:
          const body1: ErrorResponse = errorReponse.error;
          // Notiflix.Report.failure(
          //   '¡Ocurrió un problema!',
          //   body1.message,
          //   'Ok'
          // );
          return throwError(errorReponse);
        default:
          const {error} = errorReponse;
          return throwError(new HttpErrorResponse({
            error: {
              error: 'Desconocido',
              message: 'Ocurrió un error inesperado',
              path: errorReponse.url,
              status: 0,
              timestamp: '',
              trace: ''
            },
            url: errorReponse.url,
            status: 0,
            headers: errorReponse.headers,
            statusText: errorReponse.statusText
          }));
      }
    }));
  }

}
