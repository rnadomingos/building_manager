'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartProprietarioSchema extends Schema {
  up () {
    this.create('apart_proprietarios', (table) => {
      table
        .integer('apto_id')
        .unsigned()
        .notNullable()
        .references('idApartamento')    
        .inTable('apartamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('prop_id')
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
    this.drop('apart_proprietarios')
  }
}

module.exports = ApartProprietarioSchema
