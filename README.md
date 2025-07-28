# OIBSIP_WebDevelopment_And_Design_Task4

# Calculator

A modern, responsive web-based calculator with a clean interface and full functionality similar to standard desktop calculators.

## Features

### Basic Operations
- **Addition** (+)
- **Subtraction** (−)
- **Multiplication** (×)
- **Division** (÷)

### Advanced Features
- **Backspace** (⌫) - Delete the last entered digit
- **Plus/Minus** (±) - Toggle between positive and negative numbers
- **Clear** (C) - Reset the calculator
- **Decimal Point** (.) - Add decimal places to numbers
- **Real-time Display** - Shows the full expression as you type

### User Interface
- **Modern Design** - Clean, dark theme with rounded buttons
- **Responsive Layout** - Works on desktop and mobile devices
- **Visual Feedback** - Button press animations and hover effects
- **Color-coded Buttons** - Different colors for different button types:
  - Gray: Number buttons
  - Orange: Operator buttons
  - Green: Equals button
  - Red: Backspace button
  - Blue: Plus/Minus button
  - Dark Gray: Clear button

## How to Use

1. **Basic Calculation**:
   - Enter the first number (e.g., `12`)
   - Press an operator (e.g., `+`)
   - Enter the second number (e.g., `7`)
   - Press `=` to see the result (`19`)

2. **Chained Operations**:
   - You can continue pressing operators to chain calculations
   - The calculator will perform operations in order of entry

3. **Special Functions**:
   - **⌫**: Delete the last digit entered
   - **±**: Change the sign of the current number
   - **C**: Clear everything and start over
   - **.**: Add decimal places (only one decimal point per number allowed)

## Display Behavior

The calculator shows the full expression in real-time:
- `12` (first number)
- `12 +` (after pressing operator)
- `12 + 7` (while typing second number)
- `19` (final result)

## File Structure

```
Calculator/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Calculator logic and functionality
└── README.md       # This documentation
```

## Setup Instructions

1. **Download/Clone** the project files
2. **Open** `index.html` in any modern web browser
3. **Start calculating!** No additional setup required

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

## Technical Details

### Technologies Used
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Calculator logic and interactivity

### Key Features
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Cross-platform** - Works on Windows, Mac, Linux, and mobile
- **Offline Capable** - No internet connection required
- **Lightweight** - Fast loading and minimal resource usage

## Future Enhancements

Potential features for future versions:
- Keyboard support (type numbers and operators)
- Memory functions (M+, M-, MR, MC)
- Percentage calculations
- Scientific calculator functions
- History of calculations
- Multiple themes/color schemes

## Contributing

Feel free to fork this project and add your own improvements! Some ideas:
- Add new mathematical functions
- Improve the UI/UX
- Add keyboard shortcuts
- Implement unit conversion features

## License

This project is open source and available under the MIT License.

---

**Enjoy calculating!** 🧮 
