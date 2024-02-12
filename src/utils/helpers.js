import { formatDistance, parseISO } from 'date-fns';

export const formatDistanceFromNow = (startDate) => {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(0, 0, 0, 0);
  const res = formatDistance(parseISO(startDate), end, {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');
  return res;
};

export const getToday = function () {
  const today = new Date();
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'INR' }).format(
    value
  );
