# ESG Review Platform

## Overview

This project is a prototype ESG ingestion and analyst review platform built using the MERN stack.

The application ingests ESG-related operational data from multiple enterprise-style sources, normalizes the data, flags suspicious records, and supports analyst approval and audit locking workflows.

---

# Features

* CSV ingestion workflow
* Multiple ESG source types

  * SAP fuel/procurement
  * Utility electricity data
  * Corporate travel data
* Unit normalization
* Suspicious data detection
* Analyst review workflow
* Approval and audit locking
* MongoDB persistence
* Responsive Bootstrap UI

---

# Tech Stack

## Frontend

* React.js
* Bootstrap
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# Project Structure

```text
client/
server/
MODEL.md
DECISIONS.md
TRADEOFFS.md
SOURCES.md
```

---

# Setup Instructions

## Backend

```bash
cd server
npm install
npm run dev
```

---

## Frontend

```bash
cd client
npm install
npm start
```

---

# Sample CSV Format

```csv
category,amount,unit
Electricity,5000,Wh
Fuel,20,L
Travel,-100,km
```

---

# ESG Workflow

```text
CSV Upload
   ↓
Raw Data Storage
   ↓
Normalization
   ↓
Suspicious Detection
   ↓
Analyst Review
   ↓
Approval
   ↓
Audit Lock
```

---

# Deployment

Frontend:

* Vercel

Backend:

* Render

Database: MongoDB


