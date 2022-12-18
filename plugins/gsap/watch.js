import { timelines } from "./state"
import { eventBus, mediaDecorator, serializeModifiers, throttleDecorator } from "./utils"

function createWatch(el, timelineId) {
  const observer = new ResizeObserver(throttleDecorator(() => {
    const tl = timelines[timelineId]

    if (tl && tl.scrollTrigger) {
      tl.scrollTrigger.refresh()
    }
  }))

  observer.observe(el)

  eventBus.$on(`timeline-removed:${timelineId}`, () => observer.unobserve(el))
}

export const watchDirective = {
  inserted(el, { arg, modifiers }) {
    const { breakpoint } = serializeModifiers(modifiers)

    mediaDecorator(createWatch, breakpoint)(el, arg)
  }
}
