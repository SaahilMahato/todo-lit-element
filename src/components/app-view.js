import { LitElement, html, css } from "lit";


class AppView extends LitElement {

    static get properties() {
        return {
            todos: { type: Array },
        }
    }

    static get styles() {
        return css`
            .container {
                width: 60%;
                min-height: 60vh;
                margin: 0 auto;
                padding: 1% 3%;
                background-color: white;
                border-radius: 10px;
            }

            .list-header {
                border-top: solid 2px black;
                border-bottom: solid 2px black;
                margin: 1% 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .list-header button {
                padding: 1%;
                background-color: red;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();
        this.todos = [];
    }

    render() {
        return html`
            <div class="container">
                <app-header></app-header>
                <add-task-view></add-task-view>
                <div class="list-header">
                    <h3>Todos</h3>
                    <button>Clear All</button>
                </div>
                <div class="todo-list">
                    ${this.todos.map(todo => html`
                        <task-view 
                            title=${todo.title}
                            time=${todo.time}
                            priority=${todo.priority}
                        >
                        </task-view>
                    `)}
                </div>
            </div>
        `
    }
}

customElements.define("app-view", AppView);
