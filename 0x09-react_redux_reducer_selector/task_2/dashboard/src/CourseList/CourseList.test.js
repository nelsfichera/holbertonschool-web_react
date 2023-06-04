import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

describe('<CourseList> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('CourseList component renders successfully without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Render 5 times CourseListRow child component', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rowLists = wrapper.find(CourseListRow);
    expect(rowLists.length).toBe(5);
  });
  it('CourseList renders correctly if you pass an empty array listCourses property', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('when you pass a list of courses, the component renders it correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
  });
});
Footer
