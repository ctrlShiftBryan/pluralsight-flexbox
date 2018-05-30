import React from 'react';

const FFlexGrow = ({ display, flexGrow, itemsTotal }) => {
  const containerStyle = {
    display,
    border: 'solid 2px black',
  };

  const childStyle = {
    width: '5em',
    padding: '1.4em',
  };

  const colors = ['red', 'green', 'blue', 'yellow'];

  const getChild = x => {
    let style = {
      ...childStyle,
      backgroundColor: colors[x % colors.length],
    };

    style = {
      ...style,
      flexGrow: flexGrow[x],
    };

    return (
      <div key={x} style={style}>
        Child Item {x}
      </div>
    );
  };

  const items = Array.from(Array(itemsTotal).keys());
  return <div style={containerStyle}>{items.map(x => getChild(x))}</div>;
};

FFlexGrow.defaultProps = {
  display: 'flex',
  itemsTotal: 3,
  flexGrow: [1, 1, 1],
};

export default FFlexGrow;
