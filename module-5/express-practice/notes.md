# Intro to Express

    # Initialize a new node project
    - npm init -y
    - npm install <dependencies>

# Vocabulary

    # Route
        * An event listener for http requests

    # Endpoint
        * "/item" "/user"

    # Port
        * localhost:9000

# Nodemon

    *npm install -g nodemon

# uuid add UUID to simulate unique ids

# Express Router - Enables us to modularize our server

# Express parameters (Placeholders)

    * base url amazon.com
    * end point amazon.com/pictures
    * parameters amazon.com/pictures/dksfoisdlfi

# Intro to databases

    * Relational Databases
        - SQL, Postgress
        - All data is stored in tables
            * Users
                * Each column represents a key
                * Strict formatting
                * PrimaryKey is an ID that is unique among the tables

        - Relating a user to their data

        -Db relationships
            * One to One => you to ssn
            * One to Many => user to to-dos
                => ForeignKey identifies who created the item/todo
            * Many to Many => user to product

    * Non-relational Databases
        - MongoDb
            * Enforces data rigidity

            * Collections [ARRAYS]
            * Document {OBJECT}
            * Model
                user {
                    name: string,
                    age: number,
                    _id:
                }

                todo {
                    title: string,
                    _id:
                    user: objectId
                }

# Intro to Mongoose

# Purpose

- Create models
- Query data
