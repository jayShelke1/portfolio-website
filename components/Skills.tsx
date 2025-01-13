import { Badge } from '@/components/ui/badge'

const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  // { name: 'Next.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  // { name: 'TypeScript', level: 'Intermediate' },
  // { name: 'GraphQL', level: 'Beginner' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Android Studio', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">{skill.name}</h3>
              <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">{skill.level}</Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

