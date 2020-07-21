import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

test("Episodes renders correctly on useEffect", () => {
    render(<Episodes episodes={[]} />)
})

test("Displays Episodes as the episodes prop is updated", () => {
    const { rerender } = render(<Episodes episodes={[]} />)

    // rerender
    rerender(<Episodes episodes={[]} />)
})