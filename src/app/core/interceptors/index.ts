import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpHeaderResponse | HttpResponse<any> | HttpEvent<any>> {
    //这里可以在请求中加参数
    const newReq = request.clone({});
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理
        if (event instanceof HttpResponse && event.status === 200) return this.handleData(event);
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err)),
    )
  }
  private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  private handleData(event: HttpResponse<any>): Observable<any> {
    if(event.body.data&&event.body.errorCode!==0){
      this.notification.error(event.body.msg, ``);
    }
    return of(event)
  }

  private handleError(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (event.status) {
      case 500:
        this.notification.error('服务器错误', ``);
        break;
      default:
        break;
        // this.notification.error('请求错误', ``);
    }
    return of(event);
  }
}
