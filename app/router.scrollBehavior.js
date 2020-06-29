export function scrollBehavior(to, from, savedPos) {
  const scrollTo = { x: 0, y: 0 }
  if (to.hash) {
    const strippedHash = to.hash.replace('#', '')
    const element = document.querySelector(
      `a[name="${strippedHash}"], a[id="${strippedHash}"]`
    )
    if (element) {
      scrollTo.y = element.getBoundingClientRect().top + window.pageYOffset
    }
  }

  return scrollTo
}
