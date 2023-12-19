import { action } from '@storybook/addon-actions';
import { UnControlledOnOff } from './UnControlledOnOff';
import { useState } from 'react';

export default {
   component: UnControlledOnOff,
};

export const UnControlledChange = () => {
   return <UnControlledOnOff />
}