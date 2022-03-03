import { render, screen } from '@testing-library/react';
import App from './App';


//test block. We can define a test block by 'test' or 'it' keyword
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});