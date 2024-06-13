const fs = require('fs');
const path = require('path');

const folders = [
  'public',
  'src',
  'src/assets',
  'src/components',
  'src/components/Blog',
  'src/components/Ecommerce',
  'src/components/Minting',
  'src/components/Layout',
  'src/pages',
  'src/services',
  'src/store'
];

const files = {
  'public/index.html': '<!DOCTYPE html><html><head><title>MyMoonBags</title></head><body><div id="root"></div></body></html>',
  'src/index.js': "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport './styles.css';\n\nReactDOM.render(<App />, document.getElementById('root'));",
  'src/App.js': "import React from 'react';\nimport { BrowserRouter as Router, Route, Switch } from 'react-router-dom';\nimport Home from './pages/Home';\n// Import other pages like Blog, Store, Mint\n\nconst App = () => {\n  return (\n    <Router>\n      <Switch>\n        <Route exact path=\"/\" component={Home} />\n        {/* Define routes for other pages */}\n      </Switch>\n    </Router>\n  );\n};\n\nexport default App;",
  'src/pages/Home.js': "import React from 'react';\nimport './Home.css';\n\nconst Home = () => {\n  return (\n    <div className=\"home\">\n      <header className=\"header\">\n        <div className=\"container\">\n          <h1>Welcome to MyMoonBags.com!</h1>\n          <p>Explore the World of Web3 with Connor (Moonbags Galore)</p>\n          <a href=\"/blog\" className=\"cta-button\">Get Started</a>\n        </div>\n      </header>\n      {/* Add other sections here */}\n    </div>\n  );\n};\n\nexport default Home;",
  'src/services/api.js': "import axios from 'axios';\n\nconst API_URL = 'https://api.mymoonbags.com';\n\nexport const getBlogPosts = async () => {\n  try {\n    const response = await axios.get(`${API_URL}/blog/posts`);\n    return response.data;\n  } catch (error) {\n    console.error('Error fetching blog posts:', error);\n    return [];\n  }\n};\n\n// Add other API calls as needed\n",
  'src/styles.css': "/* Add your global styles here */",
  'src/pages/Home.css': ".home {\n  font-family: Arial, sans-serif;\n}\n\n.header {\n  background: url('/path/to/hero-background.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 100px 0;\n  text-align: center;\n  color: white;\n}\n\n.header .container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.header h1 {\n  font-size: 3em;\n}\n\n.header p {\n  font-size: 1.5em;\n}\n\n.header .cta-button {\n  background-color: #ff6f61;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n}\n\n.section {\n  padding: 50px 0;\n}\n\n.about, .guides, .blog, .products, .explorations {\n  text-align: center;\n}\n\n.guides-grid, .blog-grid, .products-carousel, .explorations-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n}\n\n.guide-item, .blog-item, .product-item, .exploration-item {\n  background: white;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  max-width: 300px;\n}\n\n.guide-item img, .blog-item img, .product-item img {\n  width: 100%;\n  height: auto;\n}\n\n.footer {\n  background: #333;\n  color: white;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.footer nav a {\n  color: white;\n  margin: 0 10px;\n  text-decoration: none;\n}\n\n.footer .newsletter-signup {\n  margin-top: 20px;\n}\n\n.footer .newsletter-signup input {\n  padding: 10px;\n  margin-right: 10px;\n}\n\n.footer .legal-links a {\n  color: white;\n  margin: 0 10px;\n  text-decoration: none;\n}\n"
};

folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`Created folder: ${folder}`);
  }
});

Object.keys(files).forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, files[file]);
    console.log(`Created file: ${file}`);
  }
});

console.log('Project structure created successfully.');
