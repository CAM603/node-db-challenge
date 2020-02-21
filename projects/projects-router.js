const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get projects' })
        })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get resources' })
        })
});

router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get tasks' })
        })
});

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add project' })
        })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add resource' })
        })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add task' })
        })
})


module.exports = router;