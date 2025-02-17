import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import { Select, SelectItem } from "./components/select";
import { Tabs, TabsTrigger, TabsContent } from "./components/Tabs";
import "./App.scss"; 
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { BiPalette, BiText, BiHomeAlt, BiInfoCircle, BiUser } from 'react-icons/bi';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { BiRotateLeft } from 'react-icons/bi';
import { BiDownload } from 'react-icons/bi';
import { BiSquare } from 'react-icons/bi';
import { BiSun, BiMoon } from 'react-icons/bi';

const mockVariations = [
  { id: 1, name: "Modern Minimalist" },
  { id: 2, name: "Bold and Vibrant" },
  { id: 3, name: "Elegant Serif" },
  { id: 4, name: "Playful Geometric" },
  { id: 5, name: "Corporate Professional" },
];

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {isDark ? <BiSun size={16} /> : <BiMoon size={16} />}
    </Button>
  );
}

function AppContent() {
  const [brandName, setBrandName] = useState("");
  const [theme, setTheme] = useState("");
  const [selectedVariation, setSelectedVariation] = useState(null);

  const handleGenerateDesignSystem = () => {
    console.log(
      "Generating design system for:",
      brandName,
      "with theme:",
      theme
    );
    setSelectedVariation(mockVariations[0]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-content">
          <h1 className="app-header-title">AI Design System Explorer</h1>
          <nav className="app-header-nav">
            <Button variant="ghost">
              <BiHomeAlt size={16} />
              <span>Home</span>
            </Button>
            <Button variant="ghost">
              <BiInfoCircle size={16} />
              <span>About</span>
            </Button>
            <Button variant="ghost">
              <BiUser size={16} />
              <span>Contact</span>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
        <div className="app-header-icons">
          <Button variant="ghost" className="icon-button">
            <BiRotateLeft size={16} />
            <span>Reset</span>
          </Button>
          <Button variant="ghost" className="icon-button">
            <BiDownload size={16} />
            <span>Download</span>
          </Button>
          <Button variant="ghost" className="icon-button">
            <BiSquare size={16} />
            <span>Fullscreen</span>
          </Button>
        </div>
      </header>
      <main className="app-main">
        <div className="app-sidebar">
          <div className="app-sidebar-input-area">
            <div>
              <Label htmlFor="brand-name">Brand Name</Label>
              <Input
                id="brand-name"
                placeholder="Enter your brand name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select value={theme} onValueChange={setTheme} placeholder="Select a theme">
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="playful">Playful</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
              </Select>
            </div>
            <Button className="app-generate-button" onClick={handleGenerateDesignSystem}>
              Generate Design System
            </Button>
          </div>
          <div className="app-sidebar-variations">
            <h2 className="app-sidebar-variations-title">Variations</h2>
            <div className="app-sidebar-variations-buttons">
              {mockVariations.map((variation) => (
                <Button
                  key={variation.id}
                  variant={
                    selectedVariation?.id === variation.id
                      ? "default"
                      : "outline"
                  }
                  className="app-sidebar-variation-button"
                  onClick={() => setSelectedVariation(variation)}
                >
                  {variation.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="app-content">
          <Tabs defaultValue="colors">
            <TabsTrigger value="colors">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BiPalette size={20} />
                Colors
              </span>
            </TabsTrigger>
            <TabsTrigger value="typography">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BiText size={20} />
                Typography
              </span>
            </TabsTrigger>
            <TabsTrigger value="components">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiOutlineSquare3Stack3D size={20} />
                Components
              </span>
            </TabsTrigger>
            <TabsContent value="colors">
              <div className="color-grid">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="color-item">
                    <div className="color-sample-container">
                      <div className="color-box" style={{ backgroundColor: '#E5E5E5', width: '40%', height: '100%' }} />
                      <div className="color-inspiration-image" style={{ backgroundColor: '#000000', width: '60%', height: '100%' }} />
                    </div>
                    <div className="color-info">
                      <p className="color-name">Primary {i + 1}</p>
                      <p className="color-hex">#HEXCODE</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="typography" >
              <div className="typography-section">
                <h1 className="typography-h1">Heading 1</h1>
                <p className="typography-description">
                  Font: Roboto, Size: 36px, Weight: Bold
                </p>
              </div>
              <div className="typography-section">
                <h2 className="typography-h2">Heading 2</h2>
                <p className="typography-description">
                  Font: Roboto, Size: 30px, Weight: SemiBold
                </p>
              </div>
              <div className="typography-section">
                <p className="typography-body">Body Text</p>
                <p className="typography-description">
                  Font: Open Sans, Size: 16px, Weight: Regular
                </p>
              </div>
            </TabsContent>
            <TabsContent value="components">
              <div className="component-grid">
                <div className="component-item">
                  <Button>Primary Button</Button>
                  <p className="component-name">Button Component</p>
                </div>
                <div className="component-item">
                  <Input placeholder="Input field" />
                  <p className="component-name">Input Component</p>
                </div>
                <div className="component-item">
                  <Select placeholder="Select option">
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </Select>
                  <p className="component-name">Select Component</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="app-footer">
        <div className="app-footer-content">
          <p className="app-footer-text">
            © 2025 AI Design System Explorer. All rights reserved.
          </p>
          <Button>
            Export Design System
          </Button>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;