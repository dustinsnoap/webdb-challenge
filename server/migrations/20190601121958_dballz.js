exports.up = (knex, Promise) =>
    Promise.all([
        knex.schema.createTable('projects', tbl => {
            //a list of projects including their description and status
            tbl.increments()
            tbl.string('name')
            tbl.text('description')
            tbl.boolean('complete')
        }),
        knex.schema.createTable('actions', tbl => {
            //a list of actions including a description, notes, and status
            //references id from projects table
            tbl.increments()
            tbl.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE') //if column gets deleted any related data will die with it
            tbl.text('description')
            tbl.text('notes')
            tbl.boolean('complete')
        })
    ])

exports.down = (knex, Promise) =>
    Promise.all([
        knex.schema.dropTableIfExists('projects'),
        knex.schema.dropTableIfExists('actions'),
    ])
