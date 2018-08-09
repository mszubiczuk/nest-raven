import { DynamicModule } from '@nestjs/common';
import * as Raven from 'raven';
export declare class RavenModule {
    static forRoot(dsn?: string, options?: Raven.ConstructorOptions): DynamicModule;
}
