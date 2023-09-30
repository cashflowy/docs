import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

function Home() {
  useEffect(() => {
    // Redirect to the desired document
    window.location.href = '/overview/why_cashflowy'; // Change 'intro' to your desired document's name
  }, []);

  return (
    <Redirect to="/overview/why_cashflowy" />
  );
}

export default Home;