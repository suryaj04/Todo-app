let todos = [];
if(localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
}
storeTodos=()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
}
let init = document.getElementById('init')
let flex = document.getElementById('flex')
let cancel = document.getElementById('cancelBtn')
let add = document.getElementById('addBtn')
let title = document.getElementById('title')
let description = document.getElementById('description')
let details = document.getElementById('details')
let hide = document.getElementById('hide')
init.addEventListener('click', ()=>{
    flex.classList.remove('hidden')
    flex.classList.add('flex')
})
cancel.addEventListener('click', ()=>{
    flex.classList.add('hidden')
})
add.addEventListener('click', ()=>{
    
    details.innerHTML=''
    if(title.value == ''){
        storeTodos() 
        renderData()
        hide.classList.remove('hidden')
        hide.classList.add('block')
        setTimeout(()=>{
            hide.classList.remove('block')
            hide.classList.add('hidden')
        },1500)
    } 
    else {
        flex.classList.add('hidden')
        let task = {
            title: title.value,
            desc: description.value,
            status: '' 
        }
        todos.push(task)
        details.innerHTML = ""
        storeTodos() 
        renderData()
        title.value = ''
        description.value = ''
    }
})
let status = ''
let text = 'Mark as completed'
renderData = () => {
    details.innerHTML = ''
    todos.forEach((todo, index) => {
        if(todo.status === 'done'){
            status = 'bg-green-100 border-green-600'
            text = 'Task done'
        } 
        else {
            status = 'bg-[#FFD217]'  
            text = 'Mark as done'
        }
        let div = document.createElement('div')
        div.innerHTML = `
            <div id="color" class="border-2 border-black  rounded-md w-full ${status} mx-auto my-5 p-3">
                <div class="">
                    <h1 class="text-lg font-bold">${todo.title}</h1>
                    <p class="font-semibold">${todo.desc}</p>
                    <div class="flex gap-4 mt-2 p-1 rounded-md">
                        <button id="completed" data-id="${index}" class="sm:text-black font-semibold text-green-500 sm:hover:text-green-500">${text}</button>
                        <button id="delete" data-id="${index}" class="sm:text-black font-semibold sm:hover:text-red-500 text-red-500">Delete</button>
                    </div>
                </div>
            </div>`
        details.appendChild(div)
        let completed = document.querySelectorAll('#completed')
        completed.forEach((complete) => {
            complete.addEventListener('mouseover', () => {
                let colors = document.querySelectorAll('#color')
                colors.forEach((color) => {
                    color.classList.add('hover:border-green-900')
                    color.classList.add('hover:bg-green-100')
                    color.addEventListener('mouseover', ()=>{
                        color.classList.add('hover:shadow-lg')
                    })
                })
            })
            complete.addEventListener('mouseout', () => {
                let colors = document.querySelectorAll('#color')
                colors.forEach((color) => {
                    color.classList.remove('hover:border-green-600')
                    color.classList.remove('hover:bg-green-100')
                })
            })
            complete.addEventListener('click', (e) => {
                let index = e.target.getAttribute('data-id')
                let todo = todos[index]
                todo.status = 'done'
                storeTodos()
                renderData()
            })
        })
    })
    let deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-id')
            todos.splice(index, 1)
            storeTodos()
            renderData()
        })
    })
    hover()
}
hover=()=>{
    let deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((btn) => {
        btn.addEventListener('mouseover', () => {
            let colors = document.querySelectorAll('#color')
            colors.forEach((color) => {
                color.classList.add('hover:border-red-600')
                color.classList.add('hover:bg-red-100')
            })
        })
        btn.addEventListener('mouseout', () => {
            let colors = document.querySelectorAll('#color')
            colors.forEach((color) => {
                color.classList.remove('hover:border-red-600')
                color.classList.remove('hover:bg-red-100')
            })
        })
    })
}
let colors = document.querySelectorAll('#color')
                colors.forEach((color) => {
                    color.classList.add('hover:border-green-900')
                    color.classList.add('hover:bg-green-100')
                    color.addEventListener('mouseover', ()=>{
                        color.classList.add('hover:shadow-2xl')
                    })
                })
renderData()