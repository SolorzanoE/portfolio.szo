import { motion } from "framer-motion"

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
  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MotionFade
