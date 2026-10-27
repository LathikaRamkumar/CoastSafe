# CoastSafe — Interactive Beach Tourism & Safety Information Portal

A complete MERN-stack academic project for discovering beaches, viewing tourism/safety information, creating accounts, and reporting beach incidents.

## Technology
- Frontend: React + Vite + React Router + Axios + Lucide Icons
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcrypt
- Security: Helmet, CORS, rate limiting

## Features
1. Responsive tourism landing page
2. Beach directory with search
3. Detailed beach pages with facilities, activities, best time and safety level
4. Safety centre with practical guidance
5. User registration/login
6. Authenticated incident reporting
7. My Reports history
8. Admin dashboard for reviewing and resolving reports
9. REST API architecture
10. MongoDB seed script with four Tamil Nadu destinations

## Run locally
### 1. Start MongoDB
Install MongoDB locally or use MongoDB Atlas.

### 2. Backend
```bash
cd backend
copy .env.example .env   # Windows
# cp .env.example .env  # macOS/Linux
npm install
npm run seed
npm run dev
```
Backend: http://localhost:5000

### 3. Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend: http://localhost:5173

If your backend runs elsewhere, create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## Demo admin
- Email: `admin@beachportal.local`
- Password: `Admin@123`

Change the password and JWT secret before any real deployment.

## API endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/beaches`
- `GET /api/beaches/:id`
- `POST /api/beaches` (admin)
- `PUT /api/beaches/:id` (admin)
- `DELETE /api/beaches/:id` (admin)
- `POST /api/reports` (login required)
- `GET /api/reports/mine` (login required)
- `GET /api/reports` (admin)
- `PATCH /api/reports/:id` (admin)
- `GET /api/health`

## Project structure
```text
beach-tourism-portal/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/beaches/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── services/
├── docker-compose.yml
└── README.md
```

## Academic project modules
- Tourism Discovery Module
- Beach Information Module
- Safety Information Module
- User Authentication Module
- Incident Reporting Module
- Admin Monitoring Module
- Database Management Module

## Future enhancements
Live weather/UV/tide APIs, Google Maps integration, multilingual support, emergency SOS workflow, image uploads, reviews, notifications, and an analytics dashboard.
