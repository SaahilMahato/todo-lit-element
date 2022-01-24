import { LitElement, html, css } from "lit";

const filters = {
    SHOW_ALL: "All",
    SHOW_ACTIVE: "Active",
    SHOW_COMPLETED: "Completed"
};


class AppView extends LitElement {

    static get properties() {
        return {
            todos: { type: Array },
            filter: { type: String },
        }
    }

    constructor() {
        super();
        this.todos = [];
        this.filter = filters.SHOW_ALL;
    }

    render() {
        return html`
            <div class="container">
                <app-header></app-header>
                <add-task-view></add-task-view>
            </div>
        `
    }
}

customElements.define("app-view", AppView);
