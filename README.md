# S4U REST API (version 0.0.1)

S4U is a custom API Rest for user and ticket management on S4U app. 💻🖥

---

## Version 0.0.1 🥳

### Tickets

- [x] `createTicket()` function implemented ✔.
- [x] `getTickets()` function implemented ✔.
- [x] `getTicketById()` function not implemented ✔.
- [ ] `getTicketsByOwnerUser()` function not implemented ✖.
- [ ] `getTicketsByAssignedUser()` function not implemented ✖.
- [ ] `updateTicket()` function not implemented ✖.

## API Documentation

Under construction 🔨 , or view online on swagger when app is running 😉 (/api-docs)

## Developer usage 👩‍💻👨‍💻

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 13.11.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.14.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/jdavellanedag/S4UApi.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Set up enviroment

Create a .env file to configure the following enviroment settings:

```
PORT= your-port-number-here
MONGO_URI= your-mongo-db-url
```

---

### Start the project

```bash
node app.js
``` 