import { useReveal } from "../hooks/useReveal";

function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
