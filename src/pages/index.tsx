import { Redirect } from '@docusaurus/router';
import React from 'react';

import Hotjar from '@hotjar/browser';

const siteId = 3890572;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function Home() {
  return <Redirect to="/overview/why-cashflowy" />
}
