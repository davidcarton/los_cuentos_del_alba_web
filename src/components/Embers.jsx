const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 120,
  }));

const particles = generateParticles(28);

function Embers() {
  return (
    <div className="embers">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ember-p"
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

export default Embers;
