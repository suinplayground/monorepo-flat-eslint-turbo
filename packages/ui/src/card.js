"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
function Card({ className, title, children, href, }) {
    return (<a className={className} href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`} rel="noopener noreferrer" target="_blank">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>);
}
exports.Card = Card;
