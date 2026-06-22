import { IconStar } from "./Icons";

function SectionTag({ children }) {
  return (
    <span className="section-tag">
      <IconStar className="tag-spark" />
      {children}
      <IconStar className="tag-spark" />
    </span>
  );
}

export default SectionTag;
