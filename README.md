# Ujjwal Bhavishya Portal
### AI-Powered Citizen Portal for Government Scheme Discovery

> An intelligent web application that helps Indian citizens discover, understand, and apply for government welfare schemes through personalised recommendations and a multilingual AI chatbot.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Personalised Dashboard** | Central hub for profile management, application tracking, and scheme recommendations |
| **Intelligent Scheme Discovery** | Search & filter by category, state, income level, and more |
| **Instant Eligibility Checks** | One-click eligibility scoring against citizen profiles |
| **Streamlined Applications** | Apply with status tracking and real-time WebSocket notifications |
| **AI Chat Assistant** | Google Gemini-powered multilingual chatbot for scheme guidance |
| **Grievance Portal** | File, track, and resolve complaints linked to applications |
| **Multilingual Support** | Built-in translation across 10+ Indian languages |

---

## 🏗 Architecture

```
┌──────────────────────────────────────────────────┐
│                    Client (React)                 │
│  Vite · Tailwind CSS · shadcn/ui · React Query   │
└──────────────────┬───────────────────────────────┘
                   │  REST + WebSocket
┌──────────────────▼───────────────────────────────┐
│               Server (Express.js)                 │
│  JWT Auth · Rate Limiting · CORS · Zod Validation│
├───────────────────────────────────────────────────┤
│  Services                                         │
│  ├── Gemini AI (Chat + Translation)               │
│  ├── Scheme Eligibility Engine                    │
│  └── Recommendation Service                      │
└──────────────────┬───────────────────────────────┘
                   │  Drizzle ORM
┌──────────────────▼───────────────────────────────┐
│            PostgreSQL (NeonDB)                    │
│  Users · Profiles · Schemes · Applications       │
│  Recommendations · Chat · Grievances             │
└──────────────────────────────────────────────────┘
```

---

## 🛠 Technology Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Query |
| **Backend** | Node.js, Express.js, TypeScript, WebSocket (ws) |
| **Database** | PostgreSQL (NeonDB), Drizzle ORM |
| **AI / ML** | Google Gemini 1.5 Flash — chat, translation, recommendations |
| **Auth** | JWT tokens, bcrypt password hashing |
| **Validation** | Zod schemas (shared between client & server) |
| **Testing** | Vitest |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- A [NeonDB](https://neon.tech) PostgreSQL database
- A [Google AI Studio](https://aistudio.google.com/app/apikey) API key

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Sid-V5/UjjwalBhavishya.git
cd UjjwalBhavishya

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL, JWT_SECRET, and GEMINI_API_KEY

# 4. Push the database schema
npm run db:push

# 5. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
├── client/              # React frontend
│   └── src/
│       ├── components/  # UI components (shadcn/ui based)
│       ├── pages/       # Route pages
│       ├── hooks/       # Custom React hooks
│       └── lib/         # Utilities & API client
├── server/              # Express backend
│   ├── middleware/       # Auth & rate-limiting middleware
│   ├── services/        # Business logic (Gemini, schemes, recommendations)
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data access layer (IStorage interface)
│   └── index.ts         # Server entry point
├── shared/              # Code shared between client & server
│   ├── schema.ts        # Drizzle table definitions & Zod schemas
│   └── constants.ts     # Application-wide constants
└── drizzle.config.ts    # Database migration config
```

---

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/health` | ✗ | Health check |
| `POST` | `/api/auth/register` | ✗ | Register a new user |
| `POST` | `/api/auth/login` | ✗ | Login and receive JWT |
| `GET` | `/api/profile/:userId` | ✓ | Get citizen profile |
| `POST` | `/api/profile` | ✓ | Create citizen profile |
| `PUT` | `/api/profile/:userId` | ✓ | Update citizen profile |
| `GET` | `/api/schemes` | ✗ | List/search schemes |
| `GET` | `/api/schemes/:id` | ✗ | Get scheme details |
| `POST` | `/api/schemes/:id/check-eligibility` | ✓ | Check eligibility |
| `GET` | `/api/recommendations/:userId` | ✓ | Get recommendations |
| `GET` | `/api/applications/:userId` | ✓ | List applications |
| `POST` | `/api/applications` | ✓ | Submit application |
| `POST` | `/api/chat/message` | ✓ | Send chat message |
| `POST` | `/api/grievances` | ✓ | File a grievance |
| `POST` | `/api/translate` | ✗ | Translate text |

---

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
