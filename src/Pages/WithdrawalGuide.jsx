import React from "react";
import { Link } from "react-router-dom";

const WithdrawalGuide = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Withdrawal Guide
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Learn how to withdraw your profits and manage your funds with ease.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="flex items-start gap-3 mb-6">
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
                className="lucide lucide-circle-alert text-primary shrink-0 mt-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Withdrawal Requirements
                </h2>
                <p className="text-muted-foreground mb-6">
                  Before you can withdraw funds, ensure you meet the following
                  requirements:
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-foreground">
                  Verified account with completed KYC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-foreground">
                  Sufficient available balance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-foreground">
                  Valid withdrawal method on file
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-foreground">
                  No pending trades or open positions (may apply)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-foreground">
                  Compliance with withdrawal policies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Withdrawal Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    className="lucide lucide-credit-card"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Credit/Debit Card
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Withdraw to your original card
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="font-semibold text-foreground">
                    3-5 business days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fees:</span>
                  <span className="font-semibold text-foreground">1-2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Withdrawal:</span>
                  <span className="font-semibold text-foreground">$10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Withdrawal:</span>
                  <span className="font-semibold text-foreground">$50,000</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    className="lucide lucide-dollar-sign"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Bank Transfer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Direct transfer to your bank account
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="font-semibold text-foreground">
                    3-7 business days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fees:</span>
                  <span className="font-semibold text-foreground">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Withdrawal:</span>
                  <span className="font-semibold text-foreground">$100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Withdrawal:</span>
                  <span className="font-semibold text-foreground">Unlimited</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    className="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">E-Wallets</h3>
                  <p className="text-sm text-muted-foreground">
                    PayPal, Skrill, Neteller, and more
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="font-semibold text-foreground">1-24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fees:</span>
                  <span className="font-semibold text-foreground">0-2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Withdrawal:</span>
                  <span className="font-semibold text-foreground">$10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Withdrawal:</span>
                  <span className="font-semibold text-foreground">$25,000</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    className="lucide lucide-trending-down"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                    <polyline points="16 17 22 17 22 11"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Cryptocurrency
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Bitcoin, Ethereum, and other cryptocurrencies
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="font-semibold text-foreground">
                    30 minutes - 2 hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fees:</span>
                  <span className="font-semibold text-foreground">
                    Network fees apply
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Withdrawal:</span>
                  <span className="font-semibold text-foreground">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Withdrawal:</span>
                  <span className="font-semibold text-foreground">$100,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            How to Withdraw
          </h2>
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Log In to Your Account
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Access your account using your registered email and
                    password.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Go to the login page on our website
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Enter your email address and password
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Click &#x27;Log In&#x27; to access your account
                        dashboard
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Navigate to Withdrawal Section
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Find the withdrawal option in your account dashboard.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Look for &#x27;Withdraw&#x27; or &#x27;Request
                        Withdrawal&#x27; in the main menu
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        You can also find it in the account settings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Click on the withdrawal option to proceed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Select Withdrawal Method
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Choose your preferred withdrawal method from the available
                    options.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Review the fees and processing times for each method
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Select the method that works best for you
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Consider the minimum and maximum withdrawal limits
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Enter Withdrawal Amount
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Specify the amount you want to withdraw from your trading
                    account.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Enter an amount within the minimum and maximum limits
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Ensure you have sufficient available balance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        The system will show you the final amount after fees
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Verify Your Identity
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete any additional verification steps required for
                    security.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        You may need to confirm via email or SMS
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Two-factor authentication may be required
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        This protects your account from unauthorized withdrawals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Confirm Withdrawal
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Review and confirm your withdrawal request.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Double-check the amount and withdrawal method
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Verify the destination account details
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Click &#x27;Confirm&#x27; to submit your withdrawal
                        request
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    7
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Processing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your withdrawal request is processed by our team.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Withdrawals are typically processed within 24 hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        You&#x27;ll receive a confirmation email
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Processing time depends on your chosen method
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    8
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Funds Received
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your funds arrive in your designated account.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Funds will appear based on the processing time
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Check your bank account or e-wallet
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm text-foreground">
                        Keep the withdrawal confirmation for your records
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Helpful Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Verify Destination</h3>
              <p className="text-sm text-muted-foreground">
                Always verify that the withdrawal destination is correct before
                confirming.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Check Balance</h3>
              <p className="text-sm text-muted-foreground">
                Ensure you have sufficient available balance for your withdrawal
                request.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Plan Ahead</h3>
              <p className="text-sm text-muted-foreground">
                Consider processing times when planning your withdrawals.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Keep Records</h3>
              <p className="text-sm text-muted-foreground">
                Save all withdrawal confirmations and transaction receipts.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Monitor Status</h3>
              <p className="text-sm text-muted-foreground">
                Track your withdrawal status in your account dashboard.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Contact Support</h3>
              <p className="text-sm text-muted-foreground">
                If your withdrawal is delayed, contact our support team
                immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">
                How long does a withdrawal take?
              </h3>
              <p className="text-sm text-muted-foreground">
                Processing times vary by method: E-wallets are fastest (1-24
                hours), bank transfers take 3-7 business days, and
                cryptocurrency withdrawals typically complete within 30 minutes
                to 2 hours.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">
                Are there withdrawal limits?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, each withdrawal method has minimum and maximum limits. Bank
                transfers typically have no maximum limit, while other methods
                may have daily or monthly caps.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">
                Can I withdraw to a different account?
              </h3>
              <p className="text-sm text-muted-foreground">
                For security reasons, withdrawals must go to the original
                deposit method or a verified account on file. Contact support if
                you need to add a new withdrawal destination.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">
                What if my withdrawal is delayed?
              </h3>
              <p className="text-sm text-muted-foreground">
                If your withdrawal hasn&#x27;t arrived within the expected
                timeframe, contact our support team immediately. We&#x27;ll
                investigate and help resolve the issue.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Withdraw Your Profits?
          </h2>
          <p className="mb-6 opacity-90">
            Choose your preferred withdrawal method and access your funds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
              Request Withdrawal
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <Link
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              to="/mt5-login"
            >
              Next: MT5 Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WithdrawalGuide;
