import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  let cabinsOccupied = 0;

  bookings.forEach((booking) => {
    const todayDate = new Date();
    const start = new Date(booking.startDate);
    start.setHours(12, 0, 0, 0);
    const end = new Date(booking.endDate);
    end.setHours(12, 0, 0, 0);
    if (
      todayDate > start &&
      todayDate < end &&
      booking.status === 'checked-in'
    ) {
      cabinsOccupied++;
    }
  });
  const availableCabins = cabinCount - cabinsOccupied;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Free cabins"
        color="yellow"
        icon={<HiOutlineHomeModern />}
        value={availableCabins}
      />
    </>
  );
}

export default Stats;
