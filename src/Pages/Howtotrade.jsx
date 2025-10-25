import React from 'react'
import { Link } from 'react-router-dom'

const Howtotrade = () => {
  return (
     <main className="min-h-screen bg-background">
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-b border-border"
      >
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            How to Trade
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Learn the fundamentals of forex trading and execute your first trade
            with confidence.
          </p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Trading Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4"
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
                  className="lucide lucide-trending-up"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Spot Trading
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Buy and sell currency pairs at current market prices
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Immediate settlement</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >No leverage required</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Lower risk profile</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Suitable for beginners</span
                  >
                </li>
              </ul>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4"
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
                  className="lucide lucide-chart-column"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Margin Trading
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Trade with borrowed funds to amplify your positions
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Use leverage (up to 1:500)</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Higher potential returns</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Higher risk exposure</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Requires margin management</span
                  >
                </li>
              </ul>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4"
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
                  className="lucide lucide-target"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Day Trading
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Open and close positions within the same trading day
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Quick profit opportunities</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Requires active monitoring</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Higher transaction costs</span
                  >
                </li>
                <li className="flex items-start gap-2">
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
                    className="lucide lucide-circle-check-big text-primary mt-0.5 shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path></svg
                  ><span className="text-sm text-foreground"
                    >Demands technical analysis skills</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Step-by-Step Trading Process
          </h2>
          <div className="space-y-8">
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    1
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Choose a Currency Pair
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Select the currency pair you want to trade from the market
                    watch.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Popular pairs: EUR/USD, GBP/USD, USD/JPY</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Check the bid-ask spread for each pair</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Consider the volatility and liquidity</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Start with major pairs as a beginner</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    2
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Analyze the Market
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Use technical and fundamental analysis to make informed
                    decisions.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Check support and resistance levels</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Review economic news and events</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Use indicators like RSI, MACD, Moving Averages</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Identify trends and potential entry points</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    3
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Decide Buy or Sell
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Determine your trading direction based on your analysis.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >BUY (Long): If you expect the price to go up</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >SELL (Short): If you expect the price to go down</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Consider your risk tolerance</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Plan your profit target and stop loss</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    4
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Set Stop Loss &amp; Take Profit
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Define your risk management levels before opening a trade.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Stop Loss: Price level to exit if trade goes
                        wrong</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Take Profit: Price level to exit with profit</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Use proper position sizing</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Never risk more than 2% per trade</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    5
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Open Your Position
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Execute your trade by clicking the Buy or Sell button.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Enter the lot size (0.01 = 1,000 units)</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Review the trade details</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Confirm your stop loss and take profit levels</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Click &#x27;Buy&#x27; or &#x27;Sell&#x27; to
                        execute</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    6
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Monitor Your Trade
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Keep track of your open position and market movements.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Watch the price movement in real-time</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Monitor your profit/loss (P&amp;L)</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Be ready to adjust your strategy if needed</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Don&#x27;t let emotions drive your decisions</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-20 w-1 h-12 bg-linear-to-b from-primary to-transparent"
              ></div>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    7
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Close Your Position
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Exit your trade when your target is reached or stop loss is
                    hit.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Manually close when your target is reached</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Stop loss will close automatically if triggered</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Take profit will close automatically if reached</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Review your trade results</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    8
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Analyze &amp; Learn
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Review your trade to improve your future trading decisions.
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Check if your analysis was correct</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Review your entry and exit points</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Keep a trading journal</span
                      >
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
                        <path d="m9 11 3 3L22 4"></path></svg
                      ><span className="text-sm text-foreground"
                        >Identify patterns and improve your strategy</span
                      >
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
                className="lucide lucide-zap text-primary shrink-0 mt-1"
              >
                <path
                  d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                ></path>
              </svg>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Risk Management
                </h2>
                <p className="text-muted-foreground mb-6">
                  Proper risk management is crucial for long-term trading
                  success:
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
                    Position Sizing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Never risk more than 1-2% of your account balance on a
                    single trade.
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
                    Stop Loss Orders
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Always set a stop loss to limit your potential losses on
                    every trade.
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
                    Take Profit Levels
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Define your profit targets before entering a trade to lock
                    in gains.
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
                    Risk-Reward Ratio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aim for at least a 1:2 risk-reward ratio on your trades.
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
                    Diversification
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Don&#x27;t put all your capital into a single trade or
                    currency pair.
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
                    Leverage Caution
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Use leverage wisely and understand the risks of amplified
                    losses.
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
            Essential Trading Terms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Pip</h3>
              <p className="text-sm text-muted-foreground">
                The smallest price movement in a currency pair (usually 0.0001)
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Lot</h3>
              <p className="text-sm text-muted-foreground">
                A standardized unit of currency (1 lot = 100,000 units)
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Spread</h3>
              <p className="text-sm text-muted-foreground">
                The difference between the bid and ask price of a currency pair
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Leverage</h3>
              <p className="text-sm text-muted-foreground">
                Borrowing funds to increase your trading position size
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Margin</h3>
              <p className="text-sm text-muted-foreground">
                The amount of money required to open and maintain a leveraged
                position
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Volatility</h3>
              <p className="text-sm text-muted-foreground">
                The degree of price fluctuation in a currency pair
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
                  Important Disclaimer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Forex trading involves substantial risk of loss. Past
                  performance is not indicative of future results. The
                  information provided is for educational purposes only and
                  should not be considered as financial advice.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span
                    ><span>Only trade with money you can afford to lose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span
                    ><span>Start with a demo account to practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span
                    ><span>Never use excessive leverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span
                    ><span>Consult with a financial advisor if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="mb-6 opacity-90">
            You now have all the knowledge you need. Log in to MT5 and execute
            your first trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Open MT5
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
                className="lucide lucide-trending-up"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg></button
            ><Link
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              to="/faq"
              >Next: FAQ
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Howtotrade