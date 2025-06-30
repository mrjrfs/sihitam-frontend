import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Zap, Users, Target, Award, Code, Database } from "lucide-react"

const technologies = [
  { name: "Python", category: "Backend" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "BERT", category: "NLP" },
  { name: "Transformers", category: "NLP" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
]

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "State-of-the-art transformer models fine-tuned specifically for hate speech detection across multiple languages and contexts.",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Lightning-fast processing that can analyze thousands of posts per second with minimal latency.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Built with privacy by design principles, ensuring user data is protected and never stored unnecessarily.",
  },
  {
    icon: Target,
    title: "High Accuracy",
    description: "Achieving 96.8% accuracy through continuous learning and model refinement based on real-world data.",
  },
  {
    icon: Users,
    title: "Multi-platform Support",
    description: "Seamless integration with major social media platforms and content management systems.",
  },
  {
    icon: Award,
    title: "Bias Mitigation",
    description: "Actively working to reduce algorithmic bias and ensure fair treatment across all demographic groups.",
  },
]

const milestones = [
  { year: "2022", event: "Project inception and initial research phase" },
  { year: "2022", event: "First prototype model with 85% accuracy" },
  { year: "2023", event: "Beta launch with select partners" },
  { year: "2023", event: "Achieved 95% accuracy milestone" },
  { year: "2024", event: "Public launch and 1M+ posts analyzed" },
  { year: "2024", event: "Current: 96.8% accuracy and expanding globally" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">HateSafe</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            HateSafe is an advanced AI-powered platform dedicated to detecting and preventing hate speech across digital
            platforms. Our mission is to create safer online communities through cutting-edge machine learning
            technology and responsible AI practices.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To leverage artificial intelligence and machine learning to identify, analyze, and prevent hate speech
                  in digital communications, fostering inclusive and respectful online environments where everyone can
                  participate safely and freely express themselves.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A world where digital platforms are safe spaces for meaningful dialogue, free from hate speech and
                  discrimination. We envision AI as a force for good, protecting vulnerable communities while preserving
                  freedom of expression and promoting healthy online discourse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Stack</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">Frontend</h3>
                  </div>
                  <div className="space-y-2">
                    {technologies
                      .filter((tech) => tech.category === "Frontend")
                      .map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold">Backend & Data</h3>
                  </div>
                  <div className="space-y-2">
                    {technologies
                      .filter((tech) => ["Backend", "Database", "Cache"].includes(tech.category))
                      .map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Brain className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold">AI & ML</h3>
                  </div>
                  <div className="space-y-2">
                    {technologies
                      .filter((tech) => ["AI/ML", "NLP"].includes(tech.category))
                      .map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold">Infrastructure</h3>
                  </div>
                  <div className="space-y-2">
                    {technologies
                      .filter((tech) => ["DevOps", "Cloud"].includes(tech.category))
                      .map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Project Timeline</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-20 text-right">
                      <Badge variant="outline" className="font-mono">
                        {milestone.year}
                      </Badge>
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                      {index < milestones.length - 1 && <div className="w-px h-6 bg-gray-300 ml-1.5 mt-2"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ethics & Responsibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ethics & Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  At HateSafe, we recognize the immense responsibility that comes with developing AI systems that can
                  impact online discourse and freedom of expression. Our commitment to ethical AI development includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Transparency:</strong> Open about our methodologies and limitations
                  </li>
                  <li>
                    <strong>Fairness:</strong> Continuous bias testing and mitigation across all demographics
                  </li>
                  <li>
                    <strong>Privacy:</strong> Minimal data collection with strong encryption and user control
                  </li>
                  <li>
                    <strong>Accountability:</strong> Human oversight and appeal processes for all decisions
                  </li>
                  <li>
                    <strong>Collaboration:</strong> Working with communities, researchers, and policymakers
                  </li>
                </ul>
                <p>
                  We believe that responsible AI development requires ongoing dialogue with stakeholders, continuous
                  improvement, and a commitment to serving the public good while respecting individual rights and
                  freedoms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
