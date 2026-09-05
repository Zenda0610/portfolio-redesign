"use client"

import { Github } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"
import { profile } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

/**
 * Uses the popular github-readme-stats service for live, zero-backend widgets.
 * Swap `profile.githubUser` in lib/data.ts for your username.
 * The `theme=transparent` variant blends with both light and dark modes.
 */
export function GithubStats() {
  const { dict, t } = useLanguage()
  const user = profile.githubUser

  return (
    <section className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <SectionHeading kicker={t(dict.sections.githubKicker)} title={t(dict.sections.githubTitle)} />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl border border-border bg-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=0d9488&icon_color=0d9488&text_color=808080`}
            alt={t({ es: `Estadísticas de GitHub de ${user}`, en: `${user}'s GitHub stats` })}
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </Reveal>

        <Reveal delay={100} className="overflow-hidden rounded-2xl border border-border bg-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=0d9488&text_color=808080`}
            alt={t({ es: "Lenguajes más usados", en: "Most used languages" })}
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </Reveal>

        <Reveal delay={150} className="overflow-hidden rounded-2xl border border-border bg-card p-4 lg:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&ring=0d9488&fire=0d9488&currStreakLabel=0d9488`}
            alt={t({ es: "Racha de contribuciones", en: "Contribution streak" })}
            loading="lazy"
            className="mx-auto w-full max-w-xl"
          />
        </Reveal>
      </div>

      <Reveal className="mt-8 flex justify-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-secondary"
        >
          <Github className="h-4 w-4" />
          {t({ es: "Ver perfil completo", en: "View full profile" })}
        </a>
      </Reveal>
    </section>
  )
}
