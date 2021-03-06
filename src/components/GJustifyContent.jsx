import React from 'react';

const GJustifyContent = ({ display, justifyContent, itemsTotal }) => {
  const containerStyle = {
    display,
    border: 'solid 2px black',
    justifyContent,
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

GJustifyContent.defaultProps = {
  display: 'flex',
  itemsTotal: 3,
  justifyContent: 'flex-start',
};

export default GJustifyContent;
