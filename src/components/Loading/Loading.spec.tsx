import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('should render', () => {
    render(<Loading loading />);
    const loadingContainer = screen.queryByTestId('loading-container');
    
    expect(loadingContainer).toBeTruthy();
  });

  it('should not render', () => {
    render(<Loading loading={false} />);
    const loadingContainer = screen.queryByTestId('loading-container');
    
    expect(loadingContainer).toBeNull();
  });
});
