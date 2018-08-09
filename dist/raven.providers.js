"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raven_constants_1 = require("./raven.constants");
const Raven = require("raven");
exports.ravenSentryProviders = [
    {
        provide: raven_constants_1.RAVEN_SENTRY_PROVIDER,
        useFactory: (config) => {
            return Raven.config(config.dsn, config.options).install();
        },
        inject: [raven_constants_1.RAVEN_SENTRY_CONFIG],
    },
];
