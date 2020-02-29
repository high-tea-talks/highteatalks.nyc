import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Page } from '../../components';
import { UserContext } from '../../data';

export function Listing(props) {
  const router = useRouter();
  const { loggedin } = useContext(UserContext);

  useEffect(() => {
    if (loggedin) return;
    router.push('/');
  }, [loggedin]);

  return loggedin ? (
    <Page {...props}>
      <h1>Sponsor Jobs go here!</h1>
    </Page>
  ) : (
    <div />
  );
}
