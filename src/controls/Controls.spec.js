import React from 'react';
import {render} from '@testing-library/react'

import Controls from '../controls/Controls'


test('Controls renders correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
    
});