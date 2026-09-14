import { motion as Motion, useReducedMotion } from "framer-motion"

export const MotionFade = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  scale = 1,
  className,
  style,
  viewportMargin = "-50px",
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y, scale }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Motion.div>
  )
}

export default MotionFade
