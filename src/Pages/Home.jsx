import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main class="min-h-screen">
      <section class="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Master Forex Trading
            </h1>
            <p class="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Complete educational platform to guide you through registration,
              deposits, and trading on our professional forex platform
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                to="/registration-guide"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link
                class="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                to="/faq"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Us
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-open"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">
                Step-by-Step Guides
              </h3>
              <p class="text-muted-foreground">
                Learn forex trading from registration to your first trade with
                detailed guides
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shield"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">
                Secure &amp; Safe
              </h3>
              <p class="text-muted-foreground">
                Industry-leading security standards to protect your account and
                funds
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trending-up"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">
                Professional Tools
              </h3>
              <p class="text-muted-foreground">
                Access MT5 platform with advanced charting and analysis tools
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12 text-center">
            Our Guides
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/registration-guide"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Registration Guide
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Create your account in minutes
              </p>
            </Link>
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/deposit-guide"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Deposit Guide
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Fund your account securely
              </p>
            </Link>
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/withdrawal-guide"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Withdrawal Guide
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Withdraw your profits easily
              </p>
            </Link>
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/mt5-login"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  MT5 Login
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Set up and login to MT5
              </p>
            </Link>
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/how-to-trade"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  How to Trade
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Execute your first trade
              </p>
            </Link>
            <Link
              class="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
              to="/faq"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  FAQ
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground">
                Common questions answered
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section class="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p class="text-lg mb-8 opacity-90">
            Follow our comprehensive guides and begin your forex trading journey
            today
          </p>
          <Link
            class="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            to="/registration-guide"
          >
            Start Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
