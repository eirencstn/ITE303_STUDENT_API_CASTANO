# Student Management REST API

A RESTful backend API built with Node.js, Express, TypeScript, and Supabase PostgreSQL for ITE 303.

## Endpoints

| Method | Endpoint | Description | Expected Success Status |
|---|---|---|---|
| GET | `/students` | Retrieve all student records | `200 OK` |
| GET | `/students/:id` | Retrieve one student by ID | `200 OK` |
| POST | `/students` | Create a new student | `201 Created` |
| PUT | `/students/:id` | Replace all editable student fields | `200 OK` |
| DELETE | `/students/:id` | Delete a student | `200 OK` |

## Local setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy `.env.example` to `.env`, then set `DATABASE_URL` to your private Supabase Session pooler URI:

```bash
copy .env.example .env
```

3. Run in development mode:

```bash
pnpm dev
```

The server runs at `http://localhost:4000` by default.

4. Build and run for production:

```bash
pnpm build
pnpm start
```

For production platforms, set `PORT` and `DATABASE_URL` in the platform environment settings. Never commit `.env` or database credentials.
