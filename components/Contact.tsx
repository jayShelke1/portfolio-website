'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simulating form submission
    console.log('Form submitted:', { name, email, message })

    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')

    // You can add your own logic here to handle form submission
    alert('Message sent successfully!')
  }

  return (
    <form
      className="grid gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows={4}
          required
          className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600 rounded-xl">Send</Button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        Contact Me
      </h2>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-4 mb-4">
          <a
            href="https://github.com/jayShelke1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 dark:hover:text-gray-300 transition-colors dark:text-black"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://in.linkedin.com/in/jay-shelke-268282317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors dark:text-black dark:hover:text-gray-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

