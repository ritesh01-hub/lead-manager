# Lead Manager — MERN Stack Application

A full-stack Lead Management System built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a simple and intuitive interface to manage leads, track their progress, and organize potential customers.

## Overview

Lead Manager is a responsive web application designed to help users manage their leads efficiently. Users can create, view, update, delete, search, and filter leads while monitoring their status through a centralized dashboard.

## Features

- **Dashboard:** View total leads and status-wise lead statistics.
- **Lead Management:** Create, view, edit, and delete leads.
- **Status Tracking:** Track leads through New, Contacted, Qualified, and Lost statuses.
- **Search:** Find leads by name.
- **Filtering:** Filter leads by their current status.
- **Form Validation:** Client-side and server-side validation for lead information.
- **Confirmation:** Confirmation before deleting a lead.
- **Database Integration:** Store lead information in MongoDB Atlas.
- **Responsive UI:** Clean interface built with React and Tailwind CSS.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Tailwind CSS | Styling and responsive UI |
| React Router DOM | Client-side navigation |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| Axios | HTTP requests |
| Vite | Frontend development and build tool |

## Project Structure

```text
lead-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── leadController.js
│   ├── models/
│   │   └── Lead.js
│   ├── routes/
│   │   └── leadRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ritesh01-hub/lead-manager.git
cd lead-manager
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory using the example configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB connection string.

Start the backend server:

```bash
npm run dev
```

The backend runs at:

`http://localhost:5000`

### 3. Set Up the Frontend

Open another terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

## API Documentation

Base URL:

`http://localhost:5000/api/leads`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/leads` | Retrieve all leads |
| POST | `/api/leads` | Create a new lead |
| PUT | `/api/leads/:id` | Update an existing lead |
| DELETE | `/api/leads/:id` | Delete a lead |

### Lead Data Structure

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "company": "Example Technologies",
  "source": "LinkedIn",
  "status": "New"
}
```

**Available lead sources:**
- Website
- Referral
- LinkedIn
- Cold Call
- Advertisement
- Other

**Available lead statuses:**
- New
- Contacted
- Qualified
- Lost

## Environment Variables

The backend requires the following environment variables:

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |

Keep your actual `.env` file private. Never commit database credentials or other secrets to GitHub.

## Future Improvements

- User authentication and authorization.
- Pagination and sorting for lead records.
- Advanced search and filtering.
- Lead activity history and follow-up reminders.
- Deployment with a live demo.
- Automated API testing.

## 📸 Project Screenshot

![Lead Manager Application]

## Author

**Ritesh Tiwari**

- GitHub: [@ritesh01-hub](https://github.com/ritesh01-hub)
- Project Repository: [Lead Manager](https://github.com/ritesh01-hub/lead-manager)

---

*Built as a Full Stack Developer screening assignment to demonstrate practical MERN stack development, REST API integration, CRUD operations, and database management.*
