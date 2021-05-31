'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.on('/aptos_').render('apartamentos')
Route.on('/morador').render('morador')
Route.get('/aptos', 'BuildingController.index')
Route.on('/add_ap').render('add_apto')
Route.post('/add_ap', 'BuildingController.store')