import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InteractiveOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);
  const [clickRipples, setClickRipples] = useState<{id: number, x: number, y: number}[]>([]);
  const [cursorTrail, setCursorTrail] = useState<{id: number, x: number, y: number}[]>([]);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);
  
  // Dynamic color based on mouse position
  const hue = useTransform(mouseX, [-300, 300], [240, 320]);
  const saturation = useTransform(mouseY, [-300, 300], [70, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const relativeX = e.clientX - centerX;
      const relativeY = e.clientY - centerY;
      
      mouseX.set(relativeX);
      mouseY.set(relativeY);
      
      // Add cursor trail effect
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      setCursorTrail(prev => [...prev.slice(-8), newTrail]);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setCursorTrail([]);
    };

    const handleClick = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const rect = orbRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Create ripple effect
      const newRipple = {
        id: Date.now(),
        x: clickX,
        y: clickY
      };
      
      setClickRipples(prev => [...prev, newRipple]);
      setIsClicked(true);
      
      // Remove ripple after animation
      setTimeout(() => {
        setClickRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
      
      setTimeout(() => setIsClicked(false), 200);
    };

    if (orbRef.current) {
      orbRef.current.addEventListener("mousemove", handleMouseMove);
      orbRef.current.addEventListener("mouseleave", handleMouseLeave);
      orbRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (orbRef.current) {
        orbRef.current.removeEventListener("mousemove", handleMouseMove);
        orbRef.current.removeEventListener("mouseleave", handleMouseLeave);
        orbRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={orbRef}
      className="relative w-full h-96 flex items-center justify-center cursor-none"
    >
      {/* Cursor Trail */}
      {cursorTrail.map((trail, index) => (
        <motion.div
          key={trail.id}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary pointer-events-none"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            zIndex: 10 - index
          }}
        />
      ))}

      {/* Click Ripples */}
      {clickRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute border-2 border-primary/60 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50
          }}
        />
      ))}

      {/* Main Orb */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: isClicked ? 1.15 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-64 h-64 relative"
        >
          {/* Outer Energy Ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 animate-pulse"
            style={{
              borderColor: `hsl(${hue.get()}, ${saturation.get()}%, 60%)`
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Middle Ring */}
          <motion.div 
            className="absolute inset-4 rounded-full border shadow-neon-secondary"
            style={{
              borderColor: `hsl(${hue.get()}, ${Math.min(saturation.get() + 20, 100)}%, 70%)`
            }}
            animate={{
              rotate: [0, -180, -360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner Orb - Dynamic Color */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-8 rounded-full shadow-neon-primary backdrop-blur-xl"
            style={{
              background: `linear-gradient(45deg, 
                hsl(${hue.get()}, ${saturation.get()}%, 60%), 
                hsl(${(hue.get() + 60) % 360}, ${Math.min(saturation.get() + 30, 100)}%, 70%))`,
            }}
          />
          
          {/* Pulsing Core */}
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-20 rounded-full bg-white/30 backdrop-blur-xl shadow-neon-primary"
          />

          {/* Energy Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-0.5 h-16 bg-gradient-to-t from-transparent via-primary to-transparent"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "center bottom",
                transform: `translate(-50%, -100%) rotate(${i * 60}deg)`
              }}
              animate={{
                scaleY: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced Particle System */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const radius = 140 + Math.sin(i) * 20;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `hsl(${(hue.get() + i * 30) % 360}, ${saturation.get()}%, 70%)`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [0, Math.cos(angle) * radius, 0],
                y: [0, Math.sin(angle) * radius, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + i * 0.1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Orbiting Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-accent shadow-lg"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: `${80 + i * 30}px center`,
              transform: "translate(-50%, -50%)"
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Interactive Glow */}
      <motion.div
        style={{ x, y }}
        className="absolute pointer-events-none w-40 h-40 rounded-full blur-3xl"
        animate={{
          background: [
            `radial-gradient(circle, hsl(${hue.get()}, ${saturation.get()}%, 60%, 0.3) 0%, transparent 70%)`,
            `radial-gradient(circle, hsl(${(hue.get() + 60) % 360}, ${saturation.get()}%, 70%, 0.4) 0%, transparent 70%)`,
            `radial-gradient(circle, hsl(${hue.get()}, ${saturation.get()}%, 60%, 0.3) 0%, transparent 70%)`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Magnetic Field Effect */}
      <motion.div
        style={{ 
          x: useTransform(x, [0], [0]), 
          y: useTransform(y, [0], [0]) 
        }}
        className="absolute pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`field-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            animate={{
              x: [0, Math.cos(i * Math.PI / 4) * 200, 0],
              y: [0, Math.sin(i * Math.PI / 4) * 200, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Tech Labels with Enhanced Animation */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, y: -20 }}
        className="absolute -top-8 -right-8 glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/30 hover:border-primary/60 transition-all cursor-pointer"
      >
        Oracle DBA
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        whileHover={{ scale: 1.1, y: 20 }}
        className="absolute -bottom-8 -left-8 glass-card px-4 py-2 rounded-full text-sm font-medium border border-secondary/30 hover:border-secondary/60 transition-all cursor-pointer"
      >
        Web3 Expert
      </motion.div>

      <motion.div
        animate={{ 
          x: [-15, 15, -15],
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.1, x: -25 }}
        className="absolute top-1/2 -left-16 glass-card px-3 py-2 rounded-full text-xs font-medium border border-accent/30 hover:border-accent/60 transition-all cursor-pointer"
      >
        Backend Dev
      </motion.div>

      {/* Click instruction */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-foreground-muted"
      >
        Click the orb to create ripples
      </motion.div>
    </div>
  );
};

export default InteractiveOrb;
