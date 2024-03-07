// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import SearchableDropdown from './SearchableDropdown';

// describe('SearchableDropdown', () => {
//     let onClickMock: jest.Mock<void, [string]>;

//     beforeEach(() => {
//         onClickMock = jest.fn();
//         render(
//             <SearchableDropdown
//                 options={[
//                     { label: 'Fred Flintstone', value: 'fred' },
//                     { label: 'Maddison Stone', value: 'maddison' },
//                     {
//                         label: 'Other Such Things',
//                         value: 'otherSuchThings',
//                     },
//                     { label: 'John Doe', value: 'john' },
//                     { label: 'Jane Doe', value: 'jane' },
//                     { label: 'Alice Wonderland', value: 'alice' },
//                     { label: 'Bob Builder', value: 'bob' },
//                     { label: 'Eve Smith', value: 'eve' },
//                     { label: 'Charlie Chaplin', value: 'charlie' },
//                     { label: 'Grace Hopper', value: 'grace' },
//                 ]}
//                 placeholder={'test'}
//                 onChange={onClickMock}
//             />
//         );
//     });

//     test('triggers onChange callback with click of listitem and updates the input field to display the clicked value.', async () => {
//         const dropdownInput = screen.getByPlaceholderText('test');
//         await userEvent.click(dropdownInput);
//         const listItems = screen.getAllByRole('listitem');
//         await userEvent.click(listItems[0]);
//         expect(onClickMock).toHaveBeenCalledTimes(1);
//         expect(onClickMock).toHaveBeenCalledWith('fred');
//         expect(dropdownInput).toHaveValue('Fred Flintstone');
//     });

//     test('shows full list of data when input is focused', async () => {
//         const user = userEvent.setup();
//         const dropdownInput = screen.getByPlaceholderText('test');
//         await user.click(dropdownInput);
//         const listItems = screen.getAllByRole('listitem');
//         expect(listItems.length).toBe(10);
//     });

//     test('filters to expected length when input is typed into', async () => {
//         const user = userEvent.setup();
//         const dropdownInput = screen.getByPlaceholderText('test');
//         await user.type(dropdownInput, 'j');
//         const listItems = screen.getAllByRole('listitem');
//         expect(listItems.length).toBe(2);
//     });

//     test('clears the input field when clicking the cross button', async () => {
//         const user = userEvent.setup();
//         const dropdownInput = screen.getByPlaceholderText('test');
//         await user.type(dropdownInput, 'test123');
//         const resetSearchButton = screen.getByTestId('reset');
//         await user.click(resetSearchButton);
//         expect(dropdownInput).toHaveValue('');
//     });
// });
