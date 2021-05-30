'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartamentosSchema extends Schema {
  up () {
    this.create('apartamentos', (table) => {
      table.increments('idApartamento').primary()
      table.integer('nro_apto', 4).unique()
      table.integer('qtde_garagem', 4).unsigned()
      table.varchar('escada_letra', 1)
      table.varchar('andar', 6)
      table.timestamps()
    })
  }

  down () {
    this.drop('apartamentos')
  }
}

module.exports = ApartamentosSchema
