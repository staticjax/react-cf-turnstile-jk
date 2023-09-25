"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var resolveTurnstileLoad;
function createScript(src) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    resolveTurnstileLoad = resolve;
                    var script = document.createElement('script');
                    script.src = src;
                    script.id = 'cf-turnstile-script';
                    script.async = true;
                    script.defer = true;
                    //script.onload = () => resolve();
                    script.onerror = function () { return reject(new Error("Failed to load script ".concat(src))); };
                    document.body.appendChild(script);
                })];
        });
    });
}
var CFTurnstile = /** @class */ (function (_super) {
    __extends(CFTurnstile, _super);
    function CFTurnstile(props) {
        var _this = _super.call(this, props) || this;
        _this.renderTurnstile = _this.renderTurnstile.bind(_this);
        _this.resetTurnstile = _this.resetTurnstile.bind(_this);
        _this.removeTurnstile = _this.removeTurnstile.bind(_this);
        //this.getTurnstileResponse = this.getTurnstileResponse.bind(this);
        var ready = false;
        if (typeof window !== 'undefined') {
            ready = typeof window.turnstile !== 'undefined';
        }
        _this.state = {
            ready: ready,
            id: undefined,
            rendered: false
        };
        _this.ref = React.createRef();
        return _this;
    }
    CFTurnstile.prototype.componentDidMount = function () {
        var _this = this;
        // Define global objects and properties
        if (typeof window !== 'undefined') {
            window.onloadTurnstileCallback = function () {
                resolveTurnstileLoad();
            };
        }
        var res;
        if (!document.getElementById('cf-turnstile-script')) {
            res = createScript("https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback");
        }
        if (res) {
            res.then(function () {
                _this.setState({ turnstile: window.turnstile, ready: true }, function () {
                    _this.renderTurnstile();
                });
            });
        }
    };
    CFTurnstile.prototype.componentDidUpdate = function (prevProps) {
        var _a;
        if (prevProps !== this.props) {
            (_a = document.getElementById(this.state.id)) === null || _a === void 0 ? void 0 : _a.remove();
            this.renderTurnstile();
        }
    };
    CFTurnstile.prototype.renderTurnstile = function () {
        if (this.props['load-callback']) {
            this.props['load-callback']();
        }
        if (!this.state.ready || !this.state.turnstile) {
            return;
        }
        var res = this.state.turnstile.render(this.ref.current, this.props);
        if (!res) {
            throw new Error('Failed to render Turnstile');
        }
        this.setState({ id: res, rendered: true });
    };
    CFTurnstile.prototype.resetTurnstile = function () {
        if (!this.state.turnstile) {
            return;
        }
        this.state.turnstile.reset(this.state.id);
    };
    CFTurnstile.prototype.removeTurnstile = function () {
        if (!this.state.turnstile) {
            return;
        }
        this.setState({ rendered: false });
        this.state.turnstile.remove(this.state.id);
    };
    /*
          // getResponse() doesnt work for some reason?
      getTurnstileResponse() {
          if(!this.state.turnstile) {
              return
          }
          console.log(this.state.id)
          console.log(this.state.turnstile)
          let res;
          try {
              res = this.state.turnstile.getResponse(this.state.id!)
          } catch (e) {
              throw e
          }
          return res;
  
      }
  
       */
    CFTurnstile.prototype.render = function () {
        return (
        // @ts-ignore
        React.createElement("div", { ref: this.ref, id: this.props.id }));
    };
    return CFTurnstile;
}(React.Component));
exports.default = CFTurnstile;
//# sourceMappingURL=index.js.map