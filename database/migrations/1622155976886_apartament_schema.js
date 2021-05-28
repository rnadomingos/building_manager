'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartamentSchema extends Schema {
  up () {
    this.create('apartaments', (table) => {
      table.increments()
      table.integer('nro_ap')
      table.string('nome_prop')
      table.string('tel_prop')
      table.string('cel_prop')
      table.string('email_prop')
      table.boolean('alugado')
      table.string('nome_inql')
      table.string('tel_inql')
      table.string('cel_inql')
      table.string('email_inql')
      table.timestamps()
    })
  }

  down () {
    this.drop('apartaments')
  }
}

module.exports = ApartamentSchema
