import "../styles/GoldRule.css";

function GoldRule({ compact = false }) {
  return (
    <div className={`gold-rule-container${compact ? " compact" : ""}`}>
      <div className="rule-line"></div>
      <span className="rule-gem">⚔</span>
      <span className="rule-gem ember">✦</span>
      <span className="rule-gem">⚔</span>
      <div className="rule-line right"></div>
    </div>
  );
}

export default GoldRule;
