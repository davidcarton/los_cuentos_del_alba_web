const NODOS = [
  [40, 380], [180, 120], [340, 260], [520, 60],
  [620, 320], [780, 140], [860, 400], [120, 500],
  [460, 480], [700, 540],
];

const LINEAS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [2, 8], [4, 9], [1, 3], [7, 8], [8, 9],
];

function LeyLines() {
  return (
    <svg
      className="ley-lines"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {LINEAS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODOS[a][0]}
          y1={NODOS[a][1]}
          x2={NODOS[b][0]}
          y2={NODOS[b][1]}
          className="ley-line"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
      {NODOS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={2.4}
          className="ley-node"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}

export default LeyLines;
