"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button = ({ children, className, appName }) => {
    return (<button className={className} onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>);
};
exports.Button = Button;
