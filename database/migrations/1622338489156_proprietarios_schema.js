'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProprietariosSchema extends Schema {
  up () {
    this.create('proprietarios', (table) => {
      table.increments('idProprietario').primary()
      table.varchar('nome', 100)
      table.bigint('cpf', 11)
      table.varchar('rg', 45)
      table.date('data_nasc')
      table.varchar('telefone', 11)
      table.varchar('celular', 13)
      table.varchar('email', 60)
      table.boolean('status')
      table.date('data_compra')
      table.date('data_venda')
      table.timestamps()
    })
  }

  down () {
    this.drop('proprietarios')
  }
}

module.exports = ProprietariosSchema
