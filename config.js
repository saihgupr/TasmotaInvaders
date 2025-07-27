window.MAIN_LIGHT = '192.168.1.32'; // This light flashes when the player shoots

window.OTHER_LIGHTS = [
    '192.168.1.24',
    '192.168.1.16',
    '192.168.1.132',
    '192.168.1.34'  // Corrected IP address for LED
];

// Do not modify below this line
window.ALL_LIGHT_IPS = [window.MAIN_LIGHT, ...window.OTHER_LIGHTS];

// Light effect configurations
window.LIGHT_EFFECTS = {
    gameStart: { color: '0000FF', dimmer: '30', lights: window.ALL_LIGHT_IPS }, // Dim blue
    playerShoot: { color: 'FFFFFF', duration: 100, lights: [window.MAIN_LIGHT] }, // White flash
    alienHit: { colors: ['00FF00', 'FFA500', 'FFFF00'], duration: 200, lights: window.OTHER_LIGHTS }, // Green, Orange, Yellow flash
    playerHit: { color: 'FF0000', duration: 500, pulse: true, lights: window.ALL_LIGHT_IPS }, // Red pulse
    gameOver: { color: '000000', lights: window.ALL_LIGHT_IPS }, // All off
    newWave: { colors: ['FF0000', '00FF00', '0000FF', 'FFFF00', 'FF00FF', '00FFFF'], duration: 1000, cycleInterval: 100, lights: window.ALL_LIGHT_IPS, scheme: 1 }, // Color cycle (scheme 1 is usually rainbow)
    atomicBomb: { color: 'FFFFFF', dimmer: '100', duration: 2000, lights: window.ALL_LIGHT_IPS }, // Very bright white for a short duration
    superShield: { colors: ['FF0000', 'FFA500', 'FFFF00', '00FF00', '0000FF', '4B0082', 'EE82EE'], duration: 10000, cycleInterval: 50, lights: window.OTHER_LIGHTS, dimmer: '100' } // Rainbow colors for super shield
};