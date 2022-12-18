import { gsap } from 'gsap'
import { eventBus, mediaDecorator, serializeModifiers } from './utils'
import { timelines } from './state'

function createTimeline(id, el, values) {
  const timeline = gsap.timeline({
    id,
    scrollTrigger: {
      anticipatePin: true,
      invalidateOnRefresh: false,
      markers: process.env.NODE_ENV === 'development',
      trigger: el,
      ...values,
    },
  })

  if (id) {
    timelines[id] = timeline
    eventBus.$emit(`timeline-created:${id}`, timeline)
  }
}

function removeTimeline(id) {
  const tl = timelines[id]

  if (tl) {
    if (tl.scrollTrigger) {
      tl.scrollTrigger.kill()
    }

    tl.kill()

    delete timelines[id]
  }

  eventBus.$emit(`timeline-removed:${id}`)
}

export const timelineDirective = {
  inserted(el, { modifiers = {}, arg, value = {} }) {
    const { breakpoint } = serializeModifiers(modifiers)

    const params = typeof value === 'function' ? value(el) : value

    mediaDecorator(createTimeline, breakpoint)(arg, el, params)
  },
  unbind(el, { modifiers, arg }) {
    const { breakpoint } = serializeModifiers(modifiers)

    mediaDecorator(removeTimeline, breakpoint)(arg)
  },
}
