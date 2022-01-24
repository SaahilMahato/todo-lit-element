import { LitElement, html, css } from "lit";

class TaskView extends LitElement {

    static get properties() {
        return {
            title: { type: String},
            time: { type: String },
            priority: { type: String },
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="task-container">
                <div>
                    <h3>${this.title}</h3>
                    <p>${this.time}</p>
                </div>
                <p>${this.priority}</p>
                <input type="checkbox">
                <img src="../img/icons/delete.png">
            </div>
        `
    }
}

customElements.define("task-view", TaskView);
