const task = document.querySelector("#task");
const weight = document.querySelector("#weight");
const time = document.querySelector("#time");

const errors = document.querySelector("#error");

const button = document.querySelector("button");
const list = document.querySelector("ol");

const tasks = [];
const densities = [];
var item_counter = 0;

function sort() {
    for (let i = 0; i < item_counter; i++) {
        console.log("reached");
        var max_element = densities[i];
        var max_task = tasks[i];
        var max_index = i;
        for (let j = i; j < item_counter; j++) {
            if (densities[j] > max_element) {
                max_element = densities[j];
                max_task = tasks[j];
                max_index = j;
            }
        }
        var temp = densities[i];
        densities[i] = max_element;
        densities[max_index] = temp;
        temp = tasks[i];
        tasks[i] = max_task;
        tasks[max_index] = temp;
    }
}

function add_task() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < item_counter; i++) {
        const list_item = document.createElement("li");
        const span = document.createElement("span");
        const btn = document.createElement("button");

        list_item.appendChild(span);
        list_item.appendChild(btn);

        span.textContent = "Task: " + tasks[i] + " | Density: " + densities[i];
        btn.textContent = 'Delete';

        list.appendChild(list_item);

        btn.addEventListener('click', function () {
            list.removeChild(list_item);
            tasks.splice(i, 1);
            densities.splice(i, 1);
            item_counter -= 1;
        });
    }
}

function clear_all() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    tasks = [];
    densities = [];
    item_counter = 0;
}

function response() {
    const task_str = task.value.trim();
    const weight_str = weight.value.trim();
    const time_str = time.value.trim();
    if (task_str === '' || task_str == null || weight_str === '' || weight_str == null 
        || time_str === '' || time_str == null) {
        errors.textContent = '';
        task.value = '';
        weight.value = '';
        time.value = '';
        errors.textContent = "Text field cannot be empty!"
    } else if (isNaN(weight_str || isNaN(time_str))) {
        errors.textContent = '';
        task.value = '';
        weight.value = '';
        time.value = '';
        errors.textContent = "Weight and time must be numbers!"
    } else if (weight_str < 1 || weight_str > 10) {
        errors.textContent = '';
        task.value = '';
        weight.value = '';
        time.value = '';
        errors.textContent = "Weight must be between 1 and 10!"
    } else {
        errors.textContent = '';
        task.value = '';
        weight.value = '';
        time.value = '';

        var density = weight_str / time_str
        tasks[item_counter] = task_str;
        densities[item_counter] = density;
        item_counter += 1;

        sort();
        add_task();
        
        task.focus();
    }
}

button.addEventListener("click", response);