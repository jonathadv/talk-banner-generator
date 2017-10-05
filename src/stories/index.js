import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Speaker }  from '../speaker/speaker';
import { SpeakerList }  from '../speaker/speaker-list';
import { EventTitle }  from '../event/event-title';
import { EventContent }  from '../event/event-content';
import { Event }  from '../event/event';
import { Control }  from '../control/control';
import { Generator }  from '../generator/generator';



storiesOf('Talk Banner', module)
  .addDecorator(withKnobs)
  .add('Speaker Bio', () => <Speaker picture="" bio={text("bio", "")}></Speaker>)
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
  .add('Banner Generator', () => {
        const title = text("Title", null);

        return (<Generator title={title}/>);
   });


