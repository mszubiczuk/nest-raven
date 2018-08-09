import { ExecutionContext, NestInterceptor } from '@nestjs/common';
import { IRavenInterceptorOptions } from './raven.interfaces';
import * as Raven from 'raven';
import { Observable } from 'rxjs';
export declare abstract class AbstractRavenInterceptor implements NestInterceptor {
    private ravenClient;
    protected abstract readonly options: IRavenInterceptorOptions;
    constructor(ravenClient: Raven.Client);
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any>;
    private shouldReport;
}
