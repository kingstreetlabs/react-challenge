import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  // Enzyme version
  it('enzyme test', () => {
    const a = mount(<Home />);
    a.find('input').at(0).simulate('change', { target: { value: 'Doc 4' } });
    a.find('button').at(0).simulate('click');
    const b = a.find('tr.document-row').at(3);
    const c = b.find('td').at(0);
    expect(c.text()).toEqual('Doc 4');
  });

  // RTL version
  it('rtl test', () => {

  });
});