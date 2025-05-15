# E-Commerce Platform – Frontend

This is the frontend for a mini e-commerce platform built with **React.js** and **Tailwind CSS**.  
It allows users to submit products, view all submitted products, and search them using smart AI-based contextual search powered by OpenAI.

** Live Site:** https://ecommerce-platform-frontend-nq55a92wo-vishvak8s-projects.vercel.app/

---

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Backend Communication**: Axios (REST API)
- **AI Integration**: OpenAI API (Contextual Search + Translation)
- **Hosting**: Vercel

---

## Core Features

### Product Submission Tab
- Users can enter:
  - Product Name
  - Price
  - Description
  - Image URL (optional)
- On submission, the data is sent to the backend and stored in PostgreSQL.

### My Products Tab
- Displays all submitted products in a clean card layout.
- Shows product name, description, price, and image.
- Products appear in reverse chronological order.
- Dynamically updates after submission.

### 🔍 AI-Powered Smart Search
- Search box allows contextual queries like:
  - `cheapest phone`
  - `flagship Android phone`
  - `budget phone under ₹100000`
  - `wireless noise canceling headphones`
- Returns matching products using OpenAI’s semantic understanding.

### Hindi Translation Feature
- Each product has a **"Translate to Hindi"** button.
- Uses OpenAI to translate the English product description into fluent Hindi.
- Output is clean, human-like, and displayed below the card.

---

## Setup Instructions (Local)

1. **Clone the Frontend Repository**

```bash
git clone https://github.com/vishvak8/ecommerce-platform-frontend.git
cd ecommerce-platform-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

Frontend will run on: http://localhost:5173
Make sure your backend is also running in a separate terminal.

---

## Run the Backend

1. **Clone the Backend Repository**

```bash
git clone https://github.com/vishvak8/ecommerce-platform-backend.git
cd ecommerce-platform-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the backend server**

```bash
npm start
```
Backend will run on: http://localhost:5001

---

## Note

By default, the frontend points to the hosted backend on Render:

```bash
https://ecommerce-platform-backend-n9wx.onrender.com
```

If running the backend locally, update all axios URLs inside the App.jsx file like this:

```bash
https://ecommerce-platform-backend-n9wx.onrender.com
```

Change:

```bash
https://ecommerce-platform-backend-n9wx.onrender.com
```

To:

```bash
http://localhost:5001
```

Make sure to create a `.env` file in the backend folder if running locally. 
👉 For environment variable setup, see the [Backend README](https://github.com/vishvak8/ecommerce-platform-backend#-setup-instructions).

---

## License

This project is for **educational/demo purposes only**.  
No commercial use or real transactions involved.

---

## Author

Built with ❤️ by [@vishvak8](https://github.com/vishvak8)

   

