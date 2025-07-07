"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Shield, TrendingUp, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { useState } from "react"

// Mock data for charts
const monthlyData = [
  { month: "Jan", detected: 245, total: 1200 },
  { month: "Feb", detected: 189, total: 1100 },
  { month: "Mar", detected: 312, total: 1400 },
  { month: "Apr", detected: 278, total: 1300 },
  { month: "May", detected: 195, total: 1150 },
  { month: "Jun", detected: 234, total: 1250 },
]

const categoryData = [
  { name: "Racial", value: 35, color: "#ef4444" },
  { name: "Gender", value: 25, color: "#f97316" },
  { name: "Religious", value: 20, color: "#eab308" },
  { name: "LGBTQ+", value: 15, color: "#22c55e" },
  { name: "Other", value: 5, color: "#6366f1" },
]

const accuracyData = [
  { week: "W1", accuracy: 94.2 },
  { week: "W2", accuracy: 95.1 },
  { week: "W3", accuracy: 94.8 },
  { week: "W4", accuracy: 96.3 },
  { week: "W5", accuracy: 95.7 },
  { week: "W6", accuracy: 96.8 },
]

export default function HomePage() {
  const [twitterInput, setTwitterInput] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{ isHateSpeech: boolean; confidence: number; category?: string } | null>(null)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock result
    const mockResult = {
      isHateSpeech: Math.random() > 0.7,
      confidence: Math.round((Math.random() * 30 + 70) * 100) / 100,
      category: ["Racial", "Gender", "Religious", "LGBTQ+"][Math.floor(Math.random() * 4)],
    }

    setResult(mockResult)
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered <span className="text-blue-600">Hate Speech</span> Detection
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="font-bold">S.I.H.I.T.A.M</span> (Sistem Identifikasi Hate Speech dan Teks Agresif Multimedia). Advanced machine learning algorithms to identify and analyze hate speech in social media content, helping
            create safer online communities.
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">96.8%</p>
                    <p className="text-sm text-gray-600">Accuracy Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1.2M+</p>
                    <p className="text-sm text-gray-600">Posts Analyzed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50K+</p>
                    <p className="text-sm text-gray-600">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2.1K</p>
                    <p className="text-sm text-gray-600">Hate Speech Detected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Analyze Twitter Content</CardTitle>
              <CardDescription>Enter a Twitter comment ID or link to analyze for hate speech</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="twitter-input">Twitter Comment ID or Link</Label>
                <Input
                  id="twitter-input"
                  placeholder="https://twitter.com/user/status/123456789 or comment ID"
                  value={twitterInput}
                  onChange={(e) => setTwitterInput(e.target.value)}
                />
              </div>
              <Button onClick={handleAnalyze} disabled={!twitterInput || isAnalyzing} className="w-full">
                {isAnalyzing ? "Analyzing..." : "Analyze Content"}
              </Button>

              {result && (
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      {result.isHateSpeech ? (
                        <XCircle className="h-6 w-6 text-red-500" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                      <div>
                        <p className="font-semibold">
                          {result.isHateSpeech ? "Hate Speech Detected" : "No Hate Speech Detected"}
                        </p>
                        <p className="text-sm text-gray-600">
                          Confidence: {result.confidence}%
                          {result.isHateSpeech && result.category && ` | Category: ${result.category}`}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Detection Analytics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Detection Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Detection Trends</CardTitle>
                <CardDescription>Hate speech detection over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    detected: {
                      label: "Detected",
                      color: "hsl(var(--chart-1))",
                    },
                    total: {
                      label: "Total",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="detected" fill="var(--color-detected)" name="Hate Speech Detected" />
                      <Bar dataKey="total" fill="var(--color-total)" name="Total Posts" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Hate Speech Categories</CardTitle>
                <CardDescription>Distribution by category type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Percentage",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Accuracy Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Model Accuracy Trend</CardTitle>
              <CardDescription>Weekly accuracy performance of our AI model</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  accuracy: {
                    label: "Accuracy %",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={accuracyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[90, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="var(--color-accuracy)"
                      strokeWidth={3}
                      dot={{ fill: "var(--color-accuracy)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
