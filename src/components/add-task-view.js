import { LitElement, html, css } from "lit";


class AddTaskView extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            time: { type: String },
        }
    }

    constructor() {
        super();
        this.title = "";
        this.time = "";
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

    addTask() {
        if(this.title && this.time) {
            const newTask = {
                title: this.title,
                time: this.time
            }
            document.querySelector("app-view").todos = [...document.querySelector("app-view").todos, newTask];
        }
    }
}

customElements.define("add-task-view", AddTaskView);