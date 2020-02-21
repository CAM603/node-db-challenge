
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Rebuild Slack', description: 'Create a cooler version of slack for Lambda students'},
        {project_name: 'Create new sprint challenges', description: 'Replace old sprint challenges with new challenges'},
        {project_name: 'Fix spelling errors in the training kit', description: 'Read through all training kit modules and fix spelling errors'},
        {project_name: 'Update Lambda logo', description: 'Replace all outdated existing Lambda logos with the new version'}
      ]);
};
