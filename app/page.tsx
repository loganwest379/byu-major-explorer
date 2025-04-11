import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { PulsingIcons } from "@/components/pulsing-icons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-white overflow-hidden">
        <PulsingIcons />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#002E5D] sm:text-5xl md:text-6xl hero-title">
            Find Your Perfect BYU Marriott Major
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">Explore, compare, and gain confidence in your future.</p>
          <div className="mt-10">
            <Button asChild className="bg-[#002E5D] hover:bg-[#00254a] text-white px-8 py-6 text-lg glow-button">
              <Link href="/explore">Explore Majors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-[#002E5D] mb-8 text-center">Why Choose BYU Marriott?</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Top-Ranked Programs</h3>
                <p className="text-gray-600">
                  BYU Marriott School of Business offers nationally recognized programs that prepare students for
                  successful careers.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Industry Connections</h3>
                <p className="text-gray-600">
                  Connect with top employers through networking events, internships, and career fairs exclusive to BYU
                  Marriott students.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Values-Based Education</h3>
                <p className="text-gray-600">
                  Receive an education that integrates faith and professional preparation, developing ethical business
                  leaders.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Career Path Explorer</h3>
                <p className="text-gray-600">
                  Visualize your potential career journey with our interactive tool that maps out possible paths from
                  college to career.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/career-paths">Explore Career Paths</Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  )
}
