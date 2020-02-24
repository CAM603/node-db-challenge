const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    getProjectById,
    getAllTasks,
    getTaskById,
    getResources,
    getResourceById,
    getProjectTasks,
    addProject,
    addResource,
    addTask,
    removeProject,
    // updateProject
}
/// Projects
function getProjects() {
    return db('projects')
        .then(res => {
            return res.map(el => {
                return {...el, completed: el.completed === 0 ? false : true}
            })
        })
}

function getProjectById(id) {
    return db('projects')
        .where({id})
        .first()
        .then(res => {
            if(res) {
                return {...res, completed: res.completed === 0 ? false : true}
            } else {
                return null
            }
        })
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids;

            return getProjectById(id)
        })
}

function removeProject(id) {
    return db('projects')
        .where({id})
        .del()
}

// function updateProject(changes, id) {
//     return db('projects')
//         .where({id})
//         .insert(changes)
//         .then(res => {
//             return getProjectById(id)
//         })
// }
// Tasks
function getAllTasks() {
    return db('tasks')
        .then(res => {
            return res.map(el => {
                return {...el, completed: el.completed === 0 ? false : true}
            })
        })
}

function getTaskById(id) {
    return db('tasks')
        .where({id})
        .first()
        .then(res => {
            if(res) {
                return {...res, completed: res.completed === 0 ? false : true}
            } else {
                return null
            }
        })
}

function addTask(project_id, task) {
    return db('tasks')
        .where({project_id})
        .insert(task, 'id')
        .then(ids => {
            const [id] = ids;

            return getTaskById(id)
        })
}
// Resources
function getResources() {
    return db('resources')
}

function getResourceById(id) {
    return db('resources')
        .where({id})
        .first()
}

function getProjectTasks(project_id) {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.project_name', 'projects.description as project_description', 'tasks.description as task_description', 'tasks.notes as task_notes', 'tasks.completed')
        .where({project_id: project_id})
        .then(res => {
            return res.map(el => {
                return {...el, completed: el.completed === 0 ? false : true}
            })
        })
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids;

            return getResourceById(id)
        })
}