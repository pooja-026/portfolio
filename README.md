# Pooja Nemade — Portfolio

An interactive portfolio for **Pooja Nemade**, a data and machine-learning engineer building thoughtful systems that make complex information useful and human-centered.

The site combines a polished, exploration-inspired interface with detailed project stories, research credentials, and an AI assistant grounded in Pooja's professional background.

## Highlights

- Immersive, cursor-responsive interface with animated typography and visual exploration cues
- Project case studies for **LookThePart**, **MockMate**, **Victor AI**, and a **Fraud Detection GNN**
- Project media, demos, journey maps, research papers, certificates, and technical artifacts
- Research and publication showcase, including conference and journal credentials
- Interactive skills constellation and terminal-style portfolio explorer
- Portfolio chatbot that can answer questions about Pooja's projects, education, skills, and experience
- Responsive layout for desktop and mobile

## Tech stack

- [Next.js](https://nextjs.org/) and React
- Tailwind CSS and custom CSS animations
- [Lucide](https://lucide.dev/) icons
- OpenAI Responses API, accessed through a server-side Next.js route
- Vercel for deployment

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file from the example:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Add your OpenAI API key to `.env.local`:

   ```env
   OPENAI_API_KEY=your_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content and media

Most portfolio copy and chatbot context is maintained in [`data/resume.js`](./data/resume.js). Update this file when changing project descriptions, experience, education, contact links, or chatbot knowledge.

Project-specific interactive experiences are in `components/`, including:

- `LookThePartExplorer.js`
- `MockMateExplorer.js`
- `VictorAIExplorer.js`
- `FraudGNNExplorer.js`

Images, videos, research papers, and certificates are stored in `public/`. Keep public-facing assets organized in their corresponding project folders.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new). Vercel detects Next.js automatically.
3. In **Project Settings → Environment Variables**, add `OPENAI_API_KEY` as a Secret for Production, Preview, and Development.
4. Deploy.
5. To connect a personal domain, open **Project Settings → Domains** and follow Vercel's DNS instructions.

Every push to the production branch can trigger a new Vercel deployment. Preview deployments are also created for pull requests when connected through GitHub.

## Security notes

- Never commit `.env.local` or an API key. The repository's `.gitignore` excludes local environment files.
- The OpenAI key is used only by `app/api/chat/route.js`, so it remains on the server and is not exposed to site visitors.

## Available scripts

```bash
npm run dev     # Start local development
npm run build   # Create a production build
npm run start   # Run the production build locally
npm run lint    # Run linting
```

---

Built and designed as a living portfolio: a place to explore Pooja's work, not just read a résumé.
