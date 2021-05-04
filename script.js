// Today's date

const today = new Date();
const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()

document.querySelector('.today').textContent = date;

// Empty Todoitems array
// function rendertodo todo parameter, localstorage.setitem('todoitems', json.stringify(todoitems))
// inside ^ var list attached to html .js-todo-list
// inside ^ var item attached html [data-key=${todo.id}]
// if statement (todo.deleted) then item.remove
// if (todoitems.length === 0) list innerhtml = ''
// return
// var ischecked todo.checked ? 'done' : ''
// var node = createelement "li"
// node.setattribute('class', todoitem${ischecked})
// node setattribute('data-key, todo.id)
// node innerhtml = reference todolist

// if statement(item) then list.replacechild(node, item)
// else list.append(node)

// function addtodo(text), const todo, { text, checked: false, id: date.now()}
// todoitems push (todo)
// }

// function toggledone(key), const index = todoitems.findindex(item => item.id === number(key))



todoItems = [];

function renderTodo(todo) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems))

    let list = document.querySelector('.js-todo-list');
    let item = document.querySelector(`[data-key = ${todo.id}]`);

    if (todo.deleted) {
        item.remove
    } if (todoItems.length === 0) {
        list.innerHTML = ''
        return
    }
}

const ischecked = todo.checked ? 'done' : '';
const node = document.createElement("li");
node.setAttribute('class', `todoItem ${isChecked}`);
node.setAttribute('data-key', todo.id)
node.innerHTML = `
<input id="${todo.id}" type="checkbox"/>
<label for="${todo.id}" class="tick js-tick"></label>
<span>${todo.text}</span>
<button class="delete-todo js-delete-todo">
<svg><use href="#delete-icon"></use></svg>
</button>
`

if (item) {
    list.replaceChild(node, item)
} else {
    list.append(node)
}

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: date.now()
    }
    todoItems.push(todo)
}

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key))
}