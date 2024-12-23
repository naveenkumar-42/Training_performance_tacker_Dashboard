# Student Training Data Management System

## Overview

The Student Training Data Management System is designed to centralize all student training data, including attendance, assessments, and achievements, into a unified platform. The system provides a personalized student dashboard that reflects a student's talent scenario, offering skill-based analysis for educators to assess student proficiency levels in various technologies. This enables tailored learning experiences and data-driven educational interventions.

---

## Features

* **Login and Registration System**: Secure user authentication for Admin/Management, Students, Parents.
* **Centralized Data Management**: Store student data (attendance, assessments, achievements) in a centralized MySQL database.
* **Student Dashboard**: Allows students to view their details, achievements, and progress in training and placement programs.
* **Skill-Based Analysis Tools**: Educators can assess student proficiency in various skills (e.g., web development, mobile app development, blockchain).
* **Report Generation and Analytics**: Generate detailed reports and analytics on student progress for administrators and parents.
* **Data Privacy and Security**: Ensure data security through secure authentication, encryption, and compliance with data protection regulations.

---

## Tech Stack

* **Backend**: Spring Boot (Java)
* **Frontend**: React (JSX, SCSS)
* **Database**: MySQL
* **API**: RESTful services
* **Authentication**: Spring Security (JWT, OAuth2)
* **Data Encryption**: SSL, AES encryption
* **Deployment**: Docker, Kubernetes (Optional)

---

## Project Flow

1. **Purpose**: Centralize student training data and provide a user-friendly interface for students, admins, and parents to track and analyze student progress.
2. **Scope**: The project includes data management, student dashboard development, skill-based analysis, and reporting for personalized learning experiences.
3. **User Personas**:
    * **Students**: Can view personal training data and achievements.
    * **Admin/Management**: Full access to all student data and the ability to generate reports.
    * **Parents**: Can track child’s performance and provide feedback.
    * **Faculty**: Can assign and view student marks and progress.

---

## Functional Requirements

1. **Role-Based Access Control**:
    * Admin/Management have full access.
    * Students can edit only their own data.
    * Parents have view-only access.
2. **Student Dashboard**:
    * Displays personal details, talent assessments, and achievements.
    * Allows students to upload proofs of completed training programs and projects.
3. **Skill-Based Analysis**:
    * Educators can assess student skills and offer personalized learning pathways.
4. **Reporting and Analytics**:
    * Generate reports based on student data to help educators, parents, and admins make informed decisions.
5. **Data Privacy and Security**:
    * JWT authentication, HTTPS, encryption to ensure the security of student data.

---

## Setup and Installation

### Prerequisites

1. **Java 11 or later** for Spring Boot
2. **Node.js** and **npm** for React
3. **MySQL** database server
4. **Docker** (Optional for deployment)

### Backend Setup (Spring Boot)

1. Clone the repository:

```bash
git clone [https://github.com/your-username/student-training-system.git](https://github.com/your-username/student-training-system.git)
cd student-training-system
```

2. Install backend dependencies:
```Bash
npm install
```

3. Configure the database connection in the .env file (create this file if it doesn't exist):
```Code Snippet
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=studentdb
```

4.Start the backend server:
```Bash
npm start
```
---

## Frontend Setup (React)
1.Install frontend dependencies:
```Bash
npm install
```

2.Run the React development server:
```Bash
npm start
```
##Usage
1.Students can log in to their dashboard to track their progress, view training marks, and upload proofs for completed projects and skills.
2.Admin/Management can view all student profiles, filter by skills or projects, and generate reports.
3.Parents can track their child's progress over time and communicate with educators.
Faculty can update and assign marks for training programs.
