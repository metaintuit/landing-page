"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white"
        >
          Augment Your Team with Top IT Talent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          As your trusted implementation partner, we embed seasoned consultants directly into your existing software
          teams—scaling your capacity, expertise, and delivery velocity. Staffing is our core: whether you need a single
          specialist or an entire squad, met<span className="text-indigo-600 font-bold">ai</span>ntuit delivers the
          right engineers, the right way.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Explore Our Services
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
