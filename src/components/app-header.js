import { LitElement, html, css } from "lit";


class AppHeader extends LitElement {

    constructor() {
        super();
    }

    static get styles() {
        return  css`
            h1 {
                font-weight: normal;
            }
        `
    }

    render() {
        return html`
            <header>
                <h1>TODO-LIST</h1>
            </header>
        `
    }
}

customElements.define("app-header", AppHeader);
