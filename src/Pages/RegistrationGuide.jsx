import React from "react";
import { Link } from "react-router-dom";

const RegistrationGuide = () => {
  return (
    <main class="min-h-screen bg-background">
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Registration Guide
          </h1>
          <p class="text-lg text-muted-foreground text-balance">
            Follow these simple steps to create your forex trading account and
            start your journey with us.
          </p>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-card border border-border rounded-lg p-8 mb-12">
            <div class="flex items-start gap-3 mb-6">
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
                class="lucide lucide-circle-alert text-primary shrink-0 mt-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <div>
                <h2 class="text-2xl font-bold text-foreground mb-4">
                  What You&#x27;ll Need
                </h2>
                <p class="text-muted-foreground mb-6">
                  Before you start, make sure you have the following documents
                  and information ready:
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">Valid email address</span>
              </div>
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">
                  Strong password (8+ characters)
                </span>
              </div>
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">Government-issued ID</span>
              </div>
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">Proof of address</span>
              </div>
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">Age 18 or older</span>
              </div>
              <div class="flex items-center gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span class="text-foreground">
                  Acceptance of terms and conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12">
            Step-by-Step Process
          </h2>
          <div class="space-y-8">
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Visit Our Website
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Go to our main website and click the &#x27;Get Started&#x27;
                    button or navigate to the registration page.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Look for the prominent &#x27;Get Started&#x27; button on
                        the homepage
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You can also access registration from the top navigation
                        menu
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Ensure you&#x27;re on a secure connection (HTTPS)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Enter Your Email Address
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Provide a valid email address that you have access to. This
                    will be your login credential.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Use an email address you check regularly
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Double-check for typos to avoid verification issues
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        We&#x27;ll send a verification link to this email
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Create a Strong Password
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Set a secure password with at least 8 characters including
                    uppercase, lowercase, numbers, and symbols.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Password must be at least 8 characters long
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Include at least one uppercase letter (A-Z)
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Include at least one number (0-9)
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Include at least one special character (!@#$%^&amp;*)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Verify Your Email
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Check your email inbox for a verification link and click it
                    to confirm your email address.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Check your spam/junk folder if you don&#x27;t see the
                        email
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        The verification link expires in 24 hours
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Click the link to activate your account
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Complete Your Profile
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Fill in your personal information including name, date of
                    birth, and contact details.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Provide accurate personal information
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        This information is used for account verification and
                        compliance
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You can update this information later in your account
                        settings
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Verify Your Identity
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Upload a valid government-issued ID and proof of address to
                    complete KYC verification.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Accepted ID types: Passport, Driver&#x27;s License,
                        National ID
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Proof of address: Recent utility bill or bank statement
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Documents must be clear and readable
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Verification typically takes 24-48 hours
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"></div>
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    7
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Accept Terms &amp; Conditions
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Review and accept our terms of service, privacy policy, and
                    risk disclosure documents.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Read through all documents carefully
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You must accept all terms to proceed
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You can download copies for your records
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="flex gap-6">
                <div class="shrink-0">
                  <div class="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    8
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Account Activated
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Your account is now ready to use! You can log in and proceed
                    to deposit funds.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You&#x27;ll receive a confirmation email
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        Your account is fully verified and active
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-primary mt-1">•</span>
                      <span class="text-sm text-foreground">
                        You can now deposit funds and start trading
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-8">Pro Tips</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-card border border-border rounded-lg p-6">
              <h3 class="font-bold text-foreground mb-3">Security First</h3>
              <p class="text-sm text-muted-foreground">
                Use a unique, strong password and enable two-factor
                authentication for maximum security of your account.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <h3 class="font-bold text-foreground mb-3">Document Quality</h3>
              <p class="text-sm text-muted-foreground">
                Ensure your ID and proof of address documents are clear,
                well-lit, and fully visible for faster verification.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <h3 class="font-bold text-foreground mb-3">Email Verification</h3>
              <p class="text-sm text-muted-foreground">
                Check your spam folder if you don&#x27;t receive the
                verification email within 5 minutes of registration.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <h3 class="font-bold text-foreground mb-3">
                Account Information
              </h3>
              <p class="text-sm text-muted-foreground">
                Keep your account information up to date. Any changes to
                personal details should be updated immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 class="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="mb-6 opacity-90">
              Follow these steps and you&#x27;ll have your account set up in
              just a few minutes.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                Start Registration
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
              </button>
              <Link
                class="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                to="/deposit-guide"
              >
                Next: Deposit Guide
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationGuide;
