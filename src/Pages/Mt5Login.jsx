import React from "react";
import { Link } from "react-router-dom";

const Mt5Login = () => {
  return (
    <main class="min-h-screen bg-background">
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            MT5 Login Guide
          </h1>
          <p class="text-lg text-muted-foreground text-balance">
            Set up and log in to MetaTrader 5 on desktop and mobile devices.
          </p>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12">
            Available Platforms
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    class="lucide lucide-monitor"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-foreground">
                    Windows Desktop
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Full-featured trading platform for Windows computers
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-sm text-muted-foreground mb-4">
                  <span class="font-semibold text-foreground">
                    Requirements:
                  </span>
                  Windows 7 or later, 100MB disk space
                </p>
              </div>
              <Link
                href="#"
                class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
              >
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download
              </Link>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    class="lucide lucide-monitor"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-foreground">Mac Desktop</h3>
                  <p class="text-sm text-muted-foreground">
                    Professional trading platform for Mac computers
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-sm text-muted-foreground mb-4">
                  <span class="font-semibold text-foreground">
                    Requirements:
                  </span>
                  macOS 10.12 or later, 100MB disk space
                </p>
              </div>
              <Link
                href="#"
                class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
              >
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download
              </Link>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    class="lucide lucide-smartphone"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-foreground">iOS Mobile</h3>
                  <p class="text-sm text-muted-foreground">
                    Trade on the go with our iOS app
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-sm text-muted-foreground mb-4">
                  <span class="font-semibold text-foreground">
                    Requirements:
                  </span>
                  iOS 12.0 or later
                </p>
              </div>
              <Link
                href="#"
                class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
              >
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download
              </Link>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
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
                    class="lucide lucide-smartphone"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-foreground">
                    Android Mobile
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Trade on the go with our Android app
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-sm text-muted-foreground mb-4">
                  <span class="font-semibold text-foreground">
                    Requirements:
                  </span>
                  Android 5.0 or later
                </p>
              </div>
              <Link
                href="#"
                class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
              >
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12">
            Desktop Setup
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
                    Download MT5
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Visit our website and download the MT5 platform for your
                    operating system.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Go to our downloads page
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Select your operating system (Windows or Mac)
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Click &#x27;Download&#x27; to start the installation
                        file
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Wait for the download to complete
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
                    Install the Platform
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Run the installer and follow the installation wizard.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Double-click the downloaded file to start installation
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Accept the license agreement
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Choose your installation directory
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Click &#x27;Install&#x27; and wait for completion
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
                    Launch MT5
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Open the MetaTrader 5 application from your desktop or
                    applications folder.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Find the MT5 icon on your desktop or in your
                        applications
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Double-click to launch the platform
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Wait for the platform to fully load
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        You&#x27;ll see the login screen
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
                    Enter Your Credentials
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Log in with your account credentials from our broker.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Enter your account number (provided in your welcome
                        email)
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Enter your password
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Select our server from the dropdown list
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Click &#x27;Login&#x27; to proceed
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
                    5
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Start Trading
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Your account is now connected and ready to trade.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        You&#x27;ll see your account balance and trading history
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Access the market watch to view available instruments
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Open charts and place your first trade
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Monitor your positions in the terminal window
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-12">Mobile Setup</h2>
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
                    Download the App
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Download MetaTrader 5 from your device&#x27;s app store.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Open the App Store (iOS) or Google Play (Android)
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Search for &#x27;MetaTrader 5&#x27;
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Tap &#x27;Get&#x27; or &#x27;Install&#x27; to download
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Wait for the installation to complete
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
                    Open the App
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Launch the MetaTrader 5 app on your mobile device.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Find the MT5 icon on your home screen
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Tap to open the application
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Wait for the app to fully load
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        You&#x27;ll see the login screen
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
                  <h3 class="text-xl font-bold text-foreground mb-2">Log In</h3>
                  <p class="text-muted-foreground mb-4">
                    Enter your account credentials to log in.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Tap &#x27;Login&#x27; or &#x27;New Account&#x27;
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Enter your account number
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Enter your password
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Select our server from the list
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
                    Verify Your Account
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Complete any verification steps if prompted.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        You may receive a verification code via email or SMS
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Enter the code in the app
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        This adds an extra layer of security
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Tap &#x27;Verify&#x27; to proceed
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
                    5
                  </div>
                </div>
                <div class="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    Start Mobile Trading
                  </h3>
                  <p class="text-muted-foreground mb-4">
                    Your mobile trading account is now active.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        View your account balance and positions
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Access the market watch for available instruments
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Place trades directly from your mobile device
                      </span>
                    </li>
                    <li class="flex items-start gap-3">
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
                        class="lucide lucide-circle-check-big text-primary mt-1 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span class="text-sm text-foreground">
                        Receive push notifications for important updates
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
                class="lucide lucide-lock text-primary shrink-0 mt-1"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <div>
                <h2 class="text-2xl font-bold text-foreground mb-4">
                  Security Tips
                </h2>
                <p class="text-muted-foreground mb-6">
                  Keep your MT5 account secure with these important practices:
                </p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-semibold text-foreground mb-1">
                    Strong Password
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Use a unique, complex password for your MT5 account
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-semibold text-foreground mb-1">
                    Two-Factor Auth
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Enable 2FA for additional account security
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-semibold text-foreground mb-1">
                    Secure Connection
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Always use a secure internet connection
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
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
                  class="lucide lucide-circle-check-big text-primary shrink-0 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-semibold text-foreground mb-1">Log Out</h3>
                  <p class="text-sm text-muted-foreground">
                    Always log out when finished trading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-foreground mb-8">
            Troubleshooting
          </h2>
          <div class="space-y-4">
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">Forgot Your Password?</h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Click &#x27;Forgot Password&#x27; on the login screen.
                You&#x27;ll receive an email with instructions to reset your
                password. Follow the link and create a new password.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">
                  Can&#x27;t Find Our Server?
                </h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Make sure you&#x27;re selecting the correct server. Our server
                name is typically &#x27;ForexBroker-Live&#x27; or
                &#x27;ForexBroker-Demo&#x27;. If you can&#x27;t find it, contact
                support.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">Login Failed Error</h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Check that your account number and password are correct. Ensure
                you&#x27;re using the right server. If the problem persists,
                contact our support team.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">
                  Platform Won&#x27;t Connect
                </h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Check your internet connection. Try restarting the platform. If
                you&#x27;re behind a firewall, you may need to configure your
                network settings. Contact support if the issue continues.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">
                  Mobile App Won&#x27;t Install
                </h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Ensure you have enough storage space on your device. Check that
                your device meets the minimum requirements. Try clearing your
                app store cache and try again.
              </p>
            </div>
            <div class="bg-card border border-border rounded-lg p-6">
              <div class="flex items-start gap-3 mb-3">
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
                  class="lucide lucide-circle-alert text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                <h3 class="font-bold text-foreground">
                  Account Balance Shows Zero
                </h3>
              </div>
              <p class="text-sm text-muted-foreground ml-8">
                Refresh your account by closing and reopening the platform.
                Check that you&#x27;re logged into the correct account. Contact
                support if the balance still doesn&#x27;t appear.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
          <p class="mb-6 opacity-90">
            Download MT5 and log in to access professional trading tools.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
              Download MT5
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
                class="lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </button>
            <Link
              class="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              to="/how-to-trade"
            >
              Next: How to Trade
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
      </section>
    </main>
  );
};

export default Mt5Login;
