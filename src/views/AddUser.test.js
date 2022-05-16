import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import '@testing-library/jest-dom';

describe('Add User', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Lewis' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '77%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.9' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Lewis');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Lewis' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '77%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.9' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Lewis');
    expect(newUser).not.toBeInTheDocument();
  });
});
