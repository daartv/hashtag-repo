import chai from 'chai';
import jsxChai from 'jsx-chai';
 
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import shallowTestUtils from 'react-shallow-testutils';

import LoginPage from './client/src/container/LoginPage';

chai.use(jsxChai);
 
const expect = chai.expect;

describe('Login', function(){
 
  let renderer, loginpage;
 
  beforeEach(function(){
    renderer = TestUtils.createRenderer();
 
    renderer.render(
      <LoginPage />
    );
 
    loginpage = renderer.getRenderOutput();
  });
  
  it('renders a login page', function(){
    expect(loginpage).toExist();
  });
});