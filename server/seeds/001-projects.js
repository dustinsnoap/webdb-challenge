exports.seed = async knex =>
  await knex('projects').insert([
    {id: 1, name: 'i', description: 'desc0', complete: false},
    {id: 2, name: 'cant', description: 'desc1', complete: false},
    {id: 3, name: 'think', description: 'desc2', complete: false},
    {id: 4, name: 'of', description: 'desc3', complete: false},
    {id: 5, name: 'any', description: 'desc4', complete: false},
    {id: 6, name: 'project', description: 'desc5', complete: false},
    {id: 7, name: 'names', description: 'desc6', complete: false},
  ])