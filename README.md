<div align="center">
  <h1>Skin-Sync: Full-Stack Web Application</h1>
</div>

//insert photo here

<br />

<div align="center">
  <img src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=20232A" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=323330" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge" alt="Java" />
  <img src="https://img.shields.io/badge/MySQL-00758F?style=for-the-badge" alt="MySQL" />
</div> 

<div align="center">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/CSS-rebeccapurple?style=for-the-badge&logo=css&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/Google_Fonts-EA4335?style=for-the-badge&logo=googlefonts&logoColor=white" alt="Google Fonts" />
  <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" alt="Spring Security" />
</div>


<div align="center">
    <a href="#about">About</a> •
    <a href="#features">Features</a> •
    <a href="#visuals">Key Visuals</a> •
    <a href="#tech">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#database">Database</a> •
    <a href="#api">API</a> •
    <a href="#future">Future Features</a>
</div>

---

<a name="about"></a>
## 💡 About the Project

Skin-Sync is a full-stack web application that provides personalized skincare product recommendations based on a user's skin type and skin conditions. Users complete a short quiz, view recommended products, and save products they like.

The front end is built with modern ReactJS functional components and hooks, with responsive styling for desktop and mobile devices. All data persistence is handled through a Java Spring Boot backend and a MySQL relational database.

---

<a name="features"></a>
## 🎨 Features  

**User-Facing Features**

| Feature | Description | Status |
| :---    | :---        | :--:   |
| Skin Quiz | Collects information about skin type and conditions | ✅ |
| Product Recommendations | Displays curated products tailored to user | ✅ |
| Saved Products | Users can save favorite products | ✅ |
| Login & Sign-Up | Users can create an account and log in | ✅ |
| Responsive Design | Works on desktop, tablet, and mobile | ✅ |

**Admin / Future Features**

| Feature | Description | Status |
| :---    | :---        | :--:   |
| Authentication & Authorization | Admin login and access | ⚪ Planned |
| CRUD Operations | Admin can add, update, or delete products | ⚪ Planned 

---

<a name="visuals"></a>
## 📸 Key Visuals

Wireframes / UI Previews

<img width="767" height="826" alt="Screenshot 2025-11-10 124621" src="https://github.com/user-attachments/assets/86d1e943-73f6-494b-967a-52bcd16ade8e" />

---

<a name="tech"></a>
## 🛠️ Tech Stack  

**Front End**

| Technology | Description | Notes |
| :---       | :---        | :--: |
| JavaScript | Core language for dynamic web UI | ✅ |
| React | Component-based architecture with hooks | ✅ |
| React Router | Declarative SPA routing | ✅ |
| Vite | Fast dev server and bundler | ✅ |
| CSS | Styling, layout, responsiveness | ✅ |
| Google Fonts | Typography customization | ✅ |

**Back End & Database**

| Technology | Description | Notes |
| :---       | :---        | :--: |
| Java | Backend language | ✅ |
| Spring Boot | RESTful backend framework | ✅ |
| Maven | Dependency management | ✅ |
| MySQL | Relational database | ✅ |
| JPA | ORM for database access | ✅ |

---
<a name="installation"></a>
## 🚀 Prerequisites & Installation

> [!NOTE]
> To run this project locally, you will need the following installed:
> - Node.js (LTS version)
> - npm or yarn
> - Java Development Kit (JDK) 21
> - MySQL Server (version 8.0+)

---
### Back End Setup (Java/Spring Boot/MySQL)

1. **Clone the repository:**  
   In the terminal, navigate to the directory where you want the project saved, then run:

    ```shell
    git clone https://github.com/kvloewenstein/unit-2-fullstack-project-k-loewenstein
    cd unit-2-fullstack-project-k-loewenstein/backend
    ```

2. **Configure the database:**  
   Create a new MySQL database named `skinsync_db`, then update your  
   `src/main/resources/application.properties` file with your actual MySQL credentials:

    ```properties
    spring.datasource.url=jdbc:mysql://127.0.0.1:3306/skinsync_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=skinsync_admin
    spring.datasource.password=YOUR_PASSWORD
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    ```

3. **Run the Java/Spring Boot application:**  
   If you are not running from an IDE, go to the root backend folder and run:

    ```shell
    mvn spring-boot:run
    ```

🟢 The API will start at:  
`http://localhost:8080`

> [!WARNING]
> If you see `UnsupportedClassVersionError`, your JDK version is incorrect.  
> Make sure your `JAVA_HOME` and IDE are set to use **JDK 21**.

---

### Front End Setup (React/Vite)

1. **Navigate to the frontend project directory:**

    ```shell
    cd ../frontend
    ```

2. **Install dependencies:**

    ```shell
    npm install
    # or
    yarn install
    ```

3. **Run the React/Vite application:**

    ```shell
    npm run dev
    # or
    yarn dev
    ```

🟢 The frontend will run at:  
`http://localhost:5173`

---

