import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import NavBar from '../components/constellations/NavBar';
import Page from '../components/galaxies/Page';

export default withRouter(({ router: { query: { data, links } } }) => (
  <Fragment>
    <NavBar links={links} />
    <Page data={data} />
  </Fragment>
));