'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartamentoSchema extends Schema {
  up () {
    this.create('apartamentos', (table) => {
      table.increments()
      table.string('nome_prop')
      table.string('tel_prop')
      table.timestamps()
    })
  }

  down () {
    this.drop('apartamentos')
  }
}

module.exports = ApartamentoSchema
