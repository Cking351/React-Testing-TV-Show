import React from 'react';
import { render, screen, userEvent, waitFor, } from '@testing-library/react';
import App from './App';

test("Renders without errors", () => {
    render(<App />);
})