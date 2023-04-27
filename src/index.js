// import React from "react";
// import ReactDOM  from "react-dom";
import App from './routes/App';

// ReactDOM.render(<App />, document.getElementById('app'));

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);