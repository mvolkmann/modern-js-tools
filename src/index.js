// @flow
'use strict';

import {onLoad} from './demo';

// immediately invoked function expression (IIFE)
(() => (window.onload = onLoad.bind(null, document)))();
