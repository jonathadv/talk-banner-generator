import React from 'react';
//import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, color } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import { Generator }  from '../generator/generator';

setOptions({ downPanelInRight: true, showLeftPanel: false });


storiesOf('Talk Banner', module)
  .addDecorator(withKnobs)
  .add('Banner Generator', () => {
        const title = text("Talk Title", "");;
        const description = text("Talk Descr", "");
        const backgroundColor = color('Bg Color', '#ffffff');
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
//          const name = text(`${key}   Name`, "");
            const bio = text(`${key}  Bio`, "");

            console.log('###: ', backgroundColor)
            speakersList.push({name: name, bio: bio })
        }
        return (<Generator title={title} 
                           description={description} 
                           speakers={speakersList} 
                           bgColor={backgroundColor}/>);
   });


