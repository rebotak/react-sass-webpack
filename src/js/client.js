import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

require('./scss/custom.scss');


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);