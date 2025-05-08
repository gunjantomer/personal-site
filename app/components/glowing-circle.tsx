'use client';
import { useState, useEffect } from 'react';

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out',
        zIndex: 9999, // Ensure it's on top
        background:
          'radial-gradient(600px circle at 300px 300px, rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
      className="w-[600px] h-[600px] rounded-full -ml-[300px] -mt-[300px]"
    ></div>
  );
};

export default GlowingCursor;
