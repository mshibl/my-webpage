import { useState, useEffect, useRef } from 'react';

export default function Logo() {
  const [mouseDistance, setMouseDistance] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);

  // Track mouse distance
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const logoCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        
        const mousePos = { x: e.clientX, y: e.clientY };
        const distance = Math.sqrt(
          Math.pow(mousePos.x - logoCenter.x, 2) + 
          Math.pow(mousePos.y - logoCenter.y, 2)
        );
        
        // Normalize distance (0 = very close, 1 = far away)
        const maxDistance = 300; 
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        setMouseDistance(normalizedDistance);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate opacity based on mouse distance
  const fadeOpacity = 1 - mouseDistance;

  return (
    <div ref={logoRef} className="relative w-16 h-16 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full rounded-full">
            <img src="/avatar1.png" alt="logo" className="w-full h-full object-cover rounded-full" />
        </div>
        
        <img
          src={'/avatar2.png'}
          style={{ opacity: fadeOpacity }}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-10"
        />
    </div>
  );
}