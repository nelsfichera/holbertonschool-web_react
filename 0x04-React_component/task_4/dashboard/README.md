## 7. Create WithLogging HOC
### We would like to add a way to log to the console every time a component has been mounted and every time it is about to unmount.
### To not repeat the same code everywhere, create a HOC component in task_4/dashboard/src/HOC/WithLogging.js:
* The component should log to the console Component NAME_OF_THE_WRAPPED_COMPONENT is mounted on componentDidMount()
* The component should log to the console Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount on componentWillUnmount()
* Modify the displayName of the HOC to always display WithLogging(NAME_OF_THE_WRAPPED_COMPONENT) in the React Chrome Extension or for debugging
* NAME_OF_THE_WRAPPED_COMPONENT should be the name of the wrapped component or class. If the wrapped element has no name it should default to Component
## 8. Write a test for the HOC
### in task_4/dashboard/src/HOC/WithLogging.test.js, write some tests for the HOC component:
* The first test should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html
* The second test should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. Component Login is mounted and Component Login is going to unmount should be sent to the console
* Writing a unit test for HOC can be difficult. Create a variable with the HOC wrapping a function rendering the React component or html. e.g. WithLogging(() => <p />)
* Make sure that the messages Component Login is mounted and Component Login is going to unmount are sent when loading the app
* In the test file, make sure to restore the console function you mocked
* The console in your browser should not show any error or warning