import React from 'react';
import RowBuild1 from './RowBuild1';
import RowBuild2 from './RowBuild2';
import RowBuild3 from './RowBuild3';
import RowBuild4 from './RowBuild4';
import RowBuild5 from './RowBuild5';
import RowBuild6 from './RowBuild6';

const MainContent = React.createClass({
  render() {
    return (
      <div id="maincontent">
        <RowBuild1></RowBuild1>
        <RowBuild2></RowBuild2>
        <RowBuild3></RowBuild3>
        <RowBuild4></RowBuild4>
        <RowBuild5></RowBuild5>
        <RowBuild6></RowBuild6>
      </div>
      );
  }
});

export default MainContent;