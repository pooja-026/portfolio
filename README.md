# Pooja Nemade - Portfolio

An editorial, interactive portfolio for a data and ML engineer. It includes selected work, qualifications, a photo-gallery layout, and a portfolio chatbot grounded in the resume data in `data/resume.js`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000. Put your Anthropic API key in `.env.local` as `ANTHROPIC_API_KEY=sk-ant-...`. Never commit that file.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at [Vercel](https://vercel.com/new); it detects Next.js automatically.
3. In Project Settings -> Environment Variables, add `ANTHROPIC_API_KEY` for Production, Preview, and Development.
4. Deploy. The chat calls the server-side `/api/chat` route, keeping the API key out of the browser.
5. To use your name as the address, add a custom domain in Project Settings -> Domains and follow the DNS records Vercel supplies.

## Editing your content

All resume/project text lives in `data/resume.js`; updating it keeps the page and chatbot knowledge in sync.

The visual gallery intentionally uses stylized placeholders instead of invented personal photos. Before publishing, replace the three `.photo-*` cards in `app/page.js` with your own images. Also update the example email address and the LinkedIn/GitHub links in that same file.

## Before sharing widely

The chat route has no rate limiting. To control API costs, consider adding an IP rate limit with Upstash Redis or Vercel, lowering `max_tokens`, and enabling Vercel's web application firewall.
