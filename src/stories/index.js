import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { Speaker }  from '../speaker/speaker';
import { SpeakerList }  from '../speaker/speaker-list';
import { EventTitle }  from '../event/event-title';
import { EventContent }  from '../event/event-content';
import { Event }  from '../event/event';
import { Control }  from '../control/control';
import { Generator }  from '../generator/generator';



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Talk Banner', module)
  .add('Speaker Bio', () => <Speaker picture="" bio=""></Speaker>)
  .add('Speaker Bio List', () => {return (<SpeakerList>
                                            <Speaker picture="" bio=""></Speaker>
                                            <Speaker picture="" bio=""></Speaker>
                                          </SpeakerList>)})
  .add('EventTitle', () => <EventTitle/>)
  .add('EventContent', () => <EventContent/>)
  .add('Event Banner', () => { return (<Event>
                                         <Speaker picture="" bio=""></Speaker>
                                         <Speaker picture="" bio=""></Speaker>
                                       </Event>)})
  .add('Control Panel', () => <Control/>)
  .add('Banner Generator', () => <Generator/>);
