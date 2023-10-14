import '../styles/globals.css';
import Provider from "./providers/ThemeProvider";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <Provider>
        {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
