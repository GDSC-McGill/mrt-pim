# PCB Inventory Manager (PIM)

### Google Developer Student Club | McGill Rocket Team

## Context

This project is designed to allow members of the Google Developer Student Club to contribute and gain experience in a production-level project. 
PCB Inventory manager or PIM for short will bring value to the Mcgill Rocket team.


## Architecture
This application is designed with a simple architecture, single server with client (browser) to server communication.
Features in NextJs allow us to combine both server side and client side rendering techniques, facilitate communication between browser and server using server actions,
leverage server side rendering to fetch data on the server (before reaching the browser).

## Stack

- Nextjs full Stack
    - Server (Nodejs)
    - Client (Reactjs on the browser)
- Prisma (ORM and db migrations)
- NextAuth.js/Auth.js (authentication)
- Postgresql database
- All in Typescript



## Start Developing
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

- Step 1: Navigate to your google account ([https://myaccount.google.com/](https://myaccount.google.com/))
- Step 2: Click on security
- Step 3: Click on 2 step verification
- Step 4: Scroll down and click on App passwords
- Step 5: Generate an app password
- Step 6: Add app password to .env

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
