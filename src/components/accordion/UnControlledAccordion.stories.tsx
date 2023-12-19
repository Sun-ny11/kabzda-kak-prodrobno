import { action } from '@storybook/addon-actions';

import { UnControlledAccordion } from './UnControlledAccordion';
import { useState } from 'react';

export default {
   component: UnControlledAccordion,
};


export const UnControlled = () => {
   return <UnControlledAccordion titleValue={' Жмяк   '} />
}