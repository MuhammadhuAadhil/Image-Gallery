import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/body';
import Head from './components/head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
            <Head/>
            <Body/>
            </>
);

