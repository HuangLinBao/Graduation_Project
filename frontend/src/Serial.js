import SerialPort from "serialport";

// Define the serial port you want to communicate with
const port = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 });

// Function to send a character to the Arduino
export const sendCharToArduino = (char) => {
  // Open the serial port
  port.open((err) => {
    if (err) {
      console.error("Error opening port:", err.message);
      return;
    }
    console.log("Serial port opened");

    // Write the character to the serial port
    port.write(char, (err) => {
      if (err) {
        console.error("Error writing to port:", err.message);
      } else {
        console.log(`Sent '${char}' to Arduino`);
      }

      // Close the port after sending the character
      port.close();
    });
  });
};

// Function to send a character to the Arduino after a delay
export const sendCharAfterDelay = (char, delay) => {
  setTimeout(() => {
    sendCharToArduino(char);
  }, delay);
};

// Usage example:
// sendCharToArduino('A'); // Sends 'A' to the Arduino immediately
// sendCharAfterDelay('B', 5000); // Sends 'B' to the Arduino after a 5-second delay
