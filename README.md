📄 Image Comparison – Diff Explanation

This project uses Pixelmatch to compare two UI screenshots and generate a visual diff image (diff.png) that highlights the differences between them.

🔍 What diff.png Shows

The diff image highlights pixel–level differences between Image 1 and Image 2 using the following colors:

Red → Pixels that are different between the two images.

Yellow → Edge highlights where changes occur.

Black/transparent → Pixels that are identical.

📘 Why the Diff Looks Very Red/Yellow

Although the screens look similar to the eye, they have several UI differences that Pixelmatch detects:

✔ Text differences

One image has “My Acounts” (misspelled).

The other uses “My Accounts” (correct).

One image includes the subtitle “(My Acounts)”, the other does not.

✔ Button differences

Image 1: Only Transfer button.

Image 2: Transfer, Deposit, Pay Bills (three buttons).

More buttons increase the layout size → generates large diff areas.

✔ Layout and styling differences

Different header heights.

Different text alignment and spacing.

Font anti-aliasing (slight rendering differences).

Slight variations in padding/margins.

Pixelmatch detects every pixel variation, therefore the diff may look very intense even if the UI changes seem small.

📁 Output File

The comparison script generates:

/images/output/diff.png


This file visually shows all detected differences.

🎯 Purpose of This Task

The goal of Activity 2 is to:

Run an automated image comparison.

Generate a diff image.

Interpret UI differences in a QA context.

Document the process and findings in this repository.

2️⃣ Part 2 – Spot the Differences README.md**

```markdown
# Part 2 - Spot the Differences

## Overview
This task identifies visual differences between two images and optionally highlights them using an image comparison script.

### Files
- `compare.js` → Script to detect differences between images
- `images/` → Contains `original.png`, `modified.png`, and optionally `diff.png`

### Bonus
- A script that automatically generates a diff image highlighting differences

## Tools / Libraries
- Node.js v18+ (if using JavaScript)
- Libraries: OpenCV, Pillow, or Resemble.js

## Setup Requirements
- Install Node.js and npm (if using JS)
- Ensure the images are placed in the `images/` folder
- Install dependencies:
  ```bash
  npm install
How to Run
bash
Copiar código
node compare.js
The script outputs a diff image showing differences (optional)


