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

function getTasks(project_id) {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.project_name', 'projects.description as project_description', 'tasks.description as task_description', 'tasks.notes as task_notes')
        .where({project_id: project_id})
}
// SELECT projects.project_name, projects.description AS projDesc, tasks.description AS taskDesc, tasks.notes AS taskNotes FROM tasks
// JOIN projects ON tasks.project_id = projects.id
// WHERE projects.id = 1

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
