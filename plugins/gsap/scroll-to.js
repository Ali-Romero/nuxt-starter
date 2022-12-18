import { gsap } from "gsap";
import { mediaDecorator, serializeModifiers } from "./utils";

function scrollTo({ to, offset = process.env.headerHeight, onComplete }) {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: {
      y: to,
      offsetY: offset,
    },
    onComplete,
  });
}

export const scrolltoDirective = {
  inserted(el, { modifiers, value = {} }) {
    const { breakpoint } = serializeModifiers(modifiers)

    el.addEventListener('click', function() {
      mediaDecorator(scrollTo, breakpoint)(value)
    })
  }
}
