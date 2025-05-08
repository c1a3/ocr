# Optical Character Recognition Tool

A simple and lightweight Optical Character Recognition (OCR) tool to extract text from images. It uses HTML, CSS and JavaScript with Tesseract OCR engine (Tesseract.js library).

## Overview

This project provides a lightweight browser-based application for converting images containing text (e.g., scanned documents, screenshots) into machine-readable text. It leverages the Tesseract OCR engine (Tesseract.js library) and supports basic image preprocessing for improved accuracy.

## Features

- Browser-based OCR which means NO server-side processing required; all operations are handled client-side which enhances privacy.
- Extract text from PNG, JPEG, and BMP images.
- Basic image preprocessing (grayscale, thresholding) to enhance OCR accuracy.
- Support for multiple languages (via Tesseract language packs).
- User-friendly interface with simple drag-and-drop or file selection for image uploads.
- Real-time text extraction from images with minimal setup.

## Installation

### Prerequisites
- npm latest version (9.6.7)
- Tesseract OCR (install instructions: [Tesseract GitHub](https://github.com/tesseract-ocr/tesseract#installing-tesseract))

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/c1a3/ocr.git
   cd ocr
   ```

2. Ensure Tesseract is installed and added to your system PATH:
   - Windows: Download and install from [Tesseract at UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki).
   - Linux: `sudo dnf install tesseract`
   - macOS: `brew install tesseract`




