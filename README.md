# Six Basic Aircraft Instrument

<img src="/img/sixpack.png" width='400'> 

A **React-based cockpit dashboard** featuring a realistic "six-pack" instrument layout for pilots.  
Originally built as part of my aerospace-themed projects (including a satellite simulator), this app is designed for flexibility — making it easy to adapt beyond aviation into other domains.

## ✈️ Features

- **Six-Pack Flight Instruments**:
  - Airspeed Indicator
  - Attitude Indicator (Artificial Horizon)
  - Altimeter
  - Turn Coordinator
  - Heading Indicator
  - Vertical Speed Indicator
- **Custom Gauge Styling** – Consistent, professional UI using shared CSS.
- **Responsive Grid Layout** – 3x2 arrangement for instruments.
- **Dynamic Props** – Each instrument accepts live/simulated data.
- **Extensible Design** – Easy to swap visuals, such as using custom PNGs for indicators.

## 🚀 Technology Stack

- **Frontend**: React 18
- **Styling**: CSS Grid + Custom Gauge Styling
- **Gauges**: `react-gauge-chart` and custom-built canvas/CSS elements
- **Assets**: Public folder for static images (e.g., `/img/plane.png` for Turn Coordinator)

## ⚙️ Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/pilot-dashboard.git
   cd pilot-dashboard

2. Install dependecies:
   ```bash
   npm install

3. Start the decelopment server:
   ```bash
   npm start

4. Open in browser:
   ```arduino
   http://localhost:3000

## 📜 License
This project is licensed under the MIT License.
