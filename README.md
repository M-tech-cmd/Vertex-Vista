 Vertex Vista

Build and Deploy an Amazing 3D Developer Portfolio in React with Three.js

A cutting-edge, interactive 3D developer portfolio that showcases your projects in an immersive three-dimensional environment. Built with modern web technologies and powered by AI for content generation.
Show Image
✨ Features
🎯 Core Features

🎨 3D Model Showcase — Display interactive 3D models of your projects with smooth animations and detailed visualizations

🌍 Interactive Environment — Immersive 3D environment that serves as your portfolio's backdrop, offering users an engaging tour experience

📋 Project Details Overlay — Dynamic overlays displaying project titles, descriptions, and links positioned contextually over 3D models

🤖 AI-Powered Content Creation — Automatic 3D model descriptions generated using Gemini AI, saving time and ensuring consistent, professional content

🎨 Customizable Themes — User-customizable visual themes including colors, lighting, and atmospheric effects

🎮 Navigation Controls — Intuitive controls for exploring the 3D environment with smooth camera movements and model interactions

📞 Contact Form Integration — Seamless contact form integration for potential clients and collaborators

🎨 Design System

Layout: Clean, full-screen design maximizing the impact of the 3D environment
Typography:

Headings: Space Grotesk (sans-serif) for modern, geometric appeal
Body Text: Inter (sans-serif) for excellent readability


Iconography: Minimalist, wireframe-style icons complementing the 3D aesthetic
Animation: Subtle, interactive animations guiding users through the portfolio experience

🛠️ Tech Stack
🤖 AI & Content Generation

Gemini: Advanced AI model for understanding and generating content from various inputs (text, code, images, video)
Genkit: Google's open-source framework providing unified AI model access and streamlined AI logic

💻 Frontend Development

TypeScript: Type-safe JavaScript development for robust, maintainable code

Next.js 15: Modern React framework with server-side rendering and advanced optimization

Tailwind CSS: Utility-first CSS framework for rapid, consistent styling

Three.js: Powerful 3D graphics library for WebGL-based 3D rendering

🎨 UI Components

Shadcn/ui: Beautiful, accessible component library
Lucide React: Consistent icon set for UI elements

🚀 Getting Started
Prerequisites

Node.js 18+
npm or yarn package manager
Modern browser with WebGL support

Installation

Clone the repository
bashgit clone https://github.com/yourusername/vertex-vista.git
cd vertex-vista

Install dependencies
bashnpm install

Set up environment variables
bashcp .env.example .env.local
Add your API keys:
envGEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000

Run the development server
bashnpm run dev

Open your browser
Navigate to http://localhost:3000 to see your 3D portfolio in action!

📁 Project Structure
vertex-vista/
├── src/
│   ├── app/                    # Next.js app directory
│   ├── components/             # Reusable React components
│   │   ├── ui/                # Shadcn/ui components
│   │   ├── 3d/                # Three.js components
│   │   └── forms/             # Contact forms
│   ├── lib/                   # Utility functions
│   ├── hooks/                 # Custom React hooks
│   └── styles/                # Global styles
├── public/                    # Static assets
│   ├── models/                # 3D model files
│   └── textures/              # 3D textures
└── docs/                      # Documentation
🎮 Usage
Adding Your Projects

Upload 3D Models: Place your .glb or .gltf files in the public/models/ directory
Configure Projects: Update the project configuration in src/data/projects.ts
AI Descriptions: Use the built-in AI tool to generate descriptions automatically

Customization

Themes: Modify color schemes in src/styles/themes.ts
3D Environment: Adjust lighting and environment settings in src/components/3d/Scene.tsx
Navigation: Customize controls in src/components/3d/Controls.tsx

🌐 Deployment
Vercel (Recommended)

Push your code to GitHub
Connect your repository to Vercel
Add environment variables in Vercel dashboard
Deploy automatically on every push

Other Platforms
bash# Build for production
npm run build

# Start production server
npm start
🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Three.js Community for the incredible 3D library
Next.js Team for the amazing React framework
Google for Gemini AI and Genkit framework
Shadcn for the beautiful UI components
Vercel for seamless deployment platform

📞 Support

Documentation: Visit our docs
Issues: GitHub Issues
Discussions: GitHub Discussions


<div align="center">
⭐ Star this repository if you found it helpful!
Made with ❤️ and ☕ by M-tech-cmd
Live Demo • Documentation • Report Bug
</div>
