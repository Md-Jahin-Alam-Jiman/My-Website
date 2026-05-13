import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function useTime(formatString = 'HH:mm:ss') {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return format(time, formatString);
}
