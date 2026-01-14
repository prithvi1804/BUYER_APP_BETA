# ONDC Buyer App Beta

A consumer-facing Buyer App for the ONDC (Open Network for Digital Commerce) ecosystem. This application is built with React.js and allows users to browse products, view details, and manage their cart, interacting with the ONDC network via backend APIs.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Architecture & Logic](#architecture--logic)
  - [Temporary Data Input](#temporary-data-input)
  - [Master Theming Logic](#master-theming-logic)
- [Key Features](#key-features)

## Introduction

This application serves as a reference implementation for an ONDC Buyer App. It is designed to demonstrate key ONDC flows including:

- Product Discovery (Search & Browsing)
- Product Details
- Cart Management
- Checkout Flow

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
- **npm**: Comes bundled with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd BUYER_APP_BETA
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

The project is migrated to **Vite** for faster development builds.

- **Development Server**:

  ```bash
  npm start
  ```

  This runs `vite` and opens the app at [http://localhost:3000](http://localhost:3000) (or the next available port).

- **Production Build**:

  ```bash
  npm run build
  ```

  This runs `vite build` to generate the optimized production build in the `dist` folder.

- **Preview Production Build**:
  ```bash
  npm run serve
  ```

## Architecture & Logic

### Temporary Data Input

Currently, the application uses a hybrid approach for data. While some features may connect to live APIs, the core product browsing and listing data is temporarily driven by static constant files to facilitate development and testing without a live ONDC backend dependency.

- **Source File**: `src/constants/mock-data.js`
- **Logic**:
  - This file exports constant arrays and objects such as `PRODUCTS`, `BRANDS`, `OUTLETS`, `FILTERS`, and `ADDRESSES`.
  - **Component Usage**: Components import these constants directly to render UI elements. For example, the Product Listing Page maps through the `PRODUCTS` array to display product cards.
  - **Transition Note**: As backend APIs become available, these imports will be replaced by API calls (using tools like `axios` or `fetch`) and state management (Context or Redux).

### Master Theming Logic

The application employs a centralized theming strategy that bridges **Material UI (MUI)** and **CSS/SCSS variables**. This ensures consistency across both MUI components and custom-styled elements.

- **Theme Directory**: `src/utils/Theme/`

  - `index.js`: The main entry point that exports the created MUI theme.
  - `colors.js`: Defines the ease-to-use color palette.
  - `palette.js`: structured palette for MUI.
  - `typographyStyles.js`: Centralized typography definitions.

- **Integration Strategy**:

  1. **MUI ThemeProvider**:

     - The `App.jsx` wraps the entire application in Mui's `<ThemeProvider theme={theme}>`. This ensures all MUI components (Buttons, Inputs, etc.) automatically adhere to the design system.

  2. **Automated CSS Variable Injection**:
     - Inside `App.jsx`, a utility function `flattenTheme` runs on mount.
     - It recursively iterates through the JS theme objects (`colors`, `typographyStyles`) and injects them as global CSS variables into `document.documentElement`.
     - **Example**: A color defined as `primary.main` in JS becomes available as var `--color-primary-main` in CSS.
     - **Benefit**: This allows developers to use the same theme tokens in standard `.scss` or `.css` files without manually duplicating values, ensuring a "Single Source of Truth" for styles.

## Key Features

- **Authentication**: Supports Google OAuth and username/password login.
- **Server Side Events (SSE)**: Uses SSE for real-time data updates (reducing need for polling).
- **Geo-Location**: Integration with Map functionality (via ONDC ancillary APIs).
- **Cloud Calling**: Integrated calling features via ONDC ancillary APIs.

---

_Built with React, Vite, and Material UI._
