# PCB Inventory Manager (PIM)

### Google Developer Student Club | McGill Rocket Team

## Introduction 🥇 

![image](https://github.com/GDSC-McGill/mrt-pim/assets/45018625/6e3d5ca0-02f3-497c-a4cf-a900068684ce)

Welcome to the mrt-pim wiki! This project is the first of many projects
in collaboration with other McGill University Clubs. In this case, we will
be working hand in hand with the [MRT](https://www.mcgillrocketteam.com/) (McGill Rocket Team 🚀) club to create an
inventory manager for all their printed circuit board's components 🖱️  .

The GDSC Executive team would also like to express our appreciation and gratitude
to whoever is willing to dedicate hours of their free time towards building this project.
It will be a great learning experience for everyone involved and it will give a chance for
people with no real world experience to see what it is like to work in a team of developers
on a real world application!💥  

## What are we developing?

The primary goal of this project is to develop a comprehensive inventory management application tailored specifically for the McGill rocket team. This application is designed to streamline the management of their boards and components, enabling efficient tracking and organization of inventory. By integrating features such as receipt scanning and a versioning system, the application will provide a clear record of inventory changes, including who made specific modifications to which board. Additionally, the ability to log in and view these changes will enhance accountability and transparency within the team. Overall, this application aims to optimize the inventory management process for the McGill rocket team, facilitating smoother operations and better project outcomes.

## How are we developing this? 🛠️ 

To develop the inventory management web application for the McGill rocket team, we are utilizing a modern technology stack and following best practices to ensure a robust and user-friendly application.

### Development Approach 👷🏽 

- **TypeScript**: The entire application is being developed in **[TypeScript](https://www.typescriptlang.org/docs/)**, ensuring type safety and better developer experience.
- **Version Control**: We are using **[Git](https://git-scm.com/doc)** for version control, with the codebase hosted on **[GitHub](https://docs.github.com/en)**. This allows for collaborative development and easy tracking of changes.
- **Workflow**: We will use a subset/flavour of Gitflow development workflow.
- **Code Reviews**: All code changes are subject to peer review before merging, ensuring code quality and consistency.
- **Continuous Integration/Continuous Deployment (CI/CD)**: We are implementing CI/CD pipelines to automate testing and deployment, enabling faster and more reliable releases.

### Technology Stack 💻 

- **Frontend and Backend**: We are using **[Next.js](https://nextjs.org/docs)**, a React framework that combines server-side and client-side rendering techniques, to build both the frontend and backend of our application. This allows for a seamless full-stack development experience.
- **Database**: For our database, we are using **[PostgreSQL](https://www.postgresql.org/docs/)**, a powerful open-source relational database that offers reliability, performance, and advanced features.
- **ORM**: To interact with the database, we are using **[Prisma ORM](https://www.prisma.io/docs/)**. Prisma provides a type-safe and easy-to-use interface for querying and manipulating data in TypeScript.
- **Authentication**: For handling user authentication, we are integrating **[Auth.js](https://authjs.dev/)**, which simplifies building secure authentication flows in Next.js applications.
- **UI Components**: For the user interface, we are leveraging **[shadcn/ui](https://ui.shadcn.com/docs)**, a React component library that provides a set of pre-designed components for building beautiful and responsive interfaces.

## Architecture
This application is designed with a simple architecture, single server with client (browser) to server communication.
Features in NextJs allow us to combine both server side and client side rendering techniques, facilitate communication between browser and server using server actions,
leverage server side rendering to fetch data on the server (before reaching the browser).


## Start Developing
Please see this document for some important notes (https://github.com/GDSC-McGill/mrt-pim/wiki/How-to-contribute)
### Development environment

#### Operating System
We recommend that you develop with Linux or MacOS.
If you have Windows, we recommend using WSL ([https://learn.microsoft.com/en-us/windows/wsl/install](https://learn.microsoft.com/en-us/windows/wsl/install)).
You may still use Windows if you would like because Nodejs is cross platform.


#### System dependencies

- Nodejs v20 ([https://nodejs.org/en](https://nodejs.org/en))

One of the following:
- Docker Desktop ([https://www.docker.com/](https://www.docker.com/))

- A local installation of postgresql ([https://www.postgresql.org/](https://www.postgresql.org/))


#### Application credentials
This application will use email based authentication. You can generate google credentials for development:

>Make sure you have 2 factor authentication enabled

- Step 1: Navigate to your google account ([https://myaccount.google.com/](https://myaccount.google.com/))
- Step 2: Click on security
- Step 3: Click on 2 step verification
- Step 4: Scroll down and click on App passwords
- Step 5: Generate an app password
- Step 6: Add app password to .env

>If you do not see app passwords in this section, try to search for 'App passwords' in the search bar of your google account

#### Environment variables

Create a file named `.env` in the root directory of the git repository. Fill in the blanks from the file named `example.env`

#### Npm dependencies

Run `npm install` in the root directory of the git repository.


#### Generate code (prisma client)

Run `npx prisma generate`

### Run the application
#### Run Database
If you wish to use docker to run a postgres service, simply run `docker compose up` in the root directory of the git repository (see `compose.yml`).

If you are running a local installation of postgresql, ensure the service is running on port 5432 (otherwise ensure the .env is the same port as your service)

#### Migrate Database schema

Run `npx prisma db push` or `npx prisma db push --force-reset` to force

#### View database through Adminer DBMS (if running database through docker)

- Visit [http://localhost:8081](http://localhost:8081)
- Choose postgres as the system
- 'db' as the server
- 'postgres' as username and 'admin' as password (corresponds to compose.yml)


#### Run the NextJs Application
Run `npm run dev` in the root directory of the git repository


## Contacts
### Project Leads
- Gianluca Piccirillo | gianluca.piccirillo@mail.mcgill.ca
- Nabil Amimer | nabil.amimer@mail.mcgill.ca
- Sasha Denouvilliez-Pech | sasha.denouvilliez-pech@mail.mcgill.ca

### Product Owner
Nardo Jean Gilles | nardo.jeangilles@mail.mcgill.ca

### Administrator

Matthew Cabral | matthew.cabral@mail.mcgill.ca

### Contributors
The GDSC community, join the discord ([https://discord.gg/qySD3XyzMq](https://discord.gg/qySD3XyzMq))

Contact the administrator to join the team!
