import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';

import { screen, render } from '@testing-library/react';

import { DocumentTableRow } from './DocumentTableRow';

Enzyme.configure({ adapter: new Adapter() });

describe('<DocumentTableRow />', () => {
  const props = {
    name: 'Harry Potter',
    removeDocFromList: sinon.stub(),
  }

  // Enzyme version
  it('renders the name of the document', () => {
    const documentTableRow = mount(<DocumentTableRow {...props} />);
    const name = documentTableRow.find('td').at(0);
    expect(name.text()).toEqual(props.name);
  });

  // RTL version
  it('renders the name of the document', () => {

  });
});