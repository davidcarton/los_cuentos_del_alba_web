import { useMemo } from "react";
import "../styles/EmbersTransition.css";

const PARTICLE_COUNT = 12;

const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 0.2 + 0.4,
    delay: Math.random() * 0.15,
    drift: (Math.random() - 0.5) * 60,
  }));

function EmbersTransition() {
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  return (
    <div className="embers-transition">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ember-transition-p"
          style={{
            left: `${p.left}%`,
            bottom: "0",
            width: p.size,
            height: p.size,
            "--drift": `${p.drift}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default EmbersTransition;
