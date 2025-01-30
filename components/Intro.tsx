import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, FileText } from 'lucide-react'

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Hi, I&apos;m Jay Shelke
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          A passionate web developer specializing in creating beautiful and functional websites.
        </p>
        <div className="flex space-x-4">
          <Button 
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" 
          
            
          >
          <a className='flex space-x-2' href="/Resume.pdf" download>
          <FileText size={20} />
              <span>Download Resume</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/logo.jpg?height=300&width=300"
          alt="Coder"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-purple-400 dark:border-purple-600"
        />
      </div>
    </section>
  )
}

