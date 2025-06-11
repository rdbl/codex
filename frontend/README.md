# Frontend

This React application was bootstrapped with Vite. It queries the Strapi backend running on `http://localhost:1337` and renders four sections:

- **About** – artist biography and photo
- **Gallery** – list of works
- **Actualité** – news posts
- **Contact** – contact information

Create a `.env` file with the API URL and start the dev server:

```bash
npm install
echo "VITE_API_URL=http://localhost:1337/api" > .env
npm run dev
```

