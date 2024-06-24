import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import HomePage from '../pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';


let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe('<HomePage />', () => {
  test('Loading when page is still loading', () => {
    render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>,
        { container }
      );
    expect(
      screen.getByText(
        /loading/i
      )
    ).toBeInTheDocument()  
  })
});

describe('<HomePage />', () => {
    test('should show side bar and navbar on page load', () => {
      render(
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>,
          { container }
        );
        const sidebarContainer = container.querySelector('.sidebar-container') as HTMLDivElement;

      expect(
        sidebarContainer
      ).toBeInTheDocument() 
      
    //   const styles = window.getComputedStyle(sidebarContainer);

    //   expect(styles.position).toBe('fixed');
    // expect(styles.top).toBe('0px');
  
    })
});


describe('<HomePage />', () => {
    test('should be presence of table that shows the data after a while', async () => {
      render(
          <BrowserRouter>
            <Routes>
              <Route path="/users" element={<HomePage />} />
            </Routes>
          </BrowserRouter>,
          { container }
        );

        waitFor(() => {
            const tables = container.getElementsByTagName('table');
            expect(tables).toBeInTheDocument();
        });
  
    })
});