'use strict'

const Apartament = use('App/Models/Apartamento')

class BuildingController {

    async index({ view }){
        
        const aptos = await Apartament.all()

        return view.render('apartamentos', {
            title: 'Apartamentos',
            aptos: aptos.toJSON()
        }) 
    }
}

module.exports = BuildingController
