import React, { useState, useEffect } from 'react';
import { ARCASocket, State } from 'arca-redux';

interface AppProps {
  socket: ARCASocket,
}

const App: React.FunctionComponent<AppProps> = ({
  socket,
}) => {
  const [binnacleData, setBinnacleData] = useState(null);

  useEffect(() => {
    socket.store.subscribe(() => {
      const state: State = socket.store.getState();

      setBinnacleData(state.Source['AAU-APU-AEU-Tasks-Gantt']);
    });

    socket.Select('AAU-APU-AEU-Tasks-Gantt');
    socket.GetInfo('AAU-APU-AEU-Tasks-Gantt');
    socket.Subscribe('AAU-APU-AEU-Tasks-Gantt');
  }, [socket]);

  return (
    <div className='page'>
      {
        JSON.stringify(binnacleData)
      }
    </div>
  );
};

export default App;
