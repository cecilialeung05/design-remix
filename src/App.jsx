import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import { Select, SelectItem } from "./components/Select";
import { Tabs, TabsTrigger, TabsContent } from "./components/Tabs";
import "./App.scss"; 
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";


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
      {isDark ? '☀️' : '🌙'}
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
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <ThemeToggle /> 
          </nav>
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
   
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography">

              Typography
            </TabsTrigger>
            <TabsTrigger value="components">

              Components
            </TabsTrigger>
            <TabsContent value="colors" >
              <div className="color-grid">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="color-item">
                    <div className="color-box" />
                    <p className="color-name">Primary {i + 1}</p>
                    <p className="color-hex">#HEXCODE</p>
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