import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { Generator }  from '../generator/generator';
import { setOptions } from '@storybook/addon-options';
setOptions({ downPanelInRight: true, showLeftPanel: false });



storiesOf('Talk Banner', module)
  .addDecorator(withKnobs)
  .add('Banner Generator', () => {
        const title = text("Talk Title", "");;
        const description = text("Talk Descr", "");
        const options = {
           range: true,
           min: 1,
           max: 3,
           step: 1,
        };
        const speakerNumber = number("Number of Speakers", 1, options);
        const speakersList = [];
        for(var i = 1; i <= speakerNumber; i++){
            const key = "Speaker " + i;
            const name = text(`${key}   Name`, "");
            const bio = text(`${key}  Bio`, "");
            const picture = text(`${key}  Picture`, "");

            speakersList.push({name: name, bio: bio })
        }
        return (<Generator title={title} 
                           description={description} 
                           speakers={speakersList} />);
   });


