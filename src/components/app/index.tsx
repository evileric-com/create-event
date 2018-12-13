import * as React from 'react';

import {EventData} from '../event'
import {PhotoDrop, PhotoPreview} from '../photos'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <EventData />
        <PhotoDrop />
        <PhotoPreview />
      </div>
    );
  }
}

export default App;
