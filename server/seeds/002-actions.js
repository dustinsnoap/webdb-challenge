exports.seed = async knex =>
  await knex('actions').insert([
    {id: 1, project_id: 1, description: 'desc0', notes: 'no notes', complete: false},
    {id: 2, project_id: 1, description: 'desc1', notes: 'no notes', complete: false},
    {id: 3, project_id: 2, description: 'desc2', notes: 'no notes', complete: false},
    {id: 4, project_id: 3, description: 'desc3', notes: 'no notes', complete: false},
    {id: 5, project_id: 3, description: 'desc4', notes: 'no notes', complete: false},
    {id: 6, project_id: 3, description: 'desc5', notes: 'no notes', complete: false},
    {id: 7, project_id: 4, description: 'desc6', notes: 'no notes', complete: false},
  ])