import express from 'express'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
const TODO = [
    {
        name : "todo1",
        status : "completed",
        id:"1"
    },
    {
        name:"todo2",
        status : "not started",
        id:"2"
    },
    {
        name :"todo3",
        status:"completed",
        id:"3"
    }
]
app.all('/',(req,res)=>{
    console.log("request >",req)
    console.log("respose >",res)
   // res.send("I am up")
    res.json(TODO)
})

app.get('/todos',(req,res)=>{
    res.json(TODO)
})
app.post('/todos',(req,res)=>{
    const newTodo = req.body;
    TODO.push(newTodo)
    res.json({
        message:"new Todo Added",
        todo:TODO
    })
})
app.put('/todos/:id',(req,res)=>{
  const todoParams = req.params.id;
  const todoId = TODO.findIndex(todo=>todo.id === todoParams
  )
  if(todoId !== -1){
    TODO[todoId] = {
        id:req.params.id,
        ...req.body
    }
     res.json({
        message:" Todo updated",
        todo:TODO
    })
  }
  
})
app.delete('/todos/:id',(req,res)=>{
   const todoid = TODO.findIndex(e=>e.id===req.params.id)
   if(todoid !== -1){
    TODO.splice(todoid,1)
     res.json({
        message:" Todo deleted",
        todo:TODO
    })
   }

})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server is running in PORT "+ PORT )
})