import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <main class="min-h-screen bg-linear-to-br from-background via-background to-muted/30">
      <section class="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            We&#x27;re Here to Help
          </h1>
          <p class="text-xl text-muted-foreground mb-2">
            Get in touch with our support team through your preferred channel
          </p>
          <p class="text-sm text-muted-foreground">
            Available 24/5 to assist with your trading journey
          </p>
        </div>
      </section>
      <div class="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <div class="bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="p-3 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                class="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">
              Email Support
            </h3>
            <p class="text-lg font-semibold text-foreground mb-1">
              support@forexbroker.com
            </p>
            <p class="text-sm text-muted-foreground mb-6">
              Response within 2 hours
            </p>
            <a
              href="mailto:support@forexbroker.com"
              class="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
            >
              Send Email
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
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="bg-emerald-50 text-emerald-600 border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="p-3 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                class="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">
              Phone Support
            </h3>
            <p class="text-lg font-semibold text-foreground mb-1">
              +1 (555) 123-4567
            </p>
            <p class="text-sm text-muted-foreground mb-6">Available 24/5</p>
            <a
              href="tel:+15551234567"
              class="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
            >
              Call Now
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
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="bg-purple-50 text-purple-600 border-2 border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="p-3 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                class="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">Live Chat</h3>
            <p class="text-lg font-semibold text-foreground mb-1">
              Chat with our team
            </p>
            <p class="text-sm text-muted-foreground mb-6">Instant response</p>
            <a
              href="#"
              class="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
            >
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
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="bg-amber-50 text-amber-600 border-2 border-amber-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="p-3 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
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
                class="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">
              Support Hours
            </h3>
            <p class="text-lg font-semibold text-foreground mb-1">
              Monday - Friday
            </p>
            <p class="text-sm text-muted-foreground mb-6">24 hours daily</p>
            <a
              href="#"
              class="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
            >
              View Hours
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
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <div class="lg:col-span-2">
            <div class="bg-card border border-border rounded-xl p-8">
              <h2 class="text-3xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p class="text-muted-foreground mb-8">
                Fill out the form below and we&#x27;ll get back to you as soon
                as possible
              </p>
              <form class="space-y-6">
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-bold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                      required=""
                      value=""
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                      required=""
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-bold text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    class="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required=""
                  >
                    <option value="" selected="">
                      Select a subject...
                    </option>
                    <option value="account">Account Issues</option>
                    <option value="deposit">Deposit Help</option>
                    <option value="withdrawal">Withdrawal Help</option>
                    <option value="trading">Trading Questions</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    class="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us how we can help..."
                    required=""
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-card border border-border rounded-xl p-6">
              <h3 class="text-lg font-bold text-foreground mb-4">
                Response Times
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center pb-3 border-b border-border">
                  <span class="text-muted-foreground">Email</span>
                  <span class="font-semibold text-foreground">2 hours</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-border">
                  <span class="text-muted-foreground">Phone</span>
                  <span class="font-semibold text-foreground">Immediate</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-muted-foreground">Live Chat</span>
                  <span class="font-semibold text-foreground">Instant</span>
                </div>
              </div>
            </div>
            <div class="bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
              <h3 class="text-lg font-bold text-foreground mb-2">
                Quick Answers?
              </h3>
              <p class="text-sm text-muted-foreground mb-4">
                Check our FAQ section for instant answers to common questions
              </p>
              <Link
                class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                to="/faq"
              >
                View FAQ
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
                  class="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div class="bg-card border border-border rounded-xl p-6">
              <h3 class="text-lg font-bold text-foreground mb-4">
                Support Hours
              </h3>
              <div class="space-y-2 text-sm">
                <p class="text-muted-foreground">
                  <span class="font-semibold text-foreground">
                    Monday - Friday:
                  </span>
                  24 hours
                </p>
                <p class="text-muted-foreground">
                  <span class="font-semibold text-foreground">
                    Saturday - Sunday:
                  </span>
                  Limited support
                </p>
                <p class="text-xs text-muted-foreground mt-4">
                  All times are in UTC. Email support available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-linear-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 class="text-2xl font-bold text-foreground mb-2">
            Still need help?
          </h2>
          <p class="text-muted-foreground mb-6">
            Our support team is ready to assist you with any questions or
            concerns
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
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
                class="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:support@forexbroker.com"
              class="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
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
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
