import { type Meta, type StoryObj } from '@storybook/react';
import { type BrandingBarProps } from '../../02-components/branding-bar/branding-bar';
import { type SidebarMenuProps } from '../../02-components/sidebar-menu/sidebar-menu';
import Brand, { type BrandProps } from '../../02-components/brand/brand';
import Context, {
  type ContextProps,
} from '../..//02-components/context/context';
import { Default as BrandingBarStory } from '../../02-components/branding-bar/branding-bar.stories';
import { Default as BrandStory } from '../../02-components/brand/brand.stories';
import { UniversityAndCampus as ContextStory } from '../../02-components/context/context.stories';
import { Default as SidebarMenuStory } from '../../02-components/sidebar-menu/sidebar-menu.stories';
import TwoColumnLayout from './two-column-layout';
import PageLayout from '../page-layout/page-layout';
import React from 'react';
import { Typography } from '@mui/material';
import Placeholder from '../../02-components/placeholder/placeholder';
import CardQuickLinks from '../../02-components/card-quick-links/card-quick-links';
import { Default as CardQuickLinksStory } from '../../02-components/card-quick-links/card-quick-links.stories';
import CardBasicLinks from '../../02-components/card-basic-links/card-basic-links';
import { Default as CardBasicLinksStory } from '../../02-components/card-basic-links/card-basic-links.stories';
import OfferingList from '../../02-components/offering-list/offering-list';
import { PartnerDashboard as OfferingListStory } from '../../02-components/offering-list/offering-list.stories';

const meta: Meta<typeof PageLayout> = {
  title: 'Layouts/Two Column',
  component: PageLayout,
};

export default meta;

// Render functions.
const renderedFirstContent = (
  <Placeholder>
    <Typography variant="body1">firstContent</Typography>
  </Placeholder>
);

const renderedSecondContent = (
  <Placeholder>
    <Typography variant="body1">secondContent</Typography>
  </Placeholder>
);

export const Default: StoryObj<typeof PageLayout> = {
  render: (args) => (
    <PageLayout {...args}>
      <TwoColumnLayout
        firstContent={renderedFirstContent}
        secondContent={renderedSecondContent}
      />
    </PageLayout>
  ),
  args: {
    brandingBarLinks: BrandingBarStory.args as BrandingBarProps,
    sidebarLinks: SidebarMenuStory.args as SidebarMenuProps,
    brand: <Brand {...(BrandStory.args as BrandProps)} />,
    context: <Context {...(ContextStory.args as ContextProps)} />,
  },
};

// Render functions.
const renderedFirstContentPartnerDashboard = (
  <>
    <OfferingList {...OfferingListStory.args} />
  </>
);

const renderedSecondContentPartnerDashboard = (
  <>
    <CardQuickLinks { ...CardQuickLinksStory.args }></CardQuickLinks>
    <br />
    <CardBasicLinks { ...CardBasicLinksStory.args }></CardBasicLinks>
  </>
);

export const PartnerDashboard: StoryObj<typeof PageLayout> = {
  render: (args) => (
    <PageLayout {...args}>
      <TwoColumnLayout
        firstContent={renderedFirstContentPartnerDashboard}
        secondContent={renderedSecondContentPartnerDashboard}
      />
    </PageLayout>
  ),
  args: {
    brandingBarLinks: BrandingBarStory.args as BrandingBarProps,
    sidebarLinks: SidebarMenuStory.args as SidebarMenuProps,
    brand: <Brand {...(BrandStory.args as BrandProps)} />,
    context: <Context {...(ContextStory.args as ContextProps)} />,
  },
};
