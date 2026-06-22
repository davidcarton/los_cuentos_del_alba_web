function IconStar({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`icon-rune ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2c0.6 4.2 1.8 7.2 4.6 8.8 1.1 0.6 2.4 1 3.4 1.2-1 0.2-2.3 0.6-3.4 1.2C13.8 14.8 12.6 17.8 12 22c-0.6-4.2-1.8-7.2-4.6-8.8C6.3 12.6 5 12.2 4 12c1-0.2 2.3-0.6 3.4-1.2C10.2 9.2 11.4 6.2 12 2z"
      />
    </svg>
  );
}

function IconDiamond({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`icon-rune ${className}`} aria-hidden="true">
      <path
        d="M12 2L20 12L12 22L4 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M12 7L16 12L12 17L8 12Z" fill="currentColor" />
    </svg>
  );
}

function IconSwords({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`icon-rune ${className}`} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" />
        <path d="M4 4l2.6 0.5M4 4l0.5 2.6" />
        <path d="M20 4l-2.6 0.5M20 4l-0.5 2.6" />
        <path d="M4 20l2.6-0.5M4 20l0.5-2.6" />
        <path d="M20 20l-2.6-0.5M20 20l-0.5-2.6" />
      </g>
    </svg>
  );
}

function IconSeal({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`icon-rune ${className}`} aria-hidden="true">
      <g fill="currentColor">
        <path d="M12 2L14 9L12 12L10 9Z" />
        <path d="M12 22L14 15L12 12L10 15Z" />
        <path d="M2 12L9 10L12 12L9 14Z" />
        <path d="M22 12L15 10L12 12L15 14Z" />
      </g>
      <circle cx="12" cy="12" r="1.6" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export { IconStar, IconDiamond, IconSwords, IconSeal };
