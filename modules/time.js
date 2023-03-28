/* eslint-disable no-undef */
export const { DateTime } = luxon;
export const updateTime = () => {
  const now = DateTime.now();
  const dateTime = now.toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('current-time').querySelector('p').textContent = dateTime;
};
