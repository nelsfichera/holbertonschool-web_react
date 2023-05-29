/**
 * GetFullYear returns the current year.
 * @returns The current year.
 */
export const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  
  /**
   * This function returns a string that is either 'Holberton School' or 'Holberton School main
   * dashboard' depending on the value of the isIndex parameter.
   * @param [isIndex=true] - boolean
   * @returns A function that returns a string.
   */
  export const getFooterCopy = (isIndex = true) => {
    if (isIndex) return 'Holberton School';
    return 'Holberton School main dashboard';
  };
  
  /**
   * It returns a string containing a notification message
   * @returns A string
   */
  export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  };
  Footer
  