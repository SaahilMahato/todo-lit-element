import { LitElement, html, css } from "lit";


class AddTaskView extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            time: { type: String },
            priority: { type: String },
        }
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
                    <input type='text' placeholder='Add Task' 
                    value="${this.title}"
                    @change="${this.updateTitle}"
                    name="title" required/>
                </div>
                <div class='form-control'>
                    <label>Day and Time</label>
                    <input type='text' placeholder='Add Day and Time' 
                    value="${this.time}"
                    @change="${this.updateTime}"
                    name="day" required/>
                </div>
                <div class='form-control'>
                    <label>Priority</label>
                    <select @change="${this.updatePriority}" required>
                        <option value="Low Priority">Low Priority</option>
                        <option value="Medium Priority" selected>Medium Priority</option>
                        <option value="High Priority">High Priority</option>
                    </select>
                </div>
                <button class='btn btn-block'
                @click="${this.addTask}">
                Add Task
                </button>
            </div>
        `
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

    addTask() {
        if(this.title && this.time) {
            const newTask = {
                title: this.title,
                time: this.time,
                priority: this.priority,
            }
            document.querySelector("app-view").todos = [...document.querySelector("app-view").todos, newTask];
        }
    }
}

customElements.define("add-task-view", AddTaskView);