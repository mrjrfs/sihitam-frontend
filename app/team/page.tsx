import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead AI Researcher",
    bio: "PhD in Machine Learning from Stanford. 8+ years experience in NLP and hate speech detection algorithms.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Machine Learning", "NLP", "Python", "TensorFlow"],
    location: "San Francisco, CA",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "sarah@hatesafe.com",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Developer",
    bio: "Senior developer with expertise in React, Node.js, and cloud architecture. Passionate about building scalable web applications.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    location: "New York, NY",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "marcus@hatesafe.com",
    },
  },
  {
    name: "Dr. Aisha Patel",
    role: "Data Scientist",
    bio: "Specializes in social media data analysis and bias detection in AI systems. Former researcher at Google AI.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Data Science", "Python", "R", "Statistical Analysis"],
    location: "Seattle, WA",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aisha@hatesafe.com",
    },
  },
  {
    name: "James Rodriguez",
    role: "DevOps Engineer",
    bio: "Infrastructure and deployment specialist ensuring our systems run smoothly at scale. Kubernetes and cloud expert.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["DevOps", "Kubernetes", "Docker", "CI/CD"],
    location: "Austin, TX",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "james@hatesafe.com",
    },
  },
  {
    name: "Emily Zhang",
    role: "UX/UI Designer",
    bio: "Creates intuitive and accessible user experiences. Focuses on making complex AI tools user-friendly for everyone.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["UI/UX Design", "Figma", "User Research", "Accessibility"],
    location: "Los Angeles, CA",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "emily@hatesafe.com",
    },
  },
  {
    name: "Dr. Michael Kim",
    role: "Ethics & Policy Advisor",
    bio: "PhD in Digital Ethics. Ensures our AI systems are fair, transparent, and respect user privacy and rights.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["AI Ethics", "Policy", "Research", "Privacy"],
    location: "Boston, MA",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "michael@hatesafe.com",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of researchers, engineers, and designers work together to create cutting-edge AI solutions
            for hate speech detection and online safety.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <Link href={member.social.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our passion for creating safer online
                communities through AI innovation.
              </p>
              <Link
                href="mailto:careers@hatesafe.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
