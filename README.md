# LENDSQR FRONTEND ASSESSMENT

## Description

This project was created using SCSS, ReactJS, TypeScript, and additional frameworks such as react-icon. Its development was undertaken to meet the requirements for the position of a frontend developer at Lendsqr.
The website serves as a straightforward user dashboard that presents a wide range of information, including user loan details and personal data. It offers insights into various aspects such as organizations, user status, and more, particularly for lenders. The data utilized for building this site was sourced from a JSON generator, which significantly facilitated the development process.

In the development phase, IndexedDB was employed for multiple purposes. Initially, it was used to store the details of logged-in users, enabling authentication for access to other routes. Additionally, IndexedDB was utilized for storing individual user information, offering a versatile solution for data management.

The user dashboard provides detailed information about user loans, personal data, organizations, and statuses of lenders. The data used in this project was obtained from JSON Generator, simplifying the development process. Testing was carried out using react testing library (jest). The userdashboard and login components were tested.

## Features

- User Dashboard: View user loan details and personal information.
- Organization Details: Explore various organizations.
- Status Information: Check the status of lenders.
- Filter Details: Filtering user details by date, organization, status, email, etc.

## Objectives

1. Build the 4 pages Login, Dashboard, User page, User details page
2. The user pages should pull data from a mock api with 500 records
3. Use local storage or indexedDB to store and retrieve user details on the user details page.
4. The page must be mobile responsive
5. Some details are intentionally left out of this instruction set. We feel the candidate should be able to spot and address them


## Technologies
1. ReactJs + vite
2. Sass + CSS
3. Typescript
4. React testing library (Vitest)

## User Page View
![User Dashboard](https://asset.cloudinary.com/dzdboguzy/15fc179ff99e07d094be08ebd213c594)

## Login Page View
![Login Page](https://asset.cloudinary.com/dzdboguzy/8488a1874e702fae0eabec7aa7617525)

## Usage

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git

```

2. Install dependencies:
 ```bash
 npm install
```


3.
```bash
 npm run dev
```

Open your browser and access the project at http://localhost:3000.


Link to the live url: [https://esther-adeyemi-lendsqr-fe-test-a4xu8cwmq-xtarachiever.vercel.app/](https://esther-adeyemi-lendsqr-fe-test.netlify.app/users)
