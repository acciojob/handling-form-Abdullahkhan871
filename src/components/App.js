import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (data) {
      console.log(`value changed: ${data}`);
    }
  }, [data]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
    </div>
  );
};

export default App;
