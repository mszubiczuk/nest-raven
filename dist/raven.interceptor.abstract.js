"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const raven_constants_1 = require("./raven.constants");
const Raven = require("raven");
const operators_1 = require("rxjs/operators");
let AbstractRavenInterceptor = class AbstractRavenInterceptor {
    constructor(ravenClient) {
        this.ravenClient = ravenClient;
        this.options = {};
    }
    intercept(context, call$) {
        const httpRequest = context.switchToHttp().getRequest();
        const userData = httpRequest ? httpRequest.user : null;
        return call$.pipe(operators_1.tap(null, (exception) => {
            if (this.shouldReport(exception)) {
                this.ravenClient.captureException(exception, {
                    req: httpRequest,
                    user: userData,
                    tags: this.options.tags,
                    fingerprint: this.options.fingerprint,
                    level: this.options.level,
                    extra: this.options.extra,
                });
            }
        }));
    }
    shouldReport(exception) {
        if (!this.options.filters)
            return true;
        return this.options.filters
            .every(({ type, filter }) => {
            return !(exception instanceof type && (!filter || filter(exception)));
        });
    }
};
AbstractRavenInterceptor = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(raven_constants_1.RAVEN_SENTRY_PROVIDER)),
    __metadata("design:paramtypes", [Raven.Client])
], AbstractRavenInterceptor);
exports.AbstractRavenInterceptor = AbstractRavenInterceptor;
