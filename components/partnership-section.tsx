"use client"

import { motion } from "framer-motion"

export default function PartnershipSection() {
  const headerVariants = {
    offscreen: { opacity: 0, y: -30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
    },
  }

  const contentVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 },
    },
  }

  return (
    <section id="partnership" className="py-20 sm:py-32 bg-white dark:bg-gray-950">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center"
      >
        <motion.h2
          variants={headerVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-heading uppercase tracking-tighter text-gray-900 dark:text-white"
        >
          AI-Powered Teams. <br className="hidden md:block" />
          <span className="text-indigo-600">10× Faster</span> Delivery.
        </motion.h2>
        <motion.p
          variants={contentVariants}
          className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-semibold"
        >
          In an era where AI boosts developer output tenfold, coding is less about laying each brick and more about
          designing the structure. At met<span className="text-indigo-600 font-bold">ai</span>ntuit, our teams
          orchestrate pre-built modules into enterprise-grade solutions—so you focus on the blueprint, not the trowel.
        </motion.p>
      </motion.div>
    </section>
  )
}
