import { LitElement, html, css } from "lit";


class AppView extends LitElement {

    static get properties() {
        return {
            todos: { type: Array },
        }
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
