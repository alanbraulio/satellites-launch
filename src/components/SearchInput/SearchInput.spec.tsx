import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('should trigger onChange event', () => {
    const onChangeMock = jest.fn();

    render(<SearchInput onChange={onChangeMock} />);
    const inputElement = screen.getByTestId('search-input-input');

    fireEvent.change(inputElement, { target: { value: 'example' } });
    expect(onChangeMock).toHaveBeenCalledWith('example');
  });
});
