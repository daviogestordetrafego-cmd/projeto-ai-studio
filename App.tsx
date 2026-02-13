
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setIsCartOpen(true);
  };

  useEffect(() => {
    const canvas = document.getElementById('magic-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number; y: number; type: string; opacity: number; maxOpacity: number;
      life: number; duration: number; angle: number; velocity: number;
      curve: number; sinFreq: number; sinAmp: number; size: number; color: string;

      constructor(x: number, y: number, type: string) {
        this.x = x;
        this.y = y;
        this.type = type; 
        this.opacity = 0;
        this.maxOpacity = type === 'butterfly' ? 0.6 : 0.8;
        this.life = 0;
        this.duration = 100 + Math.random() * 60;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = 0.6 + Math.random() * 1.2;
        this.curve = (Math.random() - 0.5) * 0.03;
        this.sinFreq = Math.random() * 0.1;
        this.sinAmp = Math.random() * 2;
        this.size = type === 'butterfly' ? 4 + Math.random() * 4 : 1.2 + Math.random() * 1.5;
        const colors = ['#d8b4fe', '#a78bfa', '#c084fc', '#f5d0fe'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.life++;
        let progress = this.life / this.duration;
        if (progress < 0.15) {
          this.opacity = (progress / 0.15) * this.maxOpacity;
        } else if (progress > 0.6) {
          this.opacity = Math.max(0, this.maxOpacity * (1 - (progress - 0.6) / 0.4));
        } else {
          this.opacity = this.maxOpacity;
        }
        this.angle += this.curve;
        this.x += Math.cos(this.angle) * this.velocity + Math.sin(this.life * this.sinFreq) * 0.4;
        this.y += Math.sin(this.angle) * this.velocity - 0.7;
      }

      draw() {
        if (this.opacity <= 0 || !ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        if (this.type === 'butterfly') {
          const wingSwing = Math.sin(this.life * 0.2) * (this.size / 2.5);
          const radiusY = Math.abs(this.size / 2 + wingSwing);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.ellipse(-2, 0, this.size, radiusY, 0.7, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(2, 0, this.size, radiusY, -0.7, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const triggerMagic = (e: any) => {
      const x = e.detail.x;
      const y = e.detail.y;
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          particles.push(new Particle(x, y, 'butterfly'));
        }, i * 90);
      }
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          particles.push(new Particle(x, y, 'firefly'));
        }, Math.random() * 500);
      }
    };

    window.addEventListener('triggerMagic', triggerMagic as any);

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life >= particles[i].duration || particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('triggerMagic', triggerMagic as any);
    };
  }, []);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} toggleCart={toggleCart} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartCount={cartCount} />
      </div>
    </HashRouter>
  );
};

export default App;
