"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Shield, TrendingUp, Users, AlertTriangle, CheckCircle, XCircle, FileText } from "lucide-react"
import { useState } from "react"

// Define the structure for the API response
interface Dataset {
  count: number;
  name: string;
}

interface Summary {
  datasets: Dataset[];
  total_comments: number;
}

interface AnalysisResult {
  summary: Summary;
  hate_speech_examples: string[];
  non_hate_speech_examples: string[];
}

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0])
      setAnalysisResult(null) // Reset previous results when a new file is selected
      setError(null)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    setAnalysisResult(null)
    setError(null)

    const formData = new FormData()
    formData.append("file", selectedFile)

    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to analyze the file.")
      }

      const resultData: AnalysisResult = await response.json()
      setAnalysisResult(resultData)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Data for the summary pie chart, derived from the new analysis result structure
  const pieChartData = analysisResult
    ? analysisResult.summary.datasets.map((dataset) => ({
        name: dataset.name.replace(" Dataset", ""), // "Hate Speech Dataset" -> "Hate Speech"
        value: dataset.count,
      }))
    : []
  
  const COLORS = ["#ef4444", "#22c55e"]; // Red for Hate Speech, Green for Non-Hate Speech

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-semibold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


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
                    <p className="text-2xl font-bold text-gray-900">80%</p>
                    <p className="text-sm text-gray-600">Model Accuracy</p>
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

      {/* CSV Upload Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Analyze Comments from CSV</CardTitle>
              <CardDescription>Upload a CSV file with a 'comment' column to analyze its content.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="csv-file">Upload CSV File</Label>
                <Input
                  id="csv-file"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="file:text-blue-600 file:font-semibold"
                />
              </div>
              {selectedFile && (
                <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <p className="text-sm font-medium text-gray-800">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">({(selectedFile.size / 1024).toFixed(2)} KB)</p>
                  </div>
                </div>
              )}
              <Button onClick={handleAnalyze} disabled={!selectedFile || isAnalyzing} className="w-full">
                {isAnalyzing ? "Analyzing..." : "Analyze File"}
              </Button>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {analysisResult && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Analysis Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Pie Chart Summary */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Detection Summary</CardTitle>
                  <CardDescription>
                    {`Analysis of ${analysisResult.summary.total_comments} comments`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <ChartContainer config={{}} className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={100}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent nameKey="name" hideLabel />} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Examples Tables */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <XCircle className="h-6 w-6 text-red-500 mr-2" />
                      <CardTitle>Hate Speech Examples</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {analysisResult.hate_speech_examples.length > 0 ? (
                        analysisResult.hate_speech_examples.map((comment, index) => (
                          <li key={index} className="p-2 bg-red-50 rounded-md">"{comment}"</li>
                        ))
                      ) : (
                        <li className="p-2">No hate speech examples found.</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      <CardTitle>Non-Hate Speech Examples</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {analysisResult.non_hate_speech_examples.length > 0 ? (
                        analysisResult.non_hate_speech_examples.map((comment, index) => (
                          <li key={index} className="p-2 bg-green-50 rounded-md">"{comment}"</li>
                        ))
                      ) : (
                        <li className="p-2">No non-hate speech examples found.</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
