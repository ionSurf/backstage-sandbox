// import React from 'react';
// import {
//   HomePageRandomJoke,
//   HomePageStarredEntities,
//   CustomHomepageGrid,
// } from '@backstage/plugin-home';
// import { Content, Header, Page } from '@backstage/core-components';
// import { HomePageSearchBar } from '@backstage/plugin-search';
// // import { HomePageCalendar } from '@backstage/plugin-gcalendar';
// // import { MicrosoftCalendarCard } from '@backstage/plugin-microsoft-calendar';

// export const homePage = (
//   <CustomHomepageGrid>
//     // Insert the allowed widgets inside the grid
//     <HomePageSearchBar />
//     <HomePageRandomJoke />
//     {/* <HomePageCalendar /> */}
//     {/* <MicrosoftCalendarCard /> */}
//     <HomePageStarredEntities />
//   </CustomHomepageGrid>
// );

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageRandomJoke } from '@backstage/plugin-home';

export const homePage = (
  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <HomePageRandomJoke />
    </Grid>
  </Grid>
);
