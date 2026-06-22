import "../styles/GoldRule.css";
import { IconSwords, IconStar } from "./Icons";

function GoldRule({ compact = false }) {
  return (
    <div className={`gold-rule-container${compact ? " compact" : ""}`}>
      <div className="rule-line"></div>
      <IconSwords className="rule-gem" />
      <IconStar className="rule-gem ember" />
      <IconSwords className="rule-gem" />
      <div className="rule-line right"></div>
    </div>
  );
}

export default GoldRule;
