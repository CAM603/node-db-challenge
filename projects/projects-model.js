const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks(id) {
    return db('tasks')
        .where({id})
        
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
}
