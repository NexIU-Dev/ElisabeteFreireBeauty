# Elisabete Freire Beauty — landing page

Landing page estática em Astro para o studio Elisabete Freire Beauty, em São José dos Campos. Cílios, maquiagem e sobrancelhas recebem o mesmo destaque; os agendamentos abrem o WhatsApp com mensagem que identifica o site como origem.

## Rodar localmente

```bash
npm install
npm run dev
```

Para verificar e gerar a versão estática:

```bash
npm run check
npm run build
npm run preview
```

O conteúdo comercial e os links ficam em `src/data/site.ts`. O visual está em `src/styles/global.css`. As fontes e os limites de uso das imagens estão em `ASSET_SOURCES.md`, e as decisões aprovadas estão em `PLANO_IMPLEMENTACAO.md`.

## Publicação

O site é publicado no [GitHub Pages da NexIU-Dev](https://nexiu-dev.github.io/ElisabeteFreireBeauty/) a cada push em `main`, pelo workflow em `.github/workflows/deploy.yml`. O caminho do repositório está configurado em `astro.config.mjs`; os arquivos públicos usam `import.meta.env.BASE_URL`.
