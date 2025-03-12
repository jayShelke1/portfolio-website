import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'Expense Tracker App', 
    description: 'A simple Android application to track daily expenses using Java and SQLite. Designed an intuitive user interface with Android Studio and implemented features for adding, updating, and deleting expenseentries.',
    technologies: ['React.js', 'Redux', 'MongoDb'],
    image: '/ex.jpeg?height=200&width=300&text=Project%201',
    github: 'https://github.com/jayShelke1'
  },
  { 
    id: 2, 
    title: 'Memory Mind Game', 
    description: 'A simple game based on memory. Player need to remember the card before the game start and match them properly in the given time.',
    technologies: ['React.js', 'Next.js'],
    image: '/Memorymindgame.png',
    github: 'https://github.com/jayShelke1'
  },
  // { 
  //   id: 3, 
  //   title: 'Project 3', 
  //   description: 'A brief description of Project 3',
  //   technologies: ['Next.js', 'GraphQL', 'Tailwind CSS'],
  //   image: '/placeholder.svg?height=200&width=400&text=Project%203',
  //   github: 'https://github.com/yourusername/project3'
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400">{project.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col items-start">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">{tech}</Badge>
                ))}
              </div>
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-black dark:border-red-300"
                // as="a"
                // href={project.github}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <a className='flex space-x-2' href={project.github}   target="_blank"
                rel="noopener noreferrer">
                <Github className='text-black dark:text-red-300' size={20} />
                <span className='text-black dark:text-red-300'>View on GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

