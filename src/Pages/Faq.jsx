import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <main class="min-h-screen bg-background">
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p class="text-lg text-muted-foreground text-balance">
            Find answers to common questions about our platform, trading, and
            services.
          </p>
        </div>
      </section>
      <section class="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <div class="relative">
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
              class="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search FAQ..."
              class="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value=""
            />
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Getting Started
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is forex trading?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Do I need experience to start trading?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is the minimum deposit?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Can I trade on weekends?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Account &amp; Security
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    How do I verify my account?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Is my money safe with you?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What if I forget my password?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Can I have multiple accounts?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Trading &amp; Positions
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is leverage?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is a pip?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    How do I set a stop loss?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is a take profit order?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Deposits &amp; Withdrawals
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    How long does a deposit take?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Are there deposit fees?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    How long does a withdrawal take?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Can I withdraw to a different account?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              MT5 Platform
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Is MT5 free to use?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Can I use MT5 on mobile?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What if I can&#x27;t log in to MT5?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Can I use multiple devices?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Risk &amp; Compliance
            </h2>
            <div class="space-y-4">
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is the risk of forex trading?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    What is negative balance protection?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    Are there trading restrictions?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button class="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <h3 class="text-lg font-semibold text-foreground text-left">
                    How is my data protected?
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
                    class="lucide lucide-chevron-down text-primary shrink-0 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p class="text-muted-foreground text-lg">
              Our support team is here to help you with any questions or
              concerns.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  class="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-foreground mb-2">Live Chat</h3>
              <p class="text-sm text-muted-foreground mb-4">
                Chat with our support team in real-time for immediate
                assistance.
              </p>
              <button class="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                Start Chat
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </button>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 class="font-bold text-foreground mb-2">Email Support</h3>
              <p class="text-sm text-muted-foreground mb-4">
                Send us an email and we&#x27;ll respond within 24 hours.
              </p>
              <a
                href="mailto:support@forexbroker.com"
                class="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Email Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  class="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-foreground mb-2">Phone Support</h3>
              <p class="text-sm text-muted-foreground mb-4">
                Call our support team during business hours.
              </p>
              <a
                href="tel:+1234567890"
                class="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Call Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p class="mb-6 opacity-90">
            You now have all the information you need. Create your account and
            start trading today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              class="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              to="/registration-guide"
            >
              Get Started Now
            </Link>
            <Link
              class="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              to="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
