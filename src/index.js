import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import FsBackend from "i18next-fs-backend";
import './styles/index.scss';
import Layout from './layout/Layout';

i18next
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // ... your i18next config
    backend: {
      supportedLngs: ['en', 'fr', 'vn', 'ar'],
      fallbackLng: 'en',
      debug: true,
      // Options for language detector
      detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
      // react: { useSuspense: false },
      backends: [
        HttpBackend,
        FsBackend
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense>
      <Layout />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
