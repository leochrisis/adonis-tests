'use strict'

/*
|--------------------------------------------------------------------------
| EvaluationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Evaluation = use('App/Models/Evaluation')

class EvaluationSeeder {
  async run () {
    await Evaluation.create({
      unitId: 1,
      type: 'contexto',
      status: 'Finalizada',
      contractor: 'Lorem',
      partner: 'Inpsun',
      startDate: new Date('Tue Oct 10 2017 00:00:00 GMT-0300 (Horário Padrão de Brasília)'),
      endDate: new Date('Wed May 16 2018 23:21:01 GMT-0300 (Horário Padrão de Brasília)')
    })
    await Evaluation.create({
      unitId: 1,
      type: 'contexto',
      status: 'Finalizada',
      contractor: 'Dolor',
      partner: 'Sit Amet',
      startDate: new Date('Tue Oct 17 2017 00:00:00 GMT-0300 (Horário Padrão de Brasília)'),
      endDate: new Date('Wed May 13 2018 23:21:01 GMT-0300 (Horário Padrão de Brasília)')
    })
    await Evaluation.create({
      unitId: 1,
      type: 'contexto',
      status: 'Finalizada',
      contractor: 'Inpsun Dolor',
      partner: 'Sit Amet',
      startDate: new Date('Tue Oct 15 2017 00:00:00 GMT-0300 (Horário Padrão de Brasília)'),
      endDate: new Date('Wed May 16 2018 23:21:01 GMT-0300 (Horário Padrão de Brasília)'),
    })
    await Evaluation.create({
      unitId: 2,
      type: 'contexto',
      status: 'Finalizada',
      contractor: 'Inpsun Dolor',
      partner: 'Sit',
      startDate: new Date('Tue Oct 13 2017 00:00:00 GMT-0300 (Horário Padrão de Brasília)'),
      endDate: new Date('Wed May 16 2018 23:21:01 GMT-0300 (Horário Padrão de Brasília)'),
    })
  }
}

module.exports = EvaluationSeeder
