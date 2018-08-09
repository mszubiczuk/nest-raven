"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const raven_interceptor_abstract_1 = require("./raven.interceptor.abstract");
function RavenInterceptor(options = {}) {
    return common_1.mixin(class extends raven_interceptor_abstract_1.AbstractRavenInterceptor {
        constructor() {
            super(...arguments);
            this.options = options;
        }
    });
}
exports.RavenInterceptor = RavenInterceptor;
