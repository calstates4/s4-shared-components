import type { Meta, StoryObj } from '@storybook/react';

import AutocompleteField from './autocomplete-field';

const meta: Meta<typeof AutocompleteField> = {
  title: 'Components/Autocomplete Field',
  component: AutocompleteField,
};

export default meta;

const options = [
  {
    id: '1',
    label: 'Option 1',
  },
  {
    id: '2',
    label: 'Option 2',
  },
  {
    id: '3',
    label: 'Option 3',
  },
  {
    id: '4',
    label: 'Option 4',
  },
  {
    id: '5',
    label: 'Option 5',
  },
  {
    id: '6',
    label: 'Option 6',
  },
  {
    id: '7',
    label: 'Option 7',
  },
  {
    id: '8',
    label: 'Option 8',
  },
  {
    id: '9',
    label: 'Option 9',
  },
];

export const SingleValue: StoryObj<typeof AutocompleteField> = {
  args: {
    options,
    selected: '7',
    name: 'autocomplete',
    label: 'Select an option',
    required: true,
  },
};

export const MultipleValues: StoryObj<typeof AutocompleteField> = {
  args: {
    options,
    multiple: true,
    name: 'autocomplete',
    selected: ['4', '7'],
    label: 'Select an option',
    required: true,
  },
};
