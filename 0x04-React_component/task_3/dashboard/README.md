## 3. Reusable comments & specialization
### Containment
#### Create a new component named BodySection. The component does not know its children. It should output the following:
* A div with the class bodySection
* Within the div, a h2 element containing a title passed as a prop
* Under the h2 the children of BodySection
* Tips:
  * Rendering the following
```
<BodySection title="test">
  <p>test</p>
</BodySection>
```
  * Should generate:
```
<div className="bodySection">
  <h2>test</h2>
  <p>test</p>
</div>
```
## 4. Specialization
### in task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js, create a new component named BodySectionWithMarginBottom. The component does not know its children. It should output the following:
* A div with the class bodySectionWithMargin
* Within the div, a BodySection element with the same props passed to bodySectionWithMargin
* in task_3/dashboard/src/BodySection/BodySection.css
  * Set the style for the class bodySectionWithMargin with a margin bottom of 40px
  * Import the styling into the BodySectionWithMarginBottom component
* Make sure to define the propTypes for both props
* Do not repeat each props manually and use the spread operator
## 5. Use the new components
### in task_3/dashboard/src/App/App.js, modify the App component:
  * Wrap the CourseList component with the newly created BodySectionWithMarginBottom component. The title should be Course list
  * Wrap the Login component with the newly created BodySectionWithMarginBottom component. The title should be Log in to continue
  * Using the BodySection component, add a new block with the title News from the School. The component should contain a paragraph with some random text
## 6. Test the new components
### in task_3/dashboard/src/BodySection/BodySection.test.js:
  * Add one test checking that shallowing the component should render correctly the children and one h2 element
  * E.g. with the following code:
```
<BodySection title="test title">
  <p>test children node</p>
</BodySection>
```
* You should check that:
  * There is one h2 element and it includes the text test title
  * There is one p element and it includes the text test children node
* in task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js:
  * Add one test checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component
* Make sure that the CSS is correctly applied to your component
* The console in your browser should not show any error or warning