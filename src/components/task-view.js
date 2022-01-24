import { LitElement, html, css } from "lit";


class TaskView extends LitElement {

    static get properties() {
        return {
            id: { type: Number },
            title: { type: String},
            time: { type: String },
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

    deleteTask() {
        const temp = [];
        const todos = document.querySelector("app-view").todos;
        for (let i=0; i<document.querySelector("app-view").todos.length; i++) {
            if (document.querySelector("app-view").todos[i].id !== this.id)
                temp.push(document.querySelector("app-view").todos[i]);
        }
        document.querySelector("app-view").todos = temp;
        
        for (let i=0; i<document.querySelector("app-view").todos.length; i++) {
                document.querySelector("app-view").todos[i].id = i;
        }

        console.log(document.querySelector("app-view").todos);
    }

    updateTitle(e) {
        this.title = e.target.value;
    }

    updateTime(e) {
        this.time = e.target.value;
    }

    render() {
        return html`
            <div class="task-container">
                <input class="checkbox" type="checkbox">
                <input value=${this.title} @change=${this.updateTitle}>
                <input value=${this.time} @change=${this.updateTime}>
                <img src="../img/icons/delete.png" @click=${this.deleteTask}>
            </div>
        `
    }
}

customElements.define("task-view", TaskView);
