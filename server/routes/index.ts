import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) => {
   try {
        const tasks = await Task.find()
        res.send(tasks)
   } catch(err) {
        console.log('There was an error: ' + err);
   }
})

router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body
        const task = new Task ({ title, description})

        await task.save()
        res.json(task)
    } catch(err) {
        console.log('There was an error: ' + err);
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if(!task) return res.status(404).json({ message: "Task not found" })

        return res.send(task)
    } catch(err) {
        return res.status(500).send(err)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task) return res.status(404).json({ message: "Task not found" })

        return res.json(task)
    } catch(err) {
        return res.status(500).send(err)
    }
})

router.put('/tasks/:id', async (req, res) => {
   try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.json(updateTask)
   }catch(err) {
    return res.status(500).send(err)
   }
})

export default router