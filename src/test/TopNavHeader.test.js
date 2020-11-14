import { cleanup, render, screen } from '@testing-library/react';
import TopNavHeader  from "../components/TopNavHeader";
import '@testing-library/jest-dom';

test('renders Header link', () => {
  render(<TopNavHeader linksList={[{name: "Test", link:"/"}]} />);
  expect(screen.getByText(/HR App/i)).toBeInTheDocument();
  cleanup;
});

test('renders the linkList given', () => {
  render(<TopNavHeader linksList={[{name: "Test", link:"/"}]} />);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
  cleanup;
});

test('renders the current page in blue', () => {
  render(<TopNavHeader 
      linksList={[
                  {id: "home", name: "Home", link:"/"},
                  {id: "not_home", name: "Unimportant", link: "#"}
                ]} 
      currentPage={"home"} 
    />);
  expect(document.getElementById("home")).toHaveStyle({color: "#1d70b8"});
  expect(document.getElementById("not_home")).toHaveStyle({color: "rgb(255, 255, 255)"});
  cleanup;
});