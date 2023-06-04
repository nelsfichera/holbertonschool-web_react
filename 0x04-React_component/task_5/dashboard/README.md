## 9. Declare a pure component
### In task_5/dashboard/src/Notifications/NotificationItem.js:
* Modify the component to make it “pure”. Which means that it will only update when its props and state are different
* 10. Make your own pure component
* In task_5/dashboard/src/Notifications/Notifications.js:
  * Modify the file so it only updates itself when the new property listNotifications has a longer list of elements than the previously
* You must implement the function shouldComponentUpdate to add this performance optimization
## 11. Add a test
### In task_5/dashboard/src/Notifications/Notifications.test.js, add two checks:
* The first check should verify that when updating the props of the component with the same list, the component doesn’t rerender
* The second check should verify that when updating the props of the component with a longer list, the component does rerender
* Since the NotificationItem component is a function component, you can’t directly use React.PureComponent
* Using the React Chrome Extension to make sure the Notifications component does not rerender will not work because the extension bypass shouldComponentUpdate. Use the test to verify your code instead
* You can use the function setProps to change the props of the component
* The console in your browser should not show any error or warning