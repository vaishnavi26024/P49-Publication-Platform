function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#0a1929"/>
      <circle cx="35" cy="22" r="6" fill="#00d4ff"/>
      <circle cx="35" cy="22" r="3" fill="#0a1929"/>
      <path d="M 15 35 L 25 55 L 35 40 L 45 60 L 55 35 L 65 55 L 75 40" 
            stroke="#00bfff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 15 50 L 25 70 L 35 55 L 45 75 L 55 50 L 65 70 L 75 55" 
            stroke="#0099cc" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 15 65 L 25 85 L 35 70 L 45 90 L 55 65 L 65 85 L 75 70" 
            stroke="#00d4ff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 20 30 L 28 50" stroke="#999" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 25 30 L 33 50" stroke="#bbb" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export default Logo;
