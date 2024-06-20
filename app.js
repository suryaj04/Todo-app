let todos =[]
let init = document.getElementById('init')
let flex = document.getElementById('flex')
let cancel = document.getElementById('cancelBtn')
let add = document.getElementById('addBtn')
let title = document.getElementById('title')
let description = document.getElementById('description')
let details = document.getElementById('details')
init.addEventListener('click', ()=>{
    flex.classList.remove('hidden')
    flex.classList.add('flex')
})
cancel.addEventListener('click', ()=>{
    flex.classList.add('hidden')
})
add.addEventListener('click', ()=>{
    let task = {
        title: title.value,
        desc: description.value
    }
    todos.push(task)
    details.innerHTML =""
   renderData()
})
let status = ''
let text = 'Mark as completed'
renderData=()=>{
    todos.forEach((todo, index)=>{
        if(todo.status === 'done'){
             status = 'bg-green-100 border-green-600'
             text = 'Task done'
        }
        else{
            text ='Mark as completed'
        }
        let div = document.createElement('div')
        div.innerHTML = `<div id="color" class="border border-black  rounded-md w-full ${status} mx-auto my-5 p-3">
                <div>
                    <h1 class="text-lg font-bold">${todo.title}</h1>
                    <p class="font-semibold">${todo.desc}</p>
                    <div class="flex gap-2">
                        <button id="completed" data-id="${index}" class="text-neutral-400 font-semibold hover:text-green-500">${text}</button>
                        <button id="delete" data-id="${index}" class="text-neutral-400 font-semibold hover:text-red-500">Delete</button>
                    </div>
                </div>
          </div>`
          details.appendChild(div)
          let completed = document.querySelectorAll('#completed')
    completed.forEach((complete)=>{
        status =""
        complete.addEventListener('mouseover', ()=>{
            let colors = document.querySelectorAll('#color')
            colors.forEach((color)=>{
                color.classList.add('hover:border-green-600')
            })
        })
        complete.addEventListener('mouseout', ()=>{
            let colors = document.querySelectorAll('#color')
            colors.forEach((color)=>{
                color.classList.remove('hover:border-green-600')
            })
        })
        complete.addEventListener('click', (e)=>{
            let index = e.target.getAttribute('data-id')
            let todo = todos[index]
            todo.status ='done'
            details.innerHTML =""
            renderData()
        })
    })
    })
    let deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let index = e.target.getAttribute('data-id')
            todos.splice(index, 1)
            details.innerHTML =""
            renderData()
        })
        
})
hover=()=>{
    let deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((btn)=>{
        btn.addEventListener('mouseover', ()=>{
            let colors = document.querySelectorAll('#color')
            colors.forEach((color)=>{
                color.classList.add('hover:border-red-600')
            })
        })
        btn.addEventListener('mouseout', ()=>{
            let colors = document.querySelectorAll('#color')
            colors.forEach((color)=>{
                color.classList.remove('hover:border-red-600')
            })
        })
})
}
hover()
}
