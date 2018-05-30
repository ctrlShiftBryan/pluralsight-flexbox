import React from 'react';

const CFlexWrap = ({ display, flexDirection, flexWrap, itemsTotal, width }) => {
  const containerStyle = {
    border: 'solid 2px black',
    display,
    flexDirection,
    flexWrap,
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

CFlexWrap.defaultProps = {
  display: 'inline-flex',
  flexDirection: 'row',
  itemsTotal: 3,
  flexWrap: 'no-wrap',
  width: '%50',
};

export default CFlexWrap;
