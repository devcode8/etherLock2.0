# EtherLock 2.0

A modern, blockchain-inspired file storage and management platform built with React. EtherLock provides a sleek interface for secure digital asset protection with advanced eVault technology.

## 🚀 Features

- **Modern UI/UX**: Clean, gradient-based design with glassmorphism effects
- **File Management**: Upload, view, and organize your digital files
- **User Authentication**: Secure sign-in and sign-up functionality
- **File Information**: Detailed file metadata including IPFS hash integration
- **Responsive Design**: Optimized for all screen sizes
- **Blockchain Integration**: IPFS-based file storage references

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.22.3
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: React Icons 5.0.1
- **Build Tool**: Create React App
- **Testing**: Jest & React Testing Library

## 📁 Project Structure

```
etherLock2.0/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── GradientBackground.jsx
│   │   └── HeroSection.jsx
│   ├── pages/             # Page components
│   │   ├── home/          # Landing page
│   │   ├── signin/        # Authentication
│   │   ├── signup/        # User registration
│   │   ├── files/         # File management dashboard
│   │   └── fileinfo/      # Individual file details
│   ├── Styles/            # Custom CSS files
│   └── App.js             # Main application component
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Project dependencies
```

## 🎨 Design Features

- **Gradient Backgrounds**: Dynamic, animated gradient overlays
- **Glassmorphism**: Modern frosted glass UI elements
- **Custom Typography**: Kanit font family for enhanced readability
- **Color Scheme**: Blue-focused palette with transparency effects
- **Icons**: Comprehensive icon library for intuitive navigation

## 🖥️ Pages Overview

### Home (`/`)
Landing page featuring the EtherLock branding and hero section with promotional content about blockchain security.

### Sign In (`/signin`)
User authentication page with email login functionality and glassmorphic design elements.

### Sign Up (`/signup`)
User registration interface for new account creation.

### Files (`/files`)
File management dashboard displaying:
- File search functionality
- File listing with metadata (name, size, date)
- Clean tabular layout for easy file browsing

### File Info (`/fileinfo`)
Detailed file information page showing:
- File metadata and properties
- IPFS hash and object URL
- File actions (share, delete, download)
- Owner and creation details

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd etherLock2.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 Future Enhancements

- Complete blockchain integration
- Real file upload/download functionality
- User authentication backend
- IPFS integration for decentralized storage
- Enhanced security features
- Mobile app development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dev Chauhan**

---

*EtherLock 2.0 - Where Security Meets Blockchain: Elevating Your Digital Asset Protection with Our Advanced eVault Technology.*