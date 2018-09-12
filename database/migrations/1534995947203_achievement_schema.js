'use strict'

const Schema = use('Schema')

class AchievementSchema extends Schema {
  up () {
    this.create('achievements', (table) => {
      table.increments()
      table
        .integer('userprofile_id')
        .unsigned()
        .references('id')
        .inTable('user_profiles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').unique().notNullable()
      table.string('cnpj').unique().notNullable()
      table.string('phone').notNullable()
      table.string('adress').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('achievements')
  }
}

module.exports = AchievementSchema
