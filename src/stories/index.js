import { storiesOf } from '@storybook/react';
import React from 'react';
import ADisplay from '../components/ADisplay.jsx';
import BFlexDirection from '../components/BFlexDirection.jsx';
import CFlexWrap from '../components/CFlexWrap.jsx';
import DFlexFlow from '../components/DFlexFlow.jsx';
import EFlexItemOrder from '../components/EFlexItemOrder.jsx';
import FFlexGrow from '../components/FFlexGrow.jsx';
import GJustifyContent from '../components/GJustifyContent.jsx';

storiesOf('A - Flex Display', module)
  .add('display: flex', () => <ADisplay />)
  .add('display: inline-flex', () => <ADisplay display={'inline-flex'} />);

storiesOf('B - Flex Direction', module)
  .add('row', () => <BFlexDirection />)
  .add('row-reverse', () => <BFlexDirection flexDirection={'row-reverse'} />)
  .add('column', () => <BFlexDirection flexDirection={'column'} />)
  .add('column-reverse', () => (
    <BFlexDirection flexDirection={'column-reverse'} />
  ));

storiesOf('C - Flex Wrap', module)
  .add('no-wrap', () => <CFlexWrap itemsTotal={16} />)
  .add('wrap', () => <CFlexWrap flexWrap={'wrap'} itemsTotal={16} />)
  .add('wrap-reverse', () => (
    <CFlexWrap flexWrap={'wrap-reverse'} itemsTotal={16} />
  ));

storiesOf('D - Flex Flow', module)
  .add('column wrap', () => (
    <DFlexFlow flexFlow={'column wrap'} itemsTotal={16} />
  ))
  .add('row-reverse wrap-reverse', () => (
    <DFlexFlow flexFlow={'row-reverse wrap-reverse'} itemsTotal={16} />
  ));

storiesOf('E - Flex Item Order', module)
  .add('order: 1', () => <EFlexItemOrder />)
  .add('order: 1 - multiple', () => <EFlexItemOrder itemsTotal={9} />);

storiesOf('F - FlexGrow', module)
  .add('flex-grow: 1 1 1', () => <FFlexGrow />)
  .add('flex-grow: 1 4 1', () => <FFlexGrow flexGrow={[1, 4, 1]} />);

storiesOf('G - JustifyContent', module)
  .add('flex-start', () => <GJustifyContent justifyContent={'flex-start'} />)
  .add('flex-end', () => <GJustifyContent justifyContent={'flex-end'} />);
