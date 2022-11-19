---------------------------------------------------------Exploring UI Testing----------------------------------------------------------------
20L-1286 Hamzah Manzoor
Exploring UI Testing of our selected open source project

The basic Structure for testing used here is:

import React from 'react'
import { mount } from 'enzyme'
import Label from 'react-storefront/Label'
import { Typography } from '@mui/material'

describe('Label', () => {
  let wrapper

  afterEach(() => {
    wrapper.unmount()
  })

  it('should be able to spread props', () => {
    wrapper = mount(<Label testprop="testprop" />)

    expect(wrapper.find(Typography).prop('testprop')).toBe('testprop')
  })
})


The above code is for testing labels.
The first thing you do is import the required stuff. Then comes a kind of class with a keyword "describe" in which you write all the related test cases.
For example, in the above code, we are dealing with label, so all the cases related to label will only be mentioned here.

After that you describe a kind of variable (here "wrapper") and this is used in all the following test cases. 

Then comes the 'afterEach' which is just before our first test case where you always unmount. (Note will be mounting for each test case).

Out test starts with a word "it" and in the following parenthesis you describe that test in plain english. Then comes the main part of out test where we define and tell what a test should do. We first mount and then define a test ( from the above example: testprop="testprop" ). 
The following line ( expect(wrapper.find(Typography).prop('testprop')).toBe('testprop') ) is what we expect from this test. For this test we expect 'testprop' for our label. 


Here is another example where we expect Breadcrumb to be empty when there is no element:

  it('should render empty span when no items provided', () => {
    wrapper = mount(<Breadcrumbs items={null} />)

    expect(wrapper.find(Container).children.length).toBe(1)
  })
  
The same way our test starts with "it" followed by the description of test in plain english. After that mounting, describing our test and finally providing our expectations of the test.

In the same way can write multiple tests in one "describe". 

---------------------------------------------------------Exploring UI Testing----------------------------------------------------------------
