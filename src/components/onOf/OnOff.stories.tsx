import { action } from '@storybook/addon-actions';
import { OnOff} from './OnOff';
import { useState } from 'react';

export default {
   component: OnOff,
};

const collback = action("on click")
export const On = () => {
   return <OnOff value={true} setSwitchOnOff={collback} />
}
export const Off = () => {
   return <OnOff value={false} setSwitchOnOff={collback} />
}

export const OnOffChange = () => {
   const [change, setChange] = useState(false)
   return <OnOff value={change} setSwitchOnOff={setChange} />
}