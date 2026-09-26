# 🏋️ FitLog – Workout Library

FitLog is a modern fitness and workout tracking web application built with Next.js. Users can explore workouts, view exercise details, create a daily workout plan, save exercises for later, and track workout statistics such as total exercises, duration, and calories burned.

## 🚀 Live Features

* 📚 Browse a collection of workout exercises
* 🔍 View detailed information for each exercise
* ➕ Add exercises to Today's Plan
* ❤️ Save exercises for later
* 🗑️ Remove exercises from plans or saved list
* 📊 Track:

  * Total Exercises
  * Total Workout Duration
  * Total Calories Burned
* 🔄 Sort exercises by:

  * Duration
  * Calories Burned
  * Rating
* 📱 Fully Responsive Design
* 🔔 Interactive Toast Notifications
* ⚡ Fast performance with Next.js

---

## 🛠️ Technologies Used

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* DaisyUI

### Libraries

* React Icons
* React Toastify

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── Workouts/
│   ├── MyPlan/
│   └── page.tsx
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── ExerciseCard
│   ├── PlaneExcriesCard
│   ├── SaveCard
│   └── StatsCards
│
├── Contaxet/
│   └── ExcirsContaxt.tsx
│
├── Types/
│   └── DataTypes.ts
│
└── Data/
```

---

## 🎯 Main Functionalities

### Today's Plan

Users can add exercises to their daily workout plan and monitor:

* Number of exercises
* Total workout duration
* Total calories burned

### Saved Exercises

Users can save exercises for later and manage them separately.

### Sorting

Exercises can be sorted dynamically based on:

* Duration
* Calories Burned
* Rating

---

## 📸 Pages

### Home Page

Introduction to the FitLog platform.

### Workouts Page

Displays all available exercises.

### Exercise Details Page

Shows complete workout information including:

* Muscle Groups
* Equipment
* Difficulty
* Duration
* Calories Burned
* Instructions

### My Plan Page

Manage today's workout plan and saved exercises.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🌟 Future Improvements

* User Authentication
* Workout Progress Tracking
* Dark / Light Theme Toggle
* Search & Filter System
* Exercise Categories
* User Profiles
* Workout History

---

## 👨‍💻 Author

Developed by **Moazzem Hossain**

---

## 📜 License

This project is created for learning and educational purposes.
