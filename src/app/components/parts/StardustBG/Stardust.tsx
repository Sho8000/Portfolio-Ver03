"use client"
import React, { useEffect, useRef } from 'react';

interface circleObject {
  x:number;
  y:number;
  radius:number;
  dx:number;
  dy:number;
  opacity:number;
  opacityDirection:number;
}

const Stardust: React.FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    let circles:circleObject[] = [];
    const numCircles = 150;

    if(canvas){
      const initialCircle = () => {
        circles = [];
        for (let i = 0; i < numCircles; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = Math.random() * 5;
          const dx = (Math.random()-0.5) * 1.5;
          const dy = (Math.random()-0.5) * 1.5;
          const opacity = Math.random();
          const opacityDirection = Math.random() > 0.5 ? 1 : -1;
          circles.push({x,y,radius,dx,dy,opacity, opacityDirection});
        }
      }

      const updateCanvasSize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initialCircle();
      }

      const ctx = canvas.getContext("2d");
      updateCanvasSize();

      if(ctx){
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          circles.forEach((circle)=>{
            circle.x += circle.dx;
            circle.y += circle.dy;

            if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
              circle.dx = -circle.dx;
            }
            if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
              circle.dy = -circle.dy;
            }

            circle.opacity += circle.opacityDirection * 0.001; // Smaller step for slower fading
            if (circle.opacity < 0) {
              circle.opacity = 0;
              circle.opacityDirection = 1; // Start fading in
            } else if (circle.opacity > 0.9) {
              circle.opacity = 0.5;
              circle.opacityDirection = -1; // Start fading out
            }

            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(255, 255, 255, ${circle.opacity})`;
            ctx.filter = "blur(1px)"
            ctx.stroke();
          })
          requestAnimationFrame(animate);
        }

        window.addEventListener('resize', updateCanvasSize);
        animate();

        return () => {
          window.removeEventListener('resize', updateCanvasSize);
        };
      }
    }
  },[])
  
  return <canvas ref={canvasRef} className='w-[100vw] h-[100vh] fixed top-0 left-0 -z-10'/>;
};

export default Stardust;
