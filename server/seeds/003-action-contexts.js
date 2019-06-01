exports.seed = async knex =>
  await knex('action_contexts').insert([
    {id: 1, description: 'i'},
    {id: 2, description: 'still'},
    {id: 3, description: 'dont'},
    {id: 4, description: 'know'},
    {id: 5, description: 'what'},
    {id: 6, description: 'a'},
    {id: 7, description: 'context'},
    {id: 8, description: 'is'},
  ])