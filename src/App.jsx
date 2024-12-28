import "./App.css";

import Calendar from "./Calendar";
import {useEffect, useState} from "react";
import useFetch from "use-http";

function App() {
  const [events, setEvents] = useState([])
  const { get } = useFetch(import.meta.env.VITE_DAILY_CHECK_API);

  useEffect(() => {
    if (window.location.hash.length === 0) {
      return;
    }

    get(window.location.hash.substring(1)).then(resp => {
      for (let e of resp.result) {
        setEvents([
            ...events, { start: e.createdAt, end: e.createdAt, ...e },
        ]);
      }
    }).catch(() => {});
  }, [get]);

  return (
      <Calendar
          events={events}
      />
  )
}

export default App
