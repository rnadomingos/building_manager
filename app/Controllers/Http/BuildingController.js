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

    async store({ request, response, session }) {
        const apto = new Apartament()

        apto.nro_apto = request.input('nro_ap')
        apto.qtde_garagem = request.input('garagem')
        apto.escada_letra = request.input('escada')
        apto.andar = request.input('andar')

        await apto.save()

        return response.redirect('/add_ap')
    }
}

module.exports = BuildingController
