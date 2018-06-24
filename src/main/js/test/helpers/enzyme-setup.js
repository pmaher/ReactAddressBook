'use strict'

import Enzyme, {shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import jsdom from 'jsdom'
//const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

Enzyme.configure({adapter: new Adapter()});
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.window = window;
global.document = window.document;