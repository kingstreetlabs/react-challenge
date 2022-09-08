import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import { DocumentTableRow } from './DocumentTableRow';

Enzyme.configure({ adapter: new Adapter() });

describe('<DocumentTableRow />', () => {
  const props = {
    name: 'Harry Potter',
    removeDocFromList: sinon.stub(),
  }

  it('renders correctly', () => {
    const documentTableRow = mount(<DocumentTableRow {...props} />);
    const name = documentTableRow.find('td').at(0);
    expect(name.text()).toEqual(props.name);
  });
});