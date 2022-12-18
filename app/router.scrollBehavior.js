const TRANSITION_DELAY = 300

export default function (to, from) {
  return new Promise((resolve) => {
    const delay = to.name !== from.name ? TRANSITION_DELAY : 100

    if (to.hash) {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          offset: {
            y: process.env.headerHeight,
          },
          behavior: 'smooth',
        })
      }, delay)
    } else {
      resolve({ x: 0, y: 0 })
    }
  })
}
