import { useState } from "react";
import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12">
      <Logo />

      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-6 text-white">
        <NavLinks />
        <Button variant="primary">Login</Button>
      </div>

      {/* Mobile */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-16 right-6 bg-white text-blue-600 shadow-lg rounded-md p-4 md:hidden">
          <ul className="space-y-4">
            <li>Home</li>
            <li>Landings</li>
            <li>Pages</li>
            <li>Docs</li>
            <li>Help</li>
            <li>
              <Button variant="primary">Login</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
