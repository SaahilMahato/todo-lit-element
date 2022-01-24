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
        const todos = document.querySelector("app-view").todos;
        const temp = [...todos];

        const deletedTemp = temp.filter(todo => {
            return todo.id !== this.id;
        })
        
        for (let i=0; i<deletedTemp.length; i++) {
            deletedTemp[i].id = i;
        }

        document.querySelector("app-view").todos = [...deletedTemp];
    }

    updateTitle(e) {
        this.title = e.target.value;

        const todos = document.querySelector("app-view").todos;
        const temp = [...todos];
        for (let i=0; i<temp.length; i++) {
            if (temp[i].id === this.id) {
                temp[i].title = this.title;
                break;
            }
        }

        document.querySelector("app-view").todos = [...temp];
    }

    updateTime(e) {
        this.time = e.target.value;

        const todos = document.querySelector("app-view").todos;
        const temp = [...todos];
        for (let i=0; i<temp.length; i++) {
            if (temp[i].id === this.id) {
                temp[i].time = this.time;
                break;
            }
        }

        document.querySelector("app-view").todos = [...temp];
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
