import { LitElement, html, css } from "lit";


class AppHeader extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <header>
                <h1>TODO</h1>
            </header>
        `
    }
}

customElements.define("app-header", AppHeader);
