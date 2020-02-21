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

function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.description', 'tasks.notes', 'tasks.completed', 'projects.project_name', 'projects.description')
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
