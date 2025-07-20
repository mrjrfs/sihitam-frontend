# Guide: Hate Speech Detection Frontend

This guide provides instructions on how to use this repository and link it with the backend repository.

## Prerequisites

- Node.js (v18 or later)
- pnpm

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sihitam-cloud/sihitam-frontend
   cd sihitam-frontend
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`.

## Linking with the Backend

To link this frontend with the backend, you need to configure the API endpoint.

1. **Locate the configuration file:**

   The API endpoint is configured in the `lib/utils.ts` file.

2. **Update the API endpoint:**

   Open `lib/utils.ts` and change the `API_URL` variable to the URL of your backend.

   ```typescript
   // lib/utils.ts

   export const API_URL = "http://localhost:8080"; // Change this to your backend URL
   ```

## Backend Repository

The backend for this project is located at:

[https://github.com/sihitam-cloud/sihitam-backend](https://github.com/sihitam-cloud/sihitam-backend)

Please refer to the backend repository's `README.md` for instructions on how to set it up.
