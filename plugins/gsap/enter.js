import { gsap } from "gsap"
import { mediaDecorator, serializeModifiers } from "./utils"

const map = new Map()

/**
 * @description
 * Важное условие: если используются keyframes,
 * необходимо добавить флаг reversed: true
 * и необходимо учитывать, что анимацию в таком случаи необходимо описывать справа на лево.
 */
const TWEENS = {
  'fade-top': {
    yPercent: -100,
    opacity: 0
  },
  'fade-bottom': {
    yPercent: 100,
    opacity: 0
  },
  'fade-left': {
    xPercent: -100,
    opacity: 0
  },
  'fade-right': {
    xPercent: 100,
    opacity: 0
  },
  'bounce': {
    reversed: true,
    keyframes: [
      { scale: 1, duration: 0.1 },
      { scale: 1.3, duration: 0.2 },
      { scale: 0, duration: 0.3 },
    ],
    scale: 0,
    opacity: 0,
  },
}

function createEnter(el, vars, scrub, once = false, delay = 0) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      pin: false,
      pinSpacing: false,
      markers: false,
      scrub: scrub ? 0.2 : false,
      toggleActions: once ? 'play none none none' : 'play reset play reset',
      start: 'top bottom-=10px',
      end: scrub ? '0px center' : '',
      trigger: el,
    },
  })

  const applyTweens = (params) => {
    if (typeof params === 'string') {
      timeline.from(el, { ...TWEENS[params], delay })
    } else {
      timeline.from(el, { ...params, delay })
    }
  }

  applyTweens(vars)

  map.set(el, timeline)
}

function removeEnter(el) {
  const tl = map.get(el)

  if (tl && tl.scrollTrigger) {
    tl.scrollTrigger.kill()
    tl.kill()
    map.delete(el)
  }
}

export const enterDirective = {
  inserted(el, { modifiers, arg, value }) {
    const { scrub, once, breakpoint } = serializeModifiers(modifiers)

    mediaDecorator(createEnter, breakpoint)(el, value, scrub, once, Number(arg))
  },
  unbind(el, { modifiers }) {
    const { breakpoint } = serializeModifiers(modifiers)

    mediaDecorator(removeEnter, breakpoint)(el)
  }
}
