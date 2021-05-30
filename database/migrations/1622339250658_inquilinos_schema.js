'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InquilinosSchema extends Schema {
  up () {
    this.create('inquilinos', (table) => {
      table.increments('idInquilino').primary()
      table.varchar('nome', 100)
      table.bigint('cpf', 11)
      table.varchar('rg', 45)
      table.date('data_nasc')
      table.varchar('telefone', 11)
      table.varchar('celular', 13)
      table.varchar('email', 60)
      table.boolean('status')
      table.date('data_inicial')
      table.date('data_final')
      table
        .integer('proprietario_id')
        .unsigned()
        .notNullable()
        .references('idProprietario')    
        .inTable('proprietarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('inquilinos')
  }
}

module.exports = InquilinosSchema
