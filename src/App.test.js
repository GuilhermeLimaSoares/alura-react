import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });


it("should render the homepage for the non logged in user", () => {
  const props = {
    isLoggedIn: false,
    username: null
  }
  const app = mount(<App {...props} />)
  
  // Checking output
  expect(app.find(Home)).toHaveLength(0)
  expect(app.find('p').at(0).text()).toEqual("Hello, visitor. Sign in to continue.")
})