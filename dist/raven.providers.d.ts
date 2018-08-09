import * as Raven from 'raven';
import { IRavenConfig } from './raven.interfaces';
export declare const ravenSentryProviders: {
    provide: string;
    useFactory: (config: IRavenConfig) => Raven.Client;
    inject: string[];
}[];
