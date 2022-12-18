export default ({ app, route, $axios }, inject) => {
  async function getDefaultFields() {
    return {
      phone: '',
      email: '',
      name: '',
      city: 'не заполнено',
      user_location_ip: await app.$ymaps.getUserLocationIp(),
      timezone: (-1 * new Date().getTimezoneOffset()) / 60,
      utm_medium: route.query.utm_medium || '-',
      utm_placement: route.query.utm_placement || '-',
      utm_source: route.query.utm_source || '-',
      utm_term: route.query.utm_term || '-',
      utm_content: route.query.utm_content || '-',
      utm_campaign: route.query.utm_campaign || '-',
      utm_campaign_name: route.query.utm_campaign_name || '-',
      device_type: route.query.device_type || '-',
      utm_region_name: route.query.utm_region_name || '-',
      utm_description: route.query.utm_description || '-',
      page_url: window.location.href,
      yclid: route.query.yclid || '-',
    }
  }

  function createFormData(data) {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    return formData
  }

  async function submit(fields) {
    const defaultFields = await getDefaultFields()
    const data = { ...defaultFields, ...fields }

    if (fields.name) {
      localStorage.setItem('lead_name', fields.name)
    }

    if (fields.city) {
      localStorage.setItem('city', fields.city)
    }

    await $axios.post('php/formProcessor.php', createFormData(data), {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })

    app.router.push({ name: 'thanks' })
  }

  inject('feedback', {
    submit,
  })
}
