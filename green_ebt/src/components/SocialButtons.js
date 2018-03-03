import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcons } from 'react-social-icons';


let urls = [
  'http://twitter.com/',
  'http://www.facebook.com',
  'http://www.instagram.com'
];


ReactDOM.render(<SocialIcons urls={urls} color="#7293a0" />, document.body);
