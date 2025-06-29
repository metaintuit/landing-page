"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ProductsSection() {
  const headerVariants = {
    offscreen: { opacity: 0, y: -30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  }

  const contentVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
    },
  }

  const features = [
    "Consultant & Bench Sales Tracking",
    "Automated Hotlist Generation",
    "Streamlined Timesheet Processing",
    "Audit-Ready Compliance",
  ]

  return (
    <section id="products" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white"
          >
            Built for IT Staffing Teams in the U.S.
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We’ve developed a modern SaaS platform to streamline your operations and accelerate growth. It’s the single
            source of truth for your entire staffing lifecycle.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={contentVariants}>
            <Image
              src="/placeholder.svg?width=600&height=450"
              alt="SaaS Platform Dashboard"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div variants={contentVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Our platform helps you manage end-to-end workflows: track consultants, monitor bench sales submissions,
              generate hotlists, process timesheets, and stay audit-ready—so you can focus on what matters most:
              increasing placements.
            </p>
            <ul className="space-y-3 pt-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg mt-4"
              >
                Schedule a Demo
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
