import type { Meta, StoryObj } from '@storybook/react';

import AutocompletesDependecyFields from './autocompletes-dependecy-fields';

const meta: Meta<typeof AutocompletesDependecyFields> = {
  title: 'Components/Autocompletes Dependecy Fields',
  component: AutocompletesDependecyFields,
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

export const SingleValue: StoryObj<typeof AutocompletesDependecyFields> = {
  args: {
    options,
    name: 'autocomplete',
    label: 'Select an option',
    required: true,

    options2: options,
    selected: '4',
    name2: 'autocomplete2',
    label2: 'Select an option',
    required2: true,
    id: 'autocomplete',
    id2: 'autocomplete2',
  },
};

export const MultipleValues: StoryObj<typeof AutocompletesDependecyFields> = {
  args: {
    options,
    multiple: true,
    name: 'autocomplete',
    selected: ['4', '7'],
    label: 'Select an option',
    required: true,
    options2: options,
    multiple2: true,
    name2: 'autocomplete2',
    label2: 'Required options',
    required2: false,
    id: 'autocomplete',
    id2: 'autocomplete2',
  },
};
