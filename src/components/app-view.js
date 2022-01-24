import { LitElement, html } from "lit";


class AppView extends LitElement {

    render() {
        return html`
            <div class="container">
                <!-- <app-header></app-header>
                <add-task></add-task> -->

                <p>Hello World</p>
            </div>
        `
    }
}

customElements.define("app-view", AppView);
