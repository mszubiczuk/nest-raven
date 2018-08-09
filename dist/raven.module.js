"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RavenModule_1;
const common_1 = require("@nestjs/common");
const raven_providers_1 = require("./raven.providers");
const raven_constants_1 = require("./raven.constants");
let RavenModule = RavenModule_1 = class RavenModule {
    static forRoot(dsn, options) {
        return {
            module: RavenModule_1,
            providers: [
                {
                    provide: raven_constants_1.RAVEN_SENTRY_CONFIG,
                    useValue: { dsn, options },
                },
            ],
            exports: [
                {
                    provide: raven_constants_1.RAVEN_SENTRY_CONFIG,
                    useValue: { dsn, options },
                },
            ],
        };
    }
};
RavenModule = RavenModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [
            ...raven_providers_1.ravenSentryProviders,
        ],
        exports: [
            ...raven_providers_1.ravenSentryProviders,
        ],
    })
], RavenModule);
exports.RavenModule = RavenModule;
