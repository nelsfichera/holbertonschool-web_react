import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getFullYear returns current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
  test('getFooterCopy returns correct string when input is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });
  test('getFooterCopy returns correct string when input is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toEqual(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});