import {Todo} from '../models/todo.js' 

class todoController {
    constructor(){
        // hold todo ebjects in array
        this.TODOS = [] 
    } 
    createTodo(req, res){
        //get data from POST request
        const task = req.body.task
        // create new object via Todo model
        // model constructor uses uniq id and task name as parameter
        const newTodo = new Todo(Math.random().toString(), task)
        // add new todo to todos array
        this.TODOS.push(newTodo)
        //create a correct response
        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })
    }
    
    getTodos(req, res){
        res.json({tasks: this.TODOS})
    }
    updateTodo(req, res){
        //get id from url params
        const todoId = req.params.id
        //get the updated task name from request body
        const updatedTask = req.body.task
        //get the array element index if toto id is equal with url params id
        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)
        //if url params id is not correct - send error message
        if(todoIndex < 0){
            throw new Error('Could not find todo!')
            res.json({
                message: 'Could not find todo with such index'
            })
        } 
        //if id is ok - update Todo
        //for update create element with the same id adn new task and save it in the same array element by this index
        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)
        //show updated info
        res.json({
            message: 'Updated todo',
            updatedTask: this.TODOS[todoIndex] 
        }) 
    } 
}
 
    

export const TodoController = new todoController()