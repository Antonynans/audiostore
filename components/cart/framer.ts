export const framer_background = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

export const framer_cart = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
}

export const framer_item = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
  layout: true,
}

export const framer_count = {
  initial: { opacity: 0, y: '-80%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '80%' },
  transition: { duration: 0.3 },
}

export const framer_menu = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  exit: { y: '-100%' },
  transition: { duration: 0.5 },
}

export const framer_money = {
  initial: { opacity: 0, x: '10%' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-10%' },
  transition: { duration: 0.2 },
}
