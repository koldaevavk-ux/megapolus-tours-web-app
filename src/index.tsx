import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for frontend-backend communication
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/logo_mt.png', serveStatic({ path: './public/logo_mt.png' }))

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Megapolus Tours - Личный кабинет</title>
        <meta name="description" content="Личный кабинет клиента турагентства Megapolus Tours">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Custom CSS -->
        <link href="/static/style.css" rel="stylesheet">
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/logo_mt.png">
    </head>
    <body class="bg-gray-50">
        <div id="app">
            <!-- App will be rendered here -->
            <div class="flex items-center justify-center min-h-screen">
                <div class="text-center">
                    <div class="spinner mx-auto mb-4"></div>
                    <p class="text-gray-600">Загрузка...</p>
                </div>
            </div>
        </div>
        
        <!-- Application Script -->
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
