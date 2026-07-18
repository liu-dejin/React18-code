import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstableSetRender } from 'antd-mobile';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import './index.css';
import './theme.css'
import { Provider } from 'react-redux';
import { store } from './store';

// antd-mobile v5 React 19 兼容补丁
// 详见: https://mobile.ant.design/zh/guide/v5-for-19/
unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


