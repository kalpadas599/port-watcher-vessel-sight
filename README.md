
# Port Watcher - Vessel Tracking System

A maritime vessel tracking system for port authorities that provides real-time vessel positions, status updates, and reporting capabilities.

![Project Preview](https://github.com/user-attachments/assets/7506717b-a452-49db-aaa9-4ccb9f3232df)

## Features

- Interactive vessel map with real-time positions
- Vessel tracking with arrival/departure status
- Detailed vessel information and statistics
- Responsive design for desktop and mobile devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository
```sh
git clone https://github.com/yourusername/port-watcher.git
cd port-watcher
```

2. Install dependencies
```sh
npm install
# or
yarn install
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Deployment Options

### Option 1: Deploy with Lovable

1. Visit [Lovable](https://lovable.dev/projects/343db1a1-03dd-4461-951d-c501b0231a2a)
2. Click on Share -> Publish
3. Follow the prompts to deploy your application

### Option 2: Manual Deployment

1. Build the project
```sh
npm run build
# or
yarn build
```

2. The build output will be in the `dist` folder, which you can deploy to any static hosting service like:
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)
   - [GitHub Pages](https://pages.github.com/)
   - [AWS S3](https://aws.amazon.com/s3/)

### Connecting a Custom Domain

To connect a custom domain to your deployed site:

1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the instructions to set up DNS records for your domain

## Development

### Project Structure

```
port-watcher/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── data/           # Sample vessel data
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and types
│   ├── pages/          # Page components
│   ├── App.tsx         # Main application
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── tailwind.config.ts  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Map visualization using [Mapbox](https://www.mapbox.com/)
