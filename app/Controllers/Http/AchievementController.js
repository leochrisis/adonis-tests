'use strict'

const Achievement = use('App/Models/Achievement')

class AchievementController {
  async index () {
    return await Achievement
      .query()
      .with('units')
      .fetch()
  }

  async store ({ request, response }) {
    const {name, cnpj, phone, adress} = request.post()

    const achievement = await Achievement.create({name, cnpj, phone, adress})

    return achievement
  }

  async show ({ request }) {
    return await Achievement
      .query()
      .where('id', request.params.id)
      .with('units')
      .fetch()
  }

  async update ({ params, request, response }) {
    const achievement = await Achievement.findOrFail(params.id)

    const data = request.only(['name', 'cnpj', 'phone', 'adress'])

    achievement.merge(data)
    await achievement.save()
    return achievement
  }

  async destroy ({ params }) {
    const achievement = await Achievement.findOrFail(params.id)

    await achievement.delete()
  }
}

module.exports = AchievementController
