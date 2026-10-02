const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const logoHref = `${baseURL.endsWith('/') ? baseURL : `${baseURL}/`}logo.png`

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'fr',
        class: 'scroll-smooth',
      },
      title: 'B.P.S.T.L. - Bénévoles Premiers Secours Team Luxembourg',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Bénévoles Premiers Secours Team Luxembourg (B.P.S.T.L. a.s.b.l.) — présence médicale et premier secours sur vos événements au Luxembourg.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: logoHref },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,620&family=Outfit:wght@360;470;560;700&display=swap',
        },
      ],
    },
  },
})
