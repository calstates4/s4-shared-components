import { Typography } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import { type BrandingBarProps } from '../../02-components/branding-bar/branding-bar';
import Placeholder from '../../02-components/placeholder/placeholder';
import { type SidebarMenuProps } from '../../02-components/sidebar-menu/sidebar-menu';
import Brand, { type BrandProps } from '../../02-components/brand/brand';
import Context, {
  type ContextProps,
} from '../..//02-components/context/context';
import { Default as BrandingBarStory } from '../../02-components/branding-bar/branding-bar.stories';
import { Default as BrandStory } from '../../02-components/brand/brand.stories';
import { Default as ContextStory } from '../../02-components/context/context.stories';
import { Default as SidebarMenuStory } from '../../02-components/sidebar-menu/sidebar-menu.stories';
import PageLayout from './page-layout';

const meta: Meta<typeof PageLayout> = {
  title: 'Layouts/Page Layout',
  component: PageLayout,
};

export default meta;

export const Default: StoryObj<typeof PageLayout> = {
  render: (args) => (
    <PageLayout {...args}>
      <Placeholder>
        <Typography variant="body1">This is the Main Content.</Typography>
      </Placeholder>
    </PageLayout>
  ),
  args: {
    brandingBarLinks: BrandingBarStory.args as BrandingBarProps,
    sidebarLinks: SidebarMenuStory.args as SidebarMenuProps,
    brand: <Brand {...(BrandStory.args as BrandProps)} />,
    context: <Context {...(ContextStory.args as ContextProps)} />,
  },
};
