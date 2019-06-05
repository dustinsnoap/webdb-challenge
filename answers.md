1. Explain the difference between `RDBMS` and `SQL`.

SQL     (structured query language) is the HTML of databases;
        a scripting language designed to aid communication
        between RDBMS and whatever it's connected to.
RDBMS   (relational database management systems) are software systems
        that adhere to a specific standard for organizing data in tables,
        fields, records, and features.

2. Why do tables need a `primary key`?

    Records have a designated source of unique identification that
    supercedes other identifying fields. Primary keys provide that
    source of identity.

3. What is the name given to a table column that references the primary key on another table.

    Foreign Key

4. What do we need in order to have a _many to many_ relationship between two tables.

    A forgien key that references the id from another table.