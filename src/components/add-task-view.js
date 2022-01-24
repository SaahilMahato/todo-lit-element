import { LitElement, html, css } from "lit";


class AddTaskView extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            time: { type: String },
            priority: { type: String },
        }
    }

    static get styles() {
        return css `
            .add-form {
                display: flex;
                justify-content: space-between;
            }

            .form-control {
                width: 30%;
            }

            label {
                width: 30%;
                padding: 3% 0;
                font-size: 1.4em;
            }
            
            input, select {
                width: 70%;
                padding: 3% 0;
                font-size: 1.4em;
            }

            button {
                width: 10%;
                color: white;
                background-color: green;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1.4em;
            }
        `;
    }

    constructor() {
        super();
        this.title = "";
        this.time = "";
        this.priority = "Medium Priority";
    }

    render() {
        return html`
            <div class='add-form'>
                <div class='form-control'>
                    <label>Task</label>
                    <input id="title" type='text' placeholder='Add Task' 
                    value="${this.title}"
                    @change="${this.updateTitle}"
                    required/>
                </div>
                <div class='form-control'>
                    <label>Time</label>
                    <input id="time" type='text' placeholder='Add Day and Time' 
                    value="${this.time}"
                    @change="${this.updateTime}"
                    required/>
                </div>
                <div class='form-control'>
                    <label>Priority</label>
                    <select @change="${this.updatePriority}" required>
                        <option value="Low Priority">Low Priority</option>
                        <option id="default" value="Medium Priority" selected>Medium Priority</option>
                        <option value="High Priority">High Priority</option>
                    </select>
                </div>
                <button @click="${this.addTask}">Add Task</button>
            </div>
        `;
    }

    updateTitle(e) {
        this.title = e.target.value;
    }

    updateTime(e) {
        this.time = e.target.value;
    }

    updatePriority(e) {
        this.priority = e.target.value;
    }

    resetForm() {
        this.shadowRoot.querySelector("#title").value = "";
        this.shadowRoot.querySelector("#time").value = "";
        this.shadowRoot.querySelector("#default").selected = true;
        this.priority = "Medium Priority";
    }

    addTask() {
        if(this.title && this.time) {
            const newTask = {
                title: this.title,
                time: this.time,
                priority: this.priority,
            }
            document.querySelector("app-view").todos = [...document.querySelector("app-view").todos, newTask];
            this.resetForm();
        }
    }
}

customElements.define("add-task-view", AddTaskView);
