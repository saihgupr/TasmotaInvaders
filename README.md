![Tasmota Invaders Poster](https://i.imgur.com/JEYSdVD.jpeg)

# Tasmota Invaders

"Tasmota Invaders" is a simple web-based Space Invaders style game that interacts with your Tasmota-flashed smart lights, creating an immersive gaming experience.

## Features

*   **Interactive Lighting:** Game events trigger real-time light changes in your room.
*   **Simple Setup:** Easy to run in any modern web browser.

## Setup and Configuration

To get started with Tasmota Invaders, follow these steps:

1.  **Download/Clone the Project:**
    Ensure you have all the game files (`index.html`, `config.js`, etc.) in a single directory.

2.  **Configure Your Lights:**
    Open the `config.js` file in a text editor. This file contains the IP addresses for your Tasmota devices. You **must** update these to match your own Tasmota light configurations.

    ```javascript
    const MAIN_LIGHT = '192.168.1.32'; // This light flashes when the player shoots

    const OTHER_LIGHTS = [
        '192.168.1.24', // Shelf
        '192.168.1.16', // Bed
        '192.168.1.132', // Desk
        '192.168.1.34'  // LED
    ];

    // Do not modify below this line
    const ALL_LIGHT_IPS = [MAIN_LIGHT, ...OTHER_LIGHTS];
    ```
    *   Replace `MAIN_LIGHT` with the IP address of the light you want to use for player shooting effects.
    *   Replace the IP addresses in `OTHER_LIGHTS` with the IP addresses of your other Tasmota lights. You can add or remove IPs from this list as needed.
    *   Ensure your computer running the game is on the **same local network** as your Tasmota devices.

3.  **Open the Game:**
    Simply open the `index.html` file in your web browser (e.g., Chrome, Firefox, Safari). You can do this by double-clicking the file or dragging it into an open browser window.

## How to Play

*   **Move Left:** Left Arrow key or 'A'
*   **Move Right:** Right Arrow key or 'D'
*   **Shoot:** Spacebar
*   **Restart Game (after Game Over):** 'R'

## Power-ups

During gameplay, aliens may drop power-ups. Collect them to gain temporary advantages:

*   **Fire Rate (Purple):** Increases your shooting speed.
*   **Multi-Shot (Orange):** Allows you to shoot three bullets at once.
*   **Shield (Blue):** Provides temporary invincibility to one hit.
*   **Life (Green):** Grants an extra life.
*   **Atomic Bomb (Red):** Clears all aliens and alien bullets on screen.
*   **Super Shield (Cyan):** Provides extended invincibility with a rainbow light effect.

## Light Interactions

*   **Game Start:** All configured lights turn on to a dim blue.
*   **Player Shoots:** The light configured as `MAIN_LIGHT` flashes white briefly.
*   **Alien Hit:** A random light from your `OTHER_LIGHTS` flashes a random color.
*   **Player Hit:** All lights flash red and turn off briefly, indicating damage.
*   **Game Over:** All lights turn off completely.
*   **New Wave:** All lights cycle through various colors briefly to celebrate a new wave of aliens.

## Troubleshooting

*   **Lights not responding?**
    *   Double-check the IP addresses in `config.js`.
    *   Ensure your Tasmota devices are powered on and connected to your network.
    *   Verify that your computer is on the same local network as the Tasmota devices.
    *   Open your browser's developer console (F12) and check for any error messages related to `fetch` requests.
*   **Game not loading?**
    *   Ensure `index.html` and `config.js` are in the same directory.

Enjoy your Tasmota-enhanced gaming experience!