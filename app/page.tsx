import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Education } from "@/components/education"
import { GithubStats } from "@/components/github-stats"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <GithubStats />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
