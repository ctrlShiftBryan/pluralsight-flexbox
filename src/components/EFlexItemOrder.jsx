import React from 'react';

const EFlexItemOrder = ({ display, itemsTotal }) => {
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
    let style = { ...childStyle, backgroundColor: colors[x % colors.length] };

    style = x == 2 ? { ...style, order: 1 } : style;

    style = x == 5 ? { ...style, order: 1 } : style;
    style = x == 6 ? { ...style, order: 1 } : style;
    return (
      <div key={x} style={style}>
        Child Item {x}
      </div>
    );
  };

  const items = Array.from(Array(itemsTotal).keys());
  return <div style={containerStyle}>{items.map(x => getChild(x))}</div>;
};

EFlexItemOrder.defaultProps = {
  display: 'inline-flex',
  itemsTotal: 5,
};

export default EFlexItemOrder;
