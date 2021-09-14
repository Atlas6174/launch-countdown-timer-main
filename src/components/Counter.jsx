import React, {
  useState,
  useEffect
} from "react";

import FlipDown from "./FlipDown";

import StyledCounter from "./Counter.styles";

const Counter = ({ title, finalDate }) => {

  const [time, setTime] = useState(
      {days: '00', hours: '00', minutes: '00', seconds: '00'}
  );
  const [oldTime, setOldTime] = useState(
    {days: '01', hours: '01', minutes: '01', seconds: '01'}
  );

  useEffect(() => {
    setInterval(() => {
      const { currTime, oldTime } = updateTime();
      const timeWithZeros = {
	curr: addZeros(currTime),
	old: addZeros(oldTime)
      };
      setTime(timeWithZeros.curr);
      setOldTime(timeWithZeros.old);
    }, 1000);
  });

  // Return an Object with the new time to show and its ol values
  const updateTime = () => {
    const start = new Date();
    const remainTime =  finalDate - start;

    // Define the new time
    const days = Math.floor(remainTime / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (remainTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((remainTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainTime % (60 * 1000)) / 1000);

    // Define the old time
    const oldDays = days - 1;

    // The old values are equal to the new ones plus one, except when the new
    // values reach its maximum (the days haven't maximum, so, its value
    // shouldn't be handled)
    const oldHours = hours === 23
      ? 0
      : hours + 1;
    const oldMinutes = minutes === 59
      ? 0
      : minutes + 1;
    const oldSeconds = seconds === 59
      ? 0
      : seconds + 1;



    return {
      currTime: {days, hours, minutes, seconds},
      oldTime: {
	days: oldDays,
	hours: oldHours,
	minutes: oldMinutes,
	seconds: oldSeconds
      }
    };
  }

  // Conver the each time value to sring and add a zero if needed
  const addZeros = ({days, hours, minutes, seconds}) => {
    const dateZeros = {};
    days < 10
      ? dateZeros.days = `0${days}`
      : dateZeros.days = `${days}`;
    hours < 10
      ? dateZeros.hours = `0${hours}`
      : dateZeros.hours = `${hours}`;
    minutes < 10
      ? dateZeros.minutes = `0${minutes}`
      : dateZeros.minutes = `${minutes}`;
    seconds < 10
      ? dateZeros.seconds = `0${seconds}`
      : dateZeros.seconds = `${seconds}`;

    return dateZeros;
  }

  return (
    <StyledCounter>
      <StyledCounter.Title>{title}</StyledCounter.Title>
      <StyledCounter.Container>
	<FlipDown
	  newValue={time.days}
	  oldValue={oldTime.days}
	  label="DAYS"
	/>
	<FlipDown
	  newValue={time.hours}
	  oldValue={oldTime.hours}
	  label="HOURS"
	/>
	<FlipDown
	  newValue={time.minutes}
	  oldValue={oldTime.minutes}
	  label="MINUTES"
	/>
	<FlipDown
	  newValue={time.seconds}
	  oldValue={oldTime.seconds}
	  label="SECONDS"
	/>
      </StyledCounter.Container>
    </StyledCounter>
  );
}

export default Counter;
