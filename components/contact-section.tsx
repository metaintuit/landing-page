"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setMessage("")

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        setMessage("Thank you! Your message has been sent successfully.")
        ;(event.target as HTMLFormElement).reset()
      } else {
        const errorData = await response.json()
        setStatus("error")
        setMessage(errorData.message || "An unexpected error occurred. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to send message. Please check your connection and try again.")
    }
  }

  const headerVariants = {
    offscreen: { opacity: 0, y: -30 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white dark:bg-gray-950">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or need to augment your team? Let's talk.
          </motion.p>
        </div>

        <motion.div
          variants={{ offscreen: { opacity: 0, y: 50 }, onscreen: { opacity: 1, y: 0 } }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">Send us a message for inquiries.</p>
                <a href="mailto:hr@metaintuit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  hr@metaintuit.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Our headquarters are based in Texas, USA.</p>
                <p className="text-indigo-600 dark:text-indigo-400">Texas, USA</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="space-y-2">
              <label htmlFor="name" className="font-semibold text-gray-700 dark:text-gray-200">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="bg-white dark:bg-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white dark:bg-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-200">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                required
                rows={5}
                className="bg-white dark:bg-gray-800"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            {status === "success" && (
              <div className="flex items-center text-green-600 dark:text-green-400">
                <CheckCircle className="mr-2 h-5 w-5" />
                <p>{message}</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center text-red-600 dark:text-red-400">
                <AlertCircle className="mr-2 h-5 w-5" />
                <p>{message}</p>
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
