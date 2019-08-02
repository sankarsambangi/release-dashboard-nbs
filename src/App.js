import React from 'react';
import List from '@material-ui/core/List'
import { createMuiTheme } from '@material-ui/core';
import DetailsCard from './components/DetailsCard'
import NavBar from './components/NavBar'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  color: {
    primary: blue
  }
});

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      Stages: props.response.Stages
    }
  }

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
    };

    console.log(this.state.Stages);
    let rtlItems = this.state.Stages.RTL.map((release) => <DetailsCard details={release} />);
    let liveItems = this.state.Stages.Live.map((release) => <DetailsCard details={release} />);

    return <MuiThemeProvider theme={theme}>
      <div className="container">
        <NavBar />
        <List style={flexContainer}>
          <DetailsCard title='RTL'/>
          {rtlItems}
        </List>
        <List style={flexContainer}>
        <DetailsCard title='Live'/>
          {liveItems}
        </List>
      </div>
    </MuiThemeProvider>
  }
}

export default App;
