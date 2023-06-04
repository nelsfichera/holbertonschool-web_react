import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseListRow /> Component tests suit', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Render when is header and textSecondCell does´n exists', () => {
    let props = {
      isHeader: true,
      textFirstCell: 'anyString',
    };

    let wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.containsAllMatchingElements([
        <th colSpan={2}>{props.textFirstCell}</th>,
      ])
    ).to.equal(true);
  });

  it('Render when header and textSecondCell does´n exists', () => {
    let props = {
      isHeader: true,
      textFirstCell: 'anyString',
      textSecondCell: 'anyString',
    };

    let component = shallow(<CourseListRow {...props} />);

    expect(
      component.containsAllMatchingElements([
        <th>{props.textFirstCell}</th>,
        <th>{props.textSecondCell}</th>,
      ])
    ).to.equal(true);
  });

  it('Render both td elements when is not header and are give both columns', () => {
    let props = {
      isHeader: false,
      textFirstCell: 'anyString',
      textSecondCell: 'anyString',
    };

    let wrapper = shallow(<CourseListRow {...props} />);

    expect(
      wrapper.containsAllMatchingElements([
        <td>{props.textFirstCell}</td>,
        <td>{props.textSecondCell}</td>,
      ])
    ).to.equal(true);
  });
});