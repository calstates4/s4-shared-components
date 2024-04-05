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
    key: '21',
  },
  {
    id: '2',
    label: 'Option 2',
    key: '22',
  },
  {
    id: '3',
    label: 'Option 3',
    key: '23',
  },
  {
    id: '4',
    label: 'Option 4',
    key: '24',
  },
  {
    id: '5',
    label: 'Option 5',
    key: '25',
  },
  {
    id: '6',
    label: 'Option 6',
    key: '26',
  },
  {
    id: '7',
    label: 'Option 7',
    key: '27',
  },
  {
    id: '8',
    label: 'Option 8',
    key: '28',
  },
  {
    id: '9',
    label: 'Option 9',
    key: '29',
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
