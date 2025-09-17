export default function NavLinks({ className = "" }) {
  return (
    <ul className={`space-x-8 flex ${className}`}>
      <li>Home</li>
      <li>Landings</li>
      <li>Pages</li>
      <li>Docs</li>
      <li>Help</li>
    </ul>
  );
}
