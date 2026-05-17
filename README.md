# Portfolio — Lucas Oliveira da Silva

Personal portfolio built with **Node.js**, **Express**, and **EJS** following the **MVC** architectural pattern. Supports bilingual content (🇺🇸 English / 🇧🇷 Portuguese) and is deployed on Render.

🌐 **Live:** [https://portfolio-lucas-silva.onrender.com](https://portfolio-7m7k.onrender.com) 

---

## ✨ Features

- **MVC Architecture** — clean separation between Models, Views, and Controllers
- **Bilingual (i18n)** — routes `/` (PT) and `/en` (EN) with fully translated UI and content
- **Server-Side Rendering** — EJS templates rendered by Express
- **Static assets** — CSS, images, and JS served from the `public/` folder
- **Render deployment** — configured via `render.yaml` for one-click deploys
- **Node.js native watch** — development mode with `node --watch` (no nodemon needed)

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Runtime     | Node.js 22              |
| Framework   | Express 4               |
| Templating  | EJS 3                   |
| Architecture| MVC                     |
| Deployment  | Render (free tier)      |

---

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (CSS, JS, images)
├── src/
│   ├── app.js           # Entry point — Express setup, routes, server start
│   ├── controllers/
│   │   └── homeController.js  # Builds view models for EN and PT locales
│   ├── models/
│   │   ├── projectModel.js    # Project data and filtering helpers
│   │   └── profileModel.js    # Profile/about data
│   ├── routes/
│   │   └── homeRoutes.js      # Route definitions (/ and /en)
│   ├── views/
│   │   └── index.ejs          # Main EJS template
│   └── i18n/
│       ├── index.js           # i18n loader (getUi, getProfile, normalizeLocale)
│       ├── ui-en.js           # English UI strings
│       ├── ui-pt.js           # Portuguese UI strings
│       ├── profile-en.js      # English profile/about content
│       ├── profile-pt.js      # Portuguese profile/about content
│       └── projects-en.js     # Projects data (English)
├── render.yaml          # Render deployment config
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+** (v22 recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Lucassilva027/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Running locally

```bash
# Development (auto-restarts on file changes)
npm run dev

# Production
npm start
```

The server will start at **http://localhost:3000**.

> If port 3000 is in use, set a custom port:
> ```bash
> # PowerShell
> $env:PORT=3001; npm start
>
> # CMD
> set PORT=3001 && npm start
> ```

---

## 🌍 Routes

| Route | Language | Description        |
|-------|-----------|--------------------|
| `/`   | 🇧🇷 PT    | Portuguese version |
| `/en` | 🇺🇸 EN    | English version    |

---

## ☁️ Deployment (Render)

The repository includes a `render.yaml` for automatic deployment on [Render](https://render.com):

- **Runtime:** Node.js 22
- **Build command:** `npm install`
- **Start command:** `npm start`
- **Plan:** Free

Just connect your GitHub repo to Render and it deploys automatically.

---

## 👤 Author

**Lucas Oliveira da Silva**
- GitHub: [@Lucassilva027](https://github.com/Lucassilva027)
- LinkedIn: [lucas-oliveira-silva032](https://www.linkedin.com/in/lucas-oliveira-silva032/)
- WhatsApp: [+55 51 99910-5632](https://wa.me/5551999105632)
- Email: lucasoliveirasilva2008@gmail.com

---

## 📄 License

ISC
