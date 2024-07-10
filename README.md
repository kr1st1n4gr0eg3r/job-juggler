# JobJuggler: Master the Art of Job Listing Acrobatics!
### A Chrome extension that will highlight or hide certain parameters as needed in your arduous job hunt.

![JobJuggler](assets/logo.png)

## Overview

JobJuggler is a Chrome extension that enhances your job searching experience on LinkedIn (just LinkedIn for now) by applying specific styles to job posts based on keywords and conditions. This extension allows you to quickly identify job posts that match your preferences and hide those that don't, making your job search more efficient and less time-consuming.

## Features

- **Highlight Onsite Jobs**: Apply a red background to job posts that include "onsite" or "on-site".
- **Highlight Remote Jobs**: Apply a green background to job posts that include "remote".
- **Highlight Month-Old Jobs**: Apply a red background to job posts that include "month ago".
- **Hide Applied Jobs**: Automatically hide job posts that indicate you have already applied.
- **Hide Non-Salary Jobs**: Automatically hide job posts that do not mention a salary.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

## Usage

1. After installing the extension, click on the JobJuggler icon in the Chrome toolbar to open the settings popup.
2. Use the checkboxes to enable or disable specific styling and hiding options according to your preferences.
3. Navigate to LinkedIn job listings, and the extension will automatically apply your selected styles and filters to the job posts.

## Files

- `manifest.json`: Configuration file for the Chrome extension.
- `content.js`: Script that styles and hides job posts based on the specified conditions.
- `styles.css`: CSS file that contains the styles for job posts.
- `popup.html`: HTML file for the extension's popup UI.
- `popup.js`: Script for handling the logic of the popup UI.
- `popup.css`: CSS file for styling the popup UI.
- `background.js`: (Optional) Background script for handling background tasks.

## Contributing

Feel free to contribute to this project by submitting a pull request or opening an issue. Any contributions are greatly appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.