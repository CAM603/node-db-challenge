
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
};
