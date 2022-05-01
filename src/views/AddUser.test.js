import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Add User', () => {
  it('Renders the component', () => {
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
    screen.getByText('Lewis');
  });
});
