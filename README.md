# Flavien Broadway Portfolio

This monorepo contains a Strapi backend and a Vite/React frontend for the experimental photographer **Flavien Broadway**.

## Backend (Strapi)

The `backend` directory was generated with Strapi 5. It defines four content types:

- **About** (`singleType`) – name, bio and photo of the artist.
- **Work** (`collectionType`) – gallery items with title, description and image.
- **News** (`collectionType`) – posts for events or exhibitions with title, content and event date.
- **Contact** (`singleType`) – email, phone and Instagram link.

Install dependencies and run in development mode. Copy the provided
`.env.example` file to `.env` first:

```bash
cd backend
cp .env.example .env
npm install
npm run develop
```

The API will be available at `http://localhost:1337/api`.

## Frontend (Vite/React)

The `frontend` directory was created using Vite with React. It fetches data from the Strapi API to display the **About**, **Gallery**, **News** and **Contact** sections.

Create a `.env` file with the URL of the backend and start the dev server:

```bash
cd frontend
echo "VITE_API_URL=http://localhost:1337/api" > .env
npm install
npm run dev
```

The site will be served at `http://localhost:5173`.

## Usage

1. Start the backend (`npm run develop` inside `backend`).
2. Start the frontend (`npm run dev` inside `frontend`).
3. Use the Strapi admin panel at `http://localhost:1337/admin` to manage content.
4. To preview the static build, run `npm run build` inside `frontend` and open `frontend/dist/index.html` in your browser.

