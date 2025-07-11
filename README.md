# Express + Mongoose Boilerplate

A minimal and modular boilerplate for building RESTful APIs using **Express.js**, **Mongoose**, and **Node.js**. Perfect for kickstarting your backend applications with MongoDB and a scalable folder structure.

---

## 🚀 Features

- ✅ Express.js based REST API
- ✅ MongoDB & Mongoose integration
- ✅ Environment variables with `dotenv`
- ✅ Modular folder structure (MVC pattern)
- ✅ Error handling middleware
- ✅ Centralized response formatting
- ✅ Custom HTTP status codes
- ✅ Ready to plug in authentication, file upload, etc.

---

## 🗂 Folder Structure
```

├── src
│ ├── app
│ │ ├── modules
│ │ │ └── user
│ │ │ ├── user.model.ts
│ │ │ ├── user.routes.ts
│ │ │ ├── user.controller.ts
│ │ │ └── user.service.ts
│ │ └── ...
│ ├── config
│ │ └── env.ts
│ ├── errorHelpers
│ │ └── AppError.ts
│ ├── middlewares
│ │ ├── globalErrorHandler.ts
│ │ └── notFound.ts
│ ├── routes
│ │ └── index.ts
│ ├── utils
│ │ ├── catchAsync.ts
│ │ └── sendResponse.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .gitignore
├── package.json
└── README.md

```

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript
- Dotenv
- HTTP Status Codes

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/express-mongoose-boilerplate.git
cd express-mongoose-boilerplate
npm install
```

🧪 Run Project
```bash
npm run dev
```

Production
```bash
npm run build
npm start
```


🧾 .env Example
Create a .env file in the root directory:

```bash
PORT=5000
DB_URL=mongodb://localhost:27017/your-db-name
NODE_ENV=development
```


🛣 Sample API Routes

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | `/api/v1/users` | Get all users   |
| POST   | `/api/v1/users` | Create new user |



🙌 Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


📄 License
MIT License — free for personal & commercial use.


🧑‍💻 Author
Made with ❤️ by Ibrahim Sarkar


