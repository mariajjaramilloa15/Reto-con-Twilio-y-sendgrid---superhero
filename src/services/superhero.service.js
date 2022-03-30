const SuperheroRouter = require('../routes/superheroes.router')
const SuperheroModel = require('../models/superheroModel')
const Boom = require('@hapi/boom');

class SuperheroService{
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez
  async createSuperhero(superhero){
    superhero.save();
    return superhero;
  }

  async listSuperhero(){
    return SuperheroModel.find()
  }

//Funcion que devuelve la promesa
  find(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(SuperheroModel.find());
      }, 3000);
    });
  }

  async showSuperhero(){
    return SuperheroModel.findById({ _id: superheroId })
  }

  async editSuperhero(superheroId, realname, feature = {universe, super_powers}, superhero_sidekick = {sidekick, side_powers}){
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind)=> {if(!superheroFind)throw Boom.notFound('No se encontro el superheroe');
      return SuperheroModel.updateOne(
        { superheroId },
        { realname, feature, superhero_sidekick }
      );
    }
    );
  }

  async removeSuperhero(){
      const superhero_remove = SuperheroModel.findById({ _id: superheroId });
      if(!superheroId) throw Boom.notFound('No se encontro el superheroe');
      SuperheroModel.deleteOne(superhero_remove);
      return SuperheroModel.deleteOne(superhero_remove);
    }
}

module.exports = SuperheroService;
