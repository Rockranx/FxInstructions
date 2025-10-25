import React, { useState } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const faqs = [
    {
      category: "Getting Started",
      items: [
        {
          question: "What is forex trading?",
          answer: "Forex (foreign exchange) trading is the buying and selling of currencies. Traders profit from the price differences between currency pairs. It's the largest and most liquid financial market in the world.",
        },
        {
          question: "Do I need experience to start trading?",
          answer: "No, beginners can start trading forex. We recommend starting with a demo account to practice without risking real money. Our guides will help you learn the basics before trading with real funds.",
        },
        {
          question: "What is the minimum deposit?",
          answer: "The minimum deposit depends on your chosen payment method. Credit/debit cards have a $10 minimum, while bank transfers require $100. E-wallets and cryptocurrency have their own minimums.",
        },
        {
          question: "Can I trade on weekends?",
          answer: "Forex markets are closed on weekends. Trading is available Monday through Friday during market hours. Some brokers offer weekend trading on synthetic indices and cryptocurrencies.",
        },
      ],
    },
    {
      category: "Account & Security",
      items: [
        {
          question: "How do I verify my account?",
          answer: "After registration, you'll need to verify your email and complete KYC (Know Your Customer) verification. This involves uploading a government-issued ID and proof of address. Verification typically takes 24-48 hours.",
        },
        {
          question: "Is my money safe with you?",
          answer: "Yes, we use industry-leading security measures including SSL encryption, PCI compliance, and segregated client accounts. Your funds are kept separate from company funds and protected by regulatory requirements.",
        },
        {
          question: "What if I forget my password?",
          answer: "Click 'Forgot Password' on the login page. You'll receive an email with instructions to reset your password. Follow the link and create a new secure password.",
        },
        {
          question: "Can I have multiple accounts?",
          answer: "You can have multiple trading accounts with different account types (demo, live, etc.). However, each account must be registered with the same email address or different emails.",
        },
      ],
    },
    {
      category: "Trading & Positions",
      items: [
        {
          question: "What is leverage?",
          answer: "Leverage allows you to control a larger position with a smaller amount of capital. For example, 1:100 leverage means you can control $100,000 with $1,000. Higher leverage increases both potential profits and losses.",
        },
        {
          question: "What is a pip?",
          answer: "A pip (percentage in point) is the smallest price movement in a currency pair. For most pairs, 1 pip = 0.0001. For pairs like USD/JPY, 1 pip = 0.01.",
        },
        {
          question: "How do I set a stop loss?",
          answer: "When opening a trade, you can set a stop loss price level. If the market reaches this price, your position will automatically close to limit your losses. Always use stop losses for risk management.",
        },
        {
          question: "What is a take profit order?",
          answer: "A take profit order automatically closes your position when the price reaches your target profit level. This helps you lock in gains without having to monitor the market constantly.",
        },
      ],
    },
    {
      category: "Deposits & Withdrawals",
      items: [
        {
          question: "How long does a deposit take?",
          answer: "Deposits are typically instant for credit cards and e-wallets. Bank transfers take 1-3 business days. Cryptocurrency deposits usually complete within 10-30 minutes.",
        },
        {
          question: "Are there deposit fees?",
          answer: "Deposit fees vary by payment method. Credit/debit cards charge 1-2%, bank transfers are free, e-wallets charge 0-2%, and cryptocurrency has network fees. Check the deposit page for current fees.",
        },
        {
          question: "How long does a withdrawal take?",
          answer: "Withdrawal times depend on the method: E-wallets (1-24 hours), bank transfers (3-7 business days), credit cards (3-5 business days), cryptocurrency (30 minutes - 2 hours).",
        },
        {
          question: "Can I withdraw to a different account?",
          answer: "For security reasons, withdrawals must go to the original deposit method or a verified account on file. Contact support if you need to add a new withdrawal destination.",
        },
      ],
    },
    {
      category: "MT5 Platform",
      items: [
        {
          question: "Is MT5 free to use?",
          answer: "Yes, MetaTrader 5 is completely free to download and use. There are no platform fees. You only pay spreads and commissions on your trades.",
        },
        {
          question: "Can I use MT5 on mobile?",
          answer: "Yes, MT5 is available on iOS and Android. Download it from the App Store or Google Play. You can trade on the go with the same features as the desktop version.",
        },
        {
          question: "What if I can't log in to MT5?",
          answer: "Check your internet connection and ensure you're using the correct account number and password. Verify you're selecting the right server. If problems persist, contact our support team.",
        },
        {
          question: "Can I use multiple devices?",
          answer: "Yes, you can log in to your account on multiple devices simultaneously. Your account balance and positions will sync across all devices in real-time.",
        },
      ],
    },
    {
      category: "Risk & Compliance",
      items: [
        {
          question: "What is the risk of forex trading?",
          answer: "Forex trading carries substantial risk. You can lose more than your initial investment, especially with leverage. Only trade with money you can afford to lose and always use proper risk management.",
        },
        {
          question: "What is negative balance protection?",
          answer: "Negative balance protection prevents your account balance from going below zero. If losses exceed your balance, we cover the difference. This protects you from owing money to the broker.",
        },
        {
          question: "Are there trading restrictions?",
          answer: "Yes, we comply with all regulatory requirements. Certain trading strategies may be restricted, and there are limits on leverage based on your account type and experience level.",
        },
        {
          question: "How is my data protected?",
          answer: "We use 256-bit SSL encryption for all data transmission. Your personal information is stored securely and never shared with third parties without your consent. We comply with GDPR and other privacy regulations.",
        },
      ],
    },
  ]


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // To track the index across multiple categories, create a unique index for each question
  let globalIndex = 0;
  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Find answers to common questions about our platform, trading, and
            services.
          </p>
        </div>
      </section>
    
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const currentIndex = globalIndex++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={itemIndex}
                      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-foreground text-left">
                          {item.question}
                        </h3>
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
                          className={`lucide lucide-chevron-down text-primary shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-muted/30 border-t border-border">
                          <p className="text-muted-foreground">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our support team is here to help you with any questions or
              concerns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team in real-time for immediate
                assistance.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                Start Chat
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
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </button>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send us an email and we&#x27;ll respond within 24 hours.
              </p>
              <a
                href="mailto:support@forexbroker.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Email Us
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
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
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
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call our support team during business hours.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Call Us
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
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="mb-6 opacity-90">
            You now have all the information you need. Create your account and
            start trading today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              to="/registration-guide"
            >
              Get Started Now
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
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
