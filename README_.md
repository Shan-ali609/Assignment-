# React + Vite
  
# 🚛 Premium Skip Hire - React App
  
A responsive React app that allows users to choose from various skip sizes for hire, view pricing with VAT, and see whether a skip can be placed on the road.
  
# ✨ Key Features

- ✅ **Dynamic skip size selection** with images and size meters
- 📊 **VAT-inclusive pricing** calculated and displayed in real time
- 🚫 Clearly labeled **"Not Allowed on Road"** skips
- 📌 Sticky summary banner displaying:
  - Skip size
  - Days
  - Total price with VAT
  - **Select** or **Cancel** option
- 📱 **Fully responsive** layout using Tailwind CSS
- 🎨 Clean, modern UI and intuitive UX



# 💰 VAT Calculation

Total price is dynamically calculated using this formula:

```js
totalPrice = price + (price * vat / 100);

  
# 🛠️ Tech Stack
  
- React
- Tailwind CSS

## Project Structure

react-app/
├── src/
│ ├── data
│ │ └── skipdata.js # Data used for skip functionality
│ ├── pages
│ │ └── SelectSkip.jsx # Page component for selecting skip options
│ ├── App.jsx # Main React app component
│ └── main.jsx # Entry point for React app
├── public/ # Static assets like images and icons
├── index.html # HTML template for Vite
├── vite.config.js # Vite configuration file
└── package.json # Project dependencies and scripts



# 🔗 Live Demo
  
Check out the live version here:  
👉 [View App on Vercel](https://assignment-hazel-rho.vercel.app/ )
  
# 🚀 Getting Started
  
```bash
# Clone the repo
git clone https://github.com/Shan-ali609/Assignment-.git
cd skip-hire-app
  
# Install dependencies
npm install
  
# Start the development server
npm run dev
  