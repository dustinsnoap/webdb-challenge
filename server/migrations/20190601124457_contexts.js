exports.up = knex =>
    knex.schema.createTable('action_contexts', tbl => {
        //a list of action contexts and their description
        tbl.increments()
        tbl.text('description')
            .notNullable()
    })

exports.down = knex =>
    knex.schema.dropTableIfExists('action_contexts')