import Vue from 'vue'
import YmapPlugin, { loadYmap } from 'vue-yandex-maps'

const settings = {
  apiKey: 'c3472711-0044-40b4-92fe-e8200d2156a0',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

Vue.use(YmapPlugin, settings)

export default async (ctx, inject) => {
  await loadYmap(settings)

  inject('ymaps', {
    async getGeoObjects() {
      const result = await window.ymaps.geolocation.get({
        provider: 'yandex',
        autoReverseGeocode: true,
      })

      return result.geoObjects
    },
    async getCountry() {
      const geoObjects = await this.getGeoObjects()

      return geoObjects.get(0).properties.get('text')
    },
    async getUserLocationIp() {
      const geoObjects = await this.getGeoObjects()
      const translates = {
        country: 'Страна',
        province: 'Округ',
        area: 'Подокруг',
        locality: 'Город',
      }
      const properties = geoObjects.get(0).properties
      const components = properties.get('metaDataProperty').GeocoderMetaData
        .Address.Components
      const mappedArray = components.map((item) => {
        return translates[item.kind] + ': ' + item.name
      })

      return mappedArray.join(', ')
    },
  })
}
