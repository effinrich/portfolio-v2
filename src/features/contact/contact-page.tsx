import { useState } from 'react'
import { CheckCircle, Mail, MapPin } from 'lucide-react'
import { PortfolioLayout } from '#/features/layout/portfolio-layout'
import { GlassPanel } from '#/features/ui/glass-panel'
import { SectionHeader } from '#/features/ui/section-header'
import { submitContactForm } from '#/features/content/queries'

const PROJECT_TYPES = [
  'Design System',
  'Nx Monorepo',
  'MCP / AI Tooling',
  'Frontend Platform',
  'Advisory',
  'Other',
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const form = new FormData(event.currentTarget)
    try {
      await submitContactForm({
        name: String(form.get('name') ?? ''),
        email: String(form.get('email') ?? ''),
        company: String(form.get('company') ?? '') || undefined,
        projectType: String(form.get('projectType') ?? ''),
        message: String(form.get('message') ?? ''),
      })
      setSubmitted(true)
      event.currentTarget.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PortfolioLayout activeItem="contact">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build <span className="neon-text">something</span>
            </>
          }
          description="Available for senior contract engagements, design system builds, and AI-native tooling projects."
        />

        {submitted ? (
          <div className="success-banner mb-8 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-sm text-green-300">
              Message sent! I&apos;ll get back to you within 48 hours.
            </p>
          </div>
        ) : null}

        <div className="grid gap-12 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
            <div className="form-field grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/40">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="glass-input w-full rounded-xl px-4 py-3 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/40">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="glass-input w-full rounded-xl px-4 py-3 text-white"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="company" className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/40">
                Company
              </label>
              <input
                id="company"
                name="company"
                className="glass-input w-full rounded-xl px-4 py-3 text-white"
                placeholder="Optional"
              />
            </div>

            <div className="form-field">
              <label htmlFor="projectType" className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/40">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="glass-input w-full rounded-xl px-4 py-3 text-white"
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/40">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="glass-input w-full resize-none rounded-xl px-4 py-3 text-white"
                placeholder="Tell me about your project..."
              />
            </div>

            {error ? <p className="text-sm text-red-400">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gold px-6 py-3 font-semibold text-black transition-all hover:bg-[#ffe54c] disabled:opacity-50 sm:w-auto"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>

          <div className="contact-info-card space-y-6 lg:col-span-2">
            <GlassPanel className="rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <h3 className="font-bold text-white">Email</h3>
              </div>
              <a href="mailto:hello@richtillman.dev" className="text-white/60 transition-colors hover:text-gold">
                hello@richtillman.dev
              </a>
            </GlassPanel>

            <GlassPanel className="rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan" />
                <h3 className="font-bold text-white">Location</h3>
              </div>
              <p className="text-white/60">Remote · US Eastern Time</p>
            </GlassPanel>

            <GlassPanel className="rounded-2xl p-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="text-sm font-medium text-gold">Available for new projects</span>
              </div>
              <p className="text-sm text-white/40">
                Typical engagement: 3-6 month contracts for design systems, monorepo architecture, or MCP tooling.
              </p>
            </GlassPanel>
          </div>
        </div>
      </main>
    </PortfolioLayout>
  )
}
