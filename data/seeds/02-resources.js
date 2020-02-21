
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'MacBook Pro', description: 'The best laptop'},
        {name: 'Web Student', description: 'A student trained in full stack web development'},
        {name: 'Pizza', description: 'Fuel for work'},
        {name: 'Conference Room A', description: 'The best room, overlooks the ocean'},
        {name: 'Conference Room B', description: 'A dark, windowless room. A good place for coding'},
        {name: '32" Monitor', description: 'Makes a great second monitor'},
        {name: 'Wireless Keyboard', description: 'This keyboard has no wire'},
        {name: 'Wireless Mouse', description: 'This mouse has no wire'}
      ]);
};
