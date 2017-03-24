'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import SignupPage from '../client/src/containers/SignupPage';

describe('Component SignupPage', function() {
 it ('should have a class called test', function() {
  const holder = shallow(<SignupPage />);
  expect(holder.is('.test')).to.equal(true);
 })
})