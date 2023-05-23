import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './reducers/kanbanReducer';
import './index.css';
import App from './App';

const store = configureStore({
  reducer: kanbanReducer,
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
