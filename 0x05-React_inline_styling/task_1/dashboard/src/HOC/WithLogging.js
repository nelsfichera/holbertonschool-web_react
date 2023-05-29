import React from 'react';

/**
 * It takes a component as an argument and returns a new component that wraps the original component
 * and logs when it mounts and unmounts
 * @param WrappedComponent - The component that we want to wrap.
 * @returns A class that extends React.Component
 */
export const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = WrappedComponent.name
        ? WrappedComponent.name
        : 'Component';
    }
    componentDidMount() {
      console.log(`Component ${this.displayName} is mounted`);
    }
    componentWillMount() {
      console.log(`Component ${this.displayName} is going to unmount`);
    }

    displayName = () => console.log(`WithLogging(${this.displayName})`);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};