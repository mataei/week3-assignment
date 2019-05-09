import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.props('children')).toBeDefined();
});

it('renders', () => {
	const wrapper = render(<App />);
	expect(wrapper).toMatchSnapshot();
});

it('mounts', () => {
	const wrapper = mount(<App />);
	expect(wrapper).toMatchSnapshot();
});

