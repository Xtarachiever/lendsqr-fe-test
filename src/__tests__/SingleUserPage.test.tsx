// UserDetails.test.jsx

import { describe, it, beforeAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import User from '../pages/[user]';

// Mock user data
const mockUser = {
  id: 1,
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'ea@gmail.com',
    avatar: 'profile-photo.jpg',
    gender: 'Male',
  },
  accountBalance: '5000',
  accountNumber: '123456789',
};


beforeAll(() => {
  const request = indexedDB.open('test-db', 1);

  request.onupgradeneeded = function(event:any) {
    const db = event?.target?.result
    db.createObjectStore('test-store', { keyPath: 'id' });
  };

  request.onsuccess = function(event:any) {
    const db = event?.target?.result;
    const transaction = db.transaction(['test-store'], 'readwrite');
    const store = transaction.objectStore('test-store');
    store.add(mockUser);
  };
});

describe('UserDetails Component', () => {
  it('displays user details correctly', async () => {
    render(
      <BrowserRouter>
        <User />
      </BrowserRouter>
    );

    // Wait for the user details to be displayed
    waitFor(() => screen.getByTestId('full-name'));

    // // Assert that the user details are displayed correctly
    // const userFullName = screen.getByTestId('full-name');
    // expect(userFullName).toHaveTextContent(`${mockUser.profile.firstName} ${mockUser.profile.lastName}`);

    // const userEmail = screen.getByTestId('bvn');
    // expect(userEmail).toHaveTextContent(mockUser.profile.email);

    // const userAccountBalance = screen.getByTestId('account-balance');
    // expect(userAccountBalance).toHaveTextContent(`₦${mockUser.accountBalance}`);

    // const userAccountNumber = screen.getByTestId('account-number');
    // expect(userAccountNumber).toHaveTextContent(`${mockUser.accountNumber}/Providus Bank`);
  });
});
