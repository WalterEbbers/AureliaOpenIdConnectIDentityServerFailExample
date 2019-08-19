define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('open-id-configuration',["require", "exports", "oidc-client"], function (require, exports, oidc_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var appHost = "http://localhost:9000";
    exports.default = {
        loginRedirectRoute: "/private",
        logoutRedirectRoute: "/index",
        unauthorizedRedirectRoute: "/index",
        userManagerSettings: {
            accessTokenExpiringNotificationTime: 1,
            authority: "http://localhost/Identity/",
            automaticSilentRenew: true,
            monitorSession: true,
            checkSessionInterval: 2000,
            client_id: "CustomerClient",
            filterProtocolClaims: true,
            loadUserInfo: false,
            post_logout_redirect_uri: appHost + "/signout-oidc",
            redirect_uri: appHost + "/signin-oidc",
            response_type: "id_token",
            scope: "openid api",
            silentRequestTimeout: 10000,
            silent_redirect_uri: appHost + "/signin-oidc",
            userStore: new oidc_client_1.WebStorageStateStore({
                prefix: "oidc",
                store: window.localStorage,
            }),
        },
    };
});



var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('main',["require", "exports", "./environment", "./open-id-configuration"], function (require, exports, environment_1, open_id_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                aurelia.use
                    .standardConfiguration()
                    .feature('resources');
                aurelia.use.plugin('aurelia-open-id-connect', function () { return open_id_configuration_1.default; });
                if (environment_1.default.debug) {
                    aurelia.use.developmentLogging();
                }
                if (environment_1.default.testing) {
                    aurelia.use.plugin('aurelia-testing');
                }
                aurelia.start().then(function () { return aurelia.setRoot(); });
                return [2];
            });
        });
    }
    exports.configure = configure;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [])
        ], App);
        return App;
    }());
    exports.App = App;
});



define('app.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <!--Bootstrap-->\r\n  <require from=\"bootstrap/css/bootstrap.min.css\"></require>\r\n  <require from=\"./app.css\"></require>\n\r\n\n\n\r\n  <div id=\"app-container\">\r\ntest\n    <!--<router-view></router-view>-->\r\n  </div>\n\n</template>\r\n"; });
define('app.css!text', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map