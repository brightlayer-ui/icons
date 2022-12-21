import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgIncident = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <path d="M0 0h24v24H0Z" fill="none" />,
        <path d="M3 12a6 6 0 0 1 4-5.65V4.26a8 8 0 0 0 0 15.48v-2.09A6 6 0 0 1 3 12Z" />,
        <path d="M15 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 13a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1Zm4-2h-8v-1l1.33-1v-2.33A2.66 2.66 0 0 1 14 8.2V8a1 1 0 0 1 2 0v.2a2.66 2.66 0 0 1 1.67 2.47V13L19 14Z" />
    ),
    'SvgIncident'
);
export default SvgIncident;
