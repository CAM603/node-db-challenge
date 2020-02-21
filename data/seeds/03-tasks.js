
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'A task description', notes: 'Words on words on words', project_id: '1'},
        {description: 'An okay task description', notes: 'Words made up of other words', project_id: '2'},
        {description: 'A good task description', notes: 'Words that are hard to pronounce', project_id: '3'},
        {description: 'A great task description', notes: 'Words that only coders understand', project_id: '4'},
        {description: 'The best task description', notes: 'Trust the process!', project_id: '1'},
        {description: 'A poor task description', notes: 'You need more reps!', project_id: '2'},
        {description: 'A bad task description', notes: 'Check your email', project_id: '3'},
        {description: 'The worst task description', notes: 'Turn off notifications', project_id: '4'}
      ]);
};
