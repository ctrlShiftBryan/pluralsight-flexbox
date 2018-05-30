import React from 'react';

const DFlexFlow = ({ display, flexFlow, itemsTotal, width }) => {
  const containerStyle = {
    border: 'solid 2px black',
    height: '30em',
    display,
    flexFlow,
    width,
  };

  const childStyle = {
    width: '5em',
    padding: '1.4em',
  };

  const colors = ['red', 'green', 'blue', 'yellow'];

  const getChild = x => {
    const style = { ...childStyle, backgroundColor: colors[x % colors.length] };
    return (
      <div key={x} style={style}>
        Child Item {x}
      </div>
    );
  };

  const items = Array.from(Array(itemsTotal).keys());
  return <div style={containerStyle}>{items.map(x => getChild(x))}</div>;
};

DFlexFlow.defaultProps = {
  display: 'inline-flex',
  itemsTotal: 3,
  flexFlow: 'row no-wrap',
  width: '50%',
};

export default DFlexFlow;
