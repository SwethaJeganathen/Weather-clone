# Weather Application

A weather application that provides real-time weather updates based on user input. The app features a search functionality, dynamic visuals, and displays essential weather details such as temperature, humidity, and wind speed.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **Real-Time Weather Updates:**
  - Fetch and display current weather conditions using the OpenWeather API.

- **Dynamic Backgrounds:**
  - Weather icons and backgrounds change based on the weather condition (e.g., clouds, rain, snow).

- **User-Friendly Interface:**
  - Responsive design for desktops and mobile devices.

- **Error Handling:**
  - Displays a 404 message if the entered location is not found.

- **Additional Details:**
  - Temperature, humidity, and wind speed are dynamically updated.

---

## Technologies Used

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - Boxicons for icons

- **Backend/API:**
  - OpenWeather API for fetching weather data

---

## File Structure

```
project-folder
├── index.html       # Main HTML file
├── wether.css       # CSS styles
├── wether.js        # JavaScript functionality
├── assets/          # Images and icons
├── README.md        # Project documentation (this file)
```

---

## Installation

### Prerequisites:

- A modern web browser (e.g., Chrome, Firefox).
- A code editor (e.g., VS Code) for customization.

### Steps:


2. **API Key Setup:**
   - Register at [OpenWeather](https://openweathermap.org/) to get an API key.
   - Replace the placeholder `APIkey` in `wether.js` with your actual API key:
     ```javascript
     const APIkey = 'e27067510d60ee9ba86aa609238241ba';
     ```

3. **Open in Browser:**
   - Open the `weather.html` file in any web browser to view the application.

---

## Usage

- **Search for Weather:**
  - Enter a city name in the search bar and click the search button.

- **View Weather Details:**
  - View temperature, weather description, humidity, and wind speed.

- **Error Handling:**
  - If the location is invalid, a message is displayed indicating the location was not found.

---

## Screenshots

### Home Page:
![Home Page](https://via.placeholder.com/800x400)

### Weather Results:
![Weather Results](https://via.placeholder.com/800x400)

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
