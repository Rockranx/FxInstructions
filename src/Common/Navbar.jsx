import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center gap-2" to="/">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  FX
                </span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">
                ForexBroker
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/registration-guide"
              >
                Registration
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/deposit-guide"
              >
                Deposit
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/withdrawal-guide"
              >
                Withdrawal
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/mt5-login"
              >
                MT5 Login
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/how-to-trade"
              >
                Trading
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/faq"
              >
                FAQ
              </Link>
              <Link
                className="text-sm text-foreground hover:text-primary transition-colors"
                to="/support"
              >
                Support
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col gap-8 text-center">
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/registration-guide"
          >
            Registration
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/deposit-guide"
          >
            Deposit
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/withdrawal-guide"
          >
            Withdrawal
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/mt5-login"
          >
            MT5 Login
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/how-to-trade"
          >
            Trading
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            to="/support"
          >
            Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
