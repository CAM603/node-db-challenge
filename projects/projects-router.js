const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

/////////////////////////// Project routes ////////////////////
// Get all projects
router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get projects' })
        })
});
// Get a project via id
router.get('/projects/:id', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get projects' })
        })
});
// Add a project
router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add project' })
        })
})
// Delete project
router.delete('/projects/:id', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                Projects.removeProject(id)
                    .then(deleted => {
                        if(deleted) {
                            res.status(200).json({deleted: project})
                        } else {
                            res.status(404).json({ message: 'Failed to find project with given id' })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ mesage: 'Failed to delete project' })
                    })
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get projects' })
        })
})
// Update Project
// router.put('/projects/:id', (req, res) => {
//     const {id} = req.params;
//     // req.body.project_id = req.params.id;

//     Projects.updateProject(req.body, id)
//         .then(updated => {
//             res.status(200).json(updated)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ error: 'Failed to update project' })
//         })
// })
/////////////////////////// Task routes ////////////////////
// Get all tasks
router.get('/tasks', (req, res) => {
    Projects.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get all tasks' })
        })
})
// Get tasks by id
router.get('/tasks/:id', (req, res) => {
    const {id} = req.params;

    Projects.getTaskById(id)
        .then(task => {
            if(task) {
                res.status(200).json(task)
            } else {
                res.status(404).json({ message: 'Could not find task with given id.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get tasks'})
        })
})
// Get a project's tasks
router.get('/projects/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                Projects.getProjectTasks(id)
                    .then(tasks => {
                        if(tasks.length === 0) {
                            res.status(200).json({ message: 'There are no tasks'})
                        } else {
                            res.status(200).json(tasks)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ error: 'Failed to get tasks' })
                    })
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get projects' })
        })
});
// Add task to a project
router.post('/projects/:id/tasks', (req, res) => {
    req.body.project_id = req.params.id;

    Projects.addTask(req.params.id, req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to add task' })
        })
})
/////////////////////////// Resources routes ////////////////////
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

router.get('/resources/:id', (req, res) => {
    const {id} = req.params;

    Projects.getResourceById(id)
        .then(resource => {
            if(resource) {
                res.status(200).json(resource)
            } else {
                res.status(404).json({ message: 'Could not find resource with given id.'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get resources' })
        })
});

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

module.exports = router;