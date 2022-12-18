import Vue from 'vue'
import { gsap } from 'gsap'

const mm = gsap.matchMedia()

export const eventBus = new Vue()

export function serializeModifiers(modifiers) {
  const breakpointKeys = Object.keys(process.env.breakpoints)
  const isBreakpoint = (value) => breakpointKeys.includes(value.split('-')[0])

  const entries = Object.entries(modifiers).reduce((acc, [key, value]) => {
    if (isBreakpoint(key)) {
      return [...acc, ['breakpoint', key]]
    } else {
      return [...acc, [key, value]]
    }
  }, [])

  return Object.fromEntries(entries)
}

export function createMediaQuery(breakpoint) {
  const [min, max] = breakpoint.split('-')
  const minValue = Number.isInteger(+min) ? min : process.env.breakpoints[min]
  const maxValue = Number.isInteger(+max) ? max : process.env.breakpoints[max]
  const minQuery = minValue ? `(min-width: ${minValue}px)` : ''
  const maxQuery = maxValue ? `(max-width: ${maxValue - 1}px)` : ''

  return [minQuery, maxQuery].filter((v) => v).join(' and ')
}

export function mediaDecorator(fn, breakpoint) {
  return function(...args) {
    if (breakpoint) {
      mm.add(createMediaQuery(breakpoint), () => fn(...args))
    } else {
      fn(...args)
    }
  }
}

export function throttleDecorator(fn) {
  let timer = 0;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), 100);
  }
}
