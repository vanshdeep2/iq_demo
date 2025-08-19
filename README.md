# Quantanite IQ - Business Intelligence Platform

A modern React-based business intelligence platform designed for call center analytics and insights generation. Quantanite IQ acts as the brain of all data produced by call centers, finding insights on call quality, agent performance, customer issue categories, and business intelligence.

## Features

### 🏠 Dashboard
- **Overview Summary**: Key metrics including queries, documents, and charts
- **Insights Display**: Filterable insights with confidence levels and impact assessment
- **Quick Queries**: Common query types for quick access
- **Advanced Filtering**: Filter insights by category, confidence level, and impact

### 🔍 Insight Pages
- **Detailed Analysis**: Comprehensive view of each insight with charts and data
- **Data Sources**: Clear visibility into data sources used for insights
- **Contributing Factors**: Analysis of factors contributing to insights
- **Interactive Chat**: AI-powered chat interface for asking questions about insights
- **Suggested Actions**: Actionable recommendations based on insights

### 🎯 Suggested Actions
- **Action Cards**: Detailed action recommendations with scoring and metrics
- **Implementation Guidance**: Step-by-step implementation instructions
- **Risk Assessment**: Potential risks and mitigation strategies
- **Success Metrics**: Key performance indicators for measuring success
- **Implementation Chat**: AI assistance for action implementation

### ❓ Queries Page
- **Natural Language Search**: Ask questions in plain English
- **AI-Powered Responses**: Intelligent search through insights and data
- **Sample Queries**: Pre-built queries for common use cases
- **Recent Queries**: History of previous searches
- **Relevant Insights**: Matching insights based on query context

### 📄 Documents Management
- **Document Upload**: Upload and manage data sources
- **Processing Status**: Track document processing status
- **Insight Generation**: Automatic insight generation from documents
- **Search & Filter**: Advanced document search and categorization
- **Statistics**: Overview of document processing metrics

## Technology Stack

- **Frontend**: React 18 with React Router for navigation
- **Styling**: Tailwind CSS for modern, responsive design
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Create React App for development and build

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quantanite-iq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.js       # Main layout with sidebar navigation
│   ├── InsightCard.js  # Individual insight display component
│   ├── ActionCard.js   # Suggested action display component
│   └── FilterModal.js  # Filter modal for insights
├── pages/              # Main application pages
│   ├── Dashboard.js    # Main dashboard with insights overview
│   ├── InsightPage.js  # Detailed insight view with charts
│   ├── ActionPage.js   # Detailed action implementation view
│   ├── Queries.js      # AI-powered query interface
│   └── Documents.js    # Document management page
├── App.js              # Main application component with routing
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Features Implementation

### Insight Filtering
- Filter insights by category (Financial, Customer, Regional, Operational)
- Filter by confidence level (High, Medium, Low)
- Filter by impact level (High, Medium, Low)
- Real-time filtering with modal interface

### Interactive Charts
- Revenue trend visualization using Recharts
- Responsive chart components
- Interactive tooltips and data points

### Chat Interfaces
- AI-powered chat for insight exploration
- Implementation guidance chat for actions
- Real-time message handling with simulated responses

### Responsive Design
- Mobile-first responsive design
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Updating `src/index.css` for custom component styles
- Adding new utility classes as needed

### Data Sources
Currently, the application uses mock data. To integrate with real data sources:
- Replace mock data in components with API calls
- Implement data fetching logic
- Add error handling for data loading states

### AI Integration
The chat interfaces currently use simulated responses. To integrate with real AI:
- Connect to AI/ML services for natural language processing
- Implement real-time chat functionality
- Add authentication and user management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the Quantanite development team.

---

**Quantanite IQ** - Transforming call center data into actionable business intelligence.
