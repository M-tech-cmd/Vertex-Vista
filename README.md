# Vertex Vista

_A cutting-edge, interactive 3D developer portfolio that showcases your projects in an immersive three-dimensional environment. Built with modern web technologies and powered by AI for content generation._

<br/>

![Vertex Vista Demo](https://www.your-image-url.com/your-screenshot.jpg)

<p align="center">
  <a href="https://vertex-vista.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/-Live%20Demo-blue?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/yourusername/vertex-vista/issues" target="_blank">
    <img src="https://img.shields.io/badge/-Report%20Bug-red?style=for-the-badge" alt="Report Bug">
  </a>
</p>

---

## ✨ Features

### Core Features

* **3D Model Showcase:** Display interactive 3D models of your projects with smooth animations and detailed visualizations.
* **Interactive Environment:** An immersive 3D environment that serves as your portfolio's backdrop, offering users an engaging tour experience.
* **AI-Powered Content Creation:** Automatic 3D model descriptions are generated using Gemini AI, saving time and ensuring consistent, professional content.

### Design System

* **Typography:** We use **Space Grotesk** for headings and **Inter** for body text to maintain a modern aesthetic and excellent readability.
* **Animation:** Subtle, interactive animations guide users through the portfolio experience, enhancing engagement without distraction.

---

## 🛠️ Tech Stack

### AI & Content Generation

* **Gemini:** An advanced AI model for understanding and generating content from various inputs.
* **Genkit:** Google's open-source framework provides unified AI model access and streamlined AI logic.

### Frontend Development

* **TypeScript:** Provides a type-safe environment for robust and maintainable code.
* **Next.js 15:** A modern React framework with server-side rendering and advanced optimization.
* **Three.js:** A powerful 3D graphics library for WebGL-based rendering.

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn package manager
* A modern browser with WebGL support

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/vertex-vista.git](https://github.com/yourusername/vertex-vista.git)
    cd vertex-vista
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Copy the example file and add your API key.
    ```bash
    cp .env.example .env.local
    ```
    ```env
    GEMINI_API_KEY=your_gemini_api_key
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Navigate to `http://localhost:3000` to see your 3D portfolio in action!

---

## 📁 Project Structure

vertex-vista/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Shadcn/ui components
│   │   └── 3d/              # Three.js components
│   └── public/              # Static assets (3D models, textures)
│       └── models/          # Your 3D models (.glb, .gltf)
└── docs/                    # Additional documentation


---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/yourusername/vertex-vista/CONTRIBUTING.md) for details.

---

## 📄 License

This project is licensed under the MIT License. See the **LICENSE** file for details.

---

## 🙏 Acknowledgments

* **Three.js Community**
* **Next.js Team**
* **Google** for Gemini AI and the Genkit framework
* **Shadcn** for the beautiful UI components
* **Vercel** for seamless deployment

---

<p align="center">
    <a href="https://github.com/M-tech-cmd" target="_blank">
        <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F-by%20M--tech--cmd-red?style=for-the-badge" alt="Made with love by M-tech-cmd">
    </a>
</p>
