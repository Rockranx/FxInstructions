import React from "react";
import { Link } from "react-router-dom";

const DepositGuide = () => {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Deposit Guide
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Learn how to fund your trading account with multiple secure
              payment methods.
            </p>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Payment Methods
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
                      Visa, Mastercard, and other major cards
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Processing Time:
                    </span>
                    <span className="font-semibold text-foreground">
                      Instant
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fees:</span>
                    <span className="font-semibold text-foreground">1-2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Deposit:</span>
                    <span className="font-semibold text-foreground">$10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Deposit:</span>
                    <span className="font-semibold text-foreground">
                      $50,000
                    </span>
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
                      Direct transfer from your bank account
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Processing Time:
                    </span>
                    <span className="font-semibold text-foreground">
                      1-3 business days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fees:</span>
                    <span className="font-semibold text-foreground">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Deposit:</span>
                    <span className="font-semibold text-foreground">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Deposit:</span>
                    <span className="font-semibold text-foreground">
                      Unlimited
                    </span>
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
                      className="lucide lucide-shield"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      E-Wallets
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      PayPal, Skrill, Neteller, and more
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Processing Time:
                    </span>
                    <span className="font-semibold text-foreground">
                      Instant - 1 hour
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fees:</span>
                    <span className="font-semibold text-foreground">0-2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Deposit:</span>
                    <span className="font-semibold text-foreground">$10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Deposit:</span>
                    <span className="font-semibold text-foreground">
                      $25,000
                    </span>
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
                    <span className="text-muted-foreground">
                      Processing Time:
                    </span>
                    <span className="font-semibold text-foreground">
                      10-30 minutes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fees:</span>
                    <span className="font-semibold text-foreground">
                      Network fees apply
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Deposit:</span>
                    <span className="font-semibold text-foreground">$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Deposit:</span>
                    <span className="font-semibold text-foreground">
                      $100,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              How to Deposit
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
                      Navigate to Deposit Section
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Find the deposit option in your account dashboard.
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
                          Look for &#x27;Deposit&#x27; or &#x27;Fund
                          Account&#x27; in the main menu
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
                          Click on the deposit option to proceed
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
                      Select Payment Method
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Choose your preferred payment method from the available
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
                          Consider the minimum and maximum deposit limits
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
                      Enter Deposit Amount
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Specify the amount you want to deposit into your trading
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
                          The system will show you the final amount after fees
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
                          Double-check the amount before proceeding
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
                      Complete Payment
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Follow the payment provider&#x27;s instructions to
                      complete the transaction.
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
                          You may be redirected to your bank or payment provider
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
                          Enter your payment details securely
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
                          Confirm the transaction
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
                      6
                    </div>
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Confirmation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Receive confirmation of your deposit and funds appear in
                      your account.
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
                          Funds will appear in your account based on the
                          processing time
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
                          You can now start trading with your deposited funds
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                  className="lucide lucide-shield text-primary shrink-0 mt-1"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Security &amp; Safety
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Your deposits are protected with industry-leading security
                    measures:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
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
                    className="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      SSL Encryption
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All transactions are encrypted with 256-bit SSL
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                    className="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      PCI Compliance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We comply with PCI DSS standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                    className="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Fraud Detection
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced fraud detection systems protect your account
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                    className="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Segregated Accounts
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Client funds are kept in segregated accounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Helpful Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Start Small</h3>
                <p className="text-sm text-muted-foreground">
                  If you&#x27;re new to trading, start with a smaller deposit to
                  get comfortable with the platform.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Use Secure Connections
                </h3>
                <p className="text-sm text-muted-foreground">
                  Always deposit from a secure, private internet connection.
                  Avoid public WiFi.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Keep Records</h3>
                <p className="text-sm text-muted-foreground">
                  Save all deposit confirmations and transaction receipts for
                  your records.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Check Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Be aware of daily, weekly, and monthly deposit limits that may
                  apply to your account.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Verify Details
                </h3>
                <p className="text-sm text-muted-foreground">
                  Always verify the deposit amount and payment method before
                  confirming the transaction.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Contact Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  If you encounter any issues, contact our support team
                  immediately for assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-3">
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
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Important Notice
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Forex trading involves substantial risk of loss. Past
                    performance is not indicative of future results. Only
                    deposit funds that you can afford to lose. Please review our
                    risk disclosure before trading.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about deposits or encounter any
                    issues, please contact our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Fund Your Account?
            </h2>
            <p className="mb-6 opacity-90">
              Choose your preferred payment method and start trading today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                Make a Deposit
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
                to="/withdrawal-guide"
              >
                Next: Withdrawal Guide
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
    </>
  );
};

export default DepositGuide;
