import React from 'react';
//import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, color } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import { Generator }  from '../generator/generator';

setOptions({ downPanelInRight: true, showLeftPanel: false });


storiesOf('Talk Poster', module)
  .addDecorator(withKnobs)
  .add('Poster Generator', () => {
        const title = text("Talk Title", "");;
        const titleColor = color('Title Color', '#000000');

        const description = text("Talk Desc", "");
        const descriptionColor = color('Desc Color', '#000000');
        
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
            const bio = text(`${key}  Bio`, "");

            speakersList.push({name: name, bio: bio })
        }
        return (<Generator title={title}
                           titleColor={titleColor}
                           description={description} 
                           descriptionColor={descriptionColor}
                           speakers={speakersList} 
                           bgColor={backgroundColor}/>);
   });


