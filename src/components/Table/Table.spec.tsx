import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { useFetchSatellites } from '../../queries/useFetchSatellites';
import { satellitesDataMock } from '../../mocks/satellite.mock';
jest.mock('../../queries/useFetchSatellites');

  
describe('Table', () => {
    const mockUseFetchSatellites = useFetchSatellites as jest.Mock;

    mockUseFetchSatellites.mockImplementation(() => ({
        data: satellitesDataMock,
        isLoading: false,
        isError: false,
        refetch: jest.fn(),
    }));

    it('should render', () => {
        render(<Table />);
        const tableContainer = screen.queryByTestId('table-container');
        expect(tableContainer).toBeTruthy();
    });

    it('should render loading', () => {
        mockUseFetchSatellites.mockImplementation(() => ({
            data: satellitesDataMock,
            isLoading: true,
            isError: false,
            refetch: jest.fn(),
        }));
        render(<Table />);
        const loadingContainer = screen.queryByTestId('loading-container');
        expect(loadingContainer).toBeTruthy();
    });
});

