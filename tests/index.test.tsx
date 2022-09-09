import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  // Enzyme version
  it('enzyme test', () => {
    const home = mount(<Home />);
    const row = home.find('tr.document-row').at(0);
    const name = row.find('td').at(0);
    expect(name.text()).toEqual('Doc 1');
  });

  // RTL version
  it('rtl test', () => {

  });
});