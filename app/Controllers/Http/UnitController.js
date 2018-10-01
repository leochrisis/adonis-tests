'use strict'

const Unit = use('App/Models/Unit')

class UnitController {
  async index () {
    return await Unit
      .query()
      .with('evaluations')
      .fetch()
  }

  async store ({ request, response }) {
    const {achievementId, name, description, phone, people_number} = request.post()

    const unit = await Unit.create({achievementId, name, description, phone, people_number})

    return unit
  }

  async show ({ params, response }) {
    const unit = await Unit.findOrFail(params.id)

    if (!unit) {
      return response.status(404).json({ message: 'User not found!' })
    }

    const evaluations = await unit.evaluations().fetch()

    unit.evaluations = evaluations

    return unit
  }

  async update ({ params, request, response }) {
    const unit = await Unit.findOrFail(request.params.id)
    const data = request.only(['name', 'description', 'phone', 'people_number'])
    unit.merge(data)
    await unit.save()
    return unit
  }

  async destroy ({ params }) {
    const unit = await Unit.findOrFail(params.id)
    await unit.delete()
  }
}

module.exports = UnitController
