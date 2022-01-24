import { LitElement, html, css } from "lit";


class TaskView extends LitElement {

    static get properties() {
        return {
            title: { type: String},
            time: { type: String },
            priority: { type: String },
        }
    }

    static get styles() {
        return css `
            .task-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: solid 2px;
                border-radius: 10px;
                margin: 5px 0;
            }

            .checkbox {
                width: 24px;
                height: 24px;
                cursor: pointer;
            }

            img {
                width: 32px;
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="task-container"
                style="border-color: ${this.priority === "High Priority"? "red": 
                this.priority === "Medium Priority"? "yellow": "green"}"
            >
                <input class="checkbox" type="checkbox">
                <h3>${this.title}</h3>
                <p>${this.time}</p>
                <p>${this.priority}</p>
                <img src="../img/icons/delete.png">
            </div>
        `
    }
}

customElements.define("task-view", TaskView);
