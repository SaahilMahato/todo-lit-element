import { LitElement, html, css } from "lit";


class TaskView extends LitElement {

    static get properties() {
        return {
            id: { type: Number },
            title: { type: String},
            time: { type: String },
            editTodo: { },
            updateTodos: { },
            deleteTodo: { },
        }
    }

    static get styles() {
        return css `
            .task-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .checkbox {
                width: 24px;
                height: 24px;
                cursor: pointer;
            }

            input {
                font-size: 18px;
                border: none;
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

    updateTitle(e) {
        this.title = e.target.value;
        this.editTodo(this.id, this.title, this.time);
    }

    updateTime(e) {
        this.time = e.target.value;
        this.editTodo(this.id, this.title, this.time);
    }

    render() {
        return html`
            <div class="task-container">
                <input class="checkbox" type="checkbox">
                <input .value=${this.title} @change=${this.updateTitle}>
                <input .value=${this.time} @change=${this.updateTime}>
                <img src="../img/icons/delete.png" @click=${() => this.deleteTodo(this.id)}>
            </div>
        `
    }
}

customElements.define("task-view", TaskView);
