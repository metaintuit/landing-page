"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Briefcase, Code, Globe } from "lucide-react"

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-indigo-600" />,
    title: "IT Staffing",
    description:
      "Access our curated network of elite IT professionals to fill critical roles, from single-developer needs to full-scale team augmentation.",
  },
  {
    icon: <Code className="h-10 w-10 text-indigo-600" />,
    title: "Software Development",
    description:
      "Leverage our AI-driven development process to build robust, scalable, and enterprise-ready software solutions at unprecedented speed.",
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-600" />,
    title: "Outsourcing",
    description:
      "Delegate your software development projects to our expert teams and benefit from streamlined workflows, cost efficiency, and faster time-to-market.",
  },
]

export default function ServicesSection() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
  }

  const headerVariants = {
    offscreen: { opacity: 0, y: -30 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  return (
    <section id="services" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Delivering excellence through specialized IT solutions.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -10, scale: 1.02 }} className="h-full">
                <Card className="h-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    {service.icon}
                    <CardTitle className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
