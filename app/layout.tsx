import type { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru" className="bg-[#0b0e14] text-[#f1f3f7]">
      <head>
        <meta charSet="utf-8" />
        <title>Безпозитные бонусы казино за регистрацию 2026 – лучшие бездепы и фриспины</title>
        <meta
          name="description"
          content="Эксклюзивные бездепозитные бонусы казино за регистрацию без первого депозита. Актуальные бездепы, промокоды на бездеп бонус, фриспины и моментальный вывод выигрышей в 2026 году."
        />
        <meta name="keywords" content="бездепозитные бонусы, бездепозитный бонус, бездепозитный бонус за регистрацию, бездепозитные бонусы за регистрацию, бездеп, бездепы, бездеп бонусы, бездеп бонус, бездепы за регистрацию, бездеп за регистрацию, бездепозитный бонус казино, бездепы в казино, бездепы казино, бонус казино, бонусы в казино" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bezdepcasino10.vercel.app/" />
        <meta name="theme-color" content="#0b0e14" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Бездепозитные бонусы казино за регистрацию 2026 – лучшие бездепы" />
        <meta
          property="og:description"
          content="Свежие бездепы и бездепозитные бонусы за регистрацию в проверенных онлайн казино. Забирайте бездеп бонус прямо сейчас с выводом средств."
        />
        <meta property="og:url" content="https://bezdepcasino10.vercel.app/" />
        <meta property="og:site_name" content="BezdepCasino" />
        <meta property="og:image" content="https://bezdepcasino10.vercel.app/images/panda-hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Бездепозитные бонусы казино за регистрацию 2026 – лучшие бездепы" />
        <meta
          name="twitter:description"
          content="Эксклюзивный бездепозитный бонус казино за простую регистрацию. Забирайте бонусы в казино и фриспины без пополнения."
        />
        <meta name="twitter:image" content="https://bezdepcasino10.vercel.app/images/panda-hero.png" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased bg-[#0b0e14] text-[#f1f3f7] min-h-screen selection:bg-[#fb923c] selection:text-black font-sans">
        {children}
      </body>
    </html>
  )
}
