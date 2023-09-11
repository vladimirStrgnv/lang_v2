import App from "./App";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './shared/stores';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
