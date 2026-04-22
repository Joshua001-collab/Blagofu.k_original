# BLAGOFU.K - Nigerian Women's Fashion Brand

A premium, full-stack web application for BLAGOFU.K, a Nigerian women's fashion brand specializing in Ankara, Lace, and Asoebi designs.

## 🌟 Features

### Frontend (Public Website)
- **Hero Section**: Stunning fullscreen showcase with animated text and CTAs
- **Collection Gallery**: Dynamic product display with WhatsApp integration
- **Video Section**: Behind-the-scenes craftsmanship showcase
- **Materials Section**: Fabric showcase (Ankara, Lace, Asoebi)
- **About Section**: Brand story with scroll animations
- **Contact Form**: Message submission with backend integration
- **Footer**: Social links, newsletter, floating WhatsApp button

### Backend (Admin Dashboard)
- **Authentication**: Secure login system with JWT
- **Product Management**: Add, edit, delete products with image upload
- **Material Management**: Manage fabric materials
- **Gallery Management**: Upload and manage gallery images
- **Message Center**: View and manage contact form submissions
- **Dashboard Stats**: Overview of all data

## 🎨 Design Features
- Premium African-inspired color palette (Gold, Wine, Brown, Nude)
- Glassmorphism effects
- Smooth scroll animations
- Hover effects and micro-interactions
- Responsive design for all devices
- Custom scrollbar styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
```bash
cd /mnt/okcomputer/output
```

2. **Install Frontend Dependencies**
```bash
cd app
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

### Running the Application

#### Option 1: Run Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```
Backend will start on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd app
npm run dev
```
Frontend will start on http://localhost:5173

#### Option 2: Build and Serve Frontend Statically

```bash
cd app
npm run build
```
Then serve the `dist` folder using any static server.

### Default Admin Credentials
- **Username**: `admin`
- **Password**: `admin123`

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | Admin login |
| `/api/products` | GET | Get all products |
| `/api/products` | POST | Create product (auth) |
| `/api/products/:id` | PUT | Update product (auth) |
| `/api/products/:id` | DELETE | Delete product (auth) |
| `/api/materials` | GET | Get all materials |
| `/api/materials` | POST | Create material (auth) |
| `/api/materials/:id` | PUT | Update material (auth) |
| `/api/materials/:id` | DELETE | Delete material (auth) |
| `/api/gallery` | GET | Get all gallery images |
| `/api/gallery` | POST | Add gallery image (auth) |
| `/api/gallery/:id` | DELETE | Delete gallery image (auth) |
| `/api/messages` | GET | Get all messages (auth) |
| `/api/messages` | POST | Submit contact form |
| `/api/messages/:id/read` | PATCH | Mark message as read (auth) |
| `/api/messages/:id` | DELETE | Delete message (auth) |
| `/api/stats` | GET | Get dashboard stats (auth) |

### Environment Variables

Create a `.env` file in the frontend `app` folder:
```env
VITE_API_URL=http://localhost:5000/api
```

For production, update the API URL to your backend URL.

## 📁 Project Structure

```
/mnt/okcomputer/output/
├── app/                    # Frontend React application
│   ├── src/
│   │   ├── sections/       # Page sections (Hero, Collection, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript type definitions
│   │   ├── admin/          # Admin dashboard components
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/images/      # Static images
│   └── dist/               # Build output
├── backend/                # Backend Node.js/Express API
│   ├── server.js           # Main server file
│   ├── uploads/            # Uploaded images
│   ├── data/               # JSON data files
│   └── package.json
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

### Backend
- Node.js
- Express.js
- JSON file-based database
- Multer (file uploads)
- JWT authentication
- bcryptjs (password hashing)

## 📱 WhatsApp Integration

Every product and material has an "Order on WhatsApp" button that opens WhatsApp with a pre-filled message. Update the phone number in the components to your actual WhatsApp business number.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` and `src/index.css` to customize the color scheme:
- Gold: `#D4A853`
- Wine: `#8B2635`
- Brown: `#6B4423`
- Nude: `#D4A574`

### Images
Replace images in `app/public/images/` with your own:
- `hero-model.jpg` - Hero section background
- `product-*.jpg` - Product images
- `material-*.jpg` - Material images
- `video-thumbnail.jpg` - Video section thumbnail

## 🔒 Security Notes

1. Change the default admin password immediately after first login
2. Use environment variables for JWT_SECRET in production
3. Implement rate limiting for production use
4. Use HTTPS in production
5. Validate and sanitize all user inputs

## 📄 License

This project is created for BLAGOFU.K fashion brand.

## 🤝 Support

For support or inquiries, contact us via WhatsApp or the contact form on the website.
