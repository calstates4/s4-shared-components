import { FormEvent, RefObject } from 'react';
import { type RefHandler } from '../components/02-components/tabs/tabs';
import { type Theme } from '@mui/material';

export function checkRequiredFormFieldsTabs(
  event: FormEvent<HTMLButtonElement>,
  tabPanelClassName: string,
  refHandler: RefObject<RefHandler>,
) {
  const form = event.currentTarget.closest('form');
  if (form && form.elements.length) {
    for (let i = 0; i < form?.elements.length; i++) {
      const element = form.elements[i] as HTMLInputElement;
      if (element && !element.checkValidity()) {
        const tab = element.closest(`.${tabPanelClassName}`);
        if (tab) {
          const tabIndex = tab.getAttribute('data-panel-index');
          if (tabIndex && refHandler.current) {
            refHandler.current.setActiveTab(parseInt(tabIndex));
            break;
          }
        }
      }
    }
  }
}

export function experienceStatusInfo(
  theme: Theme,
): Record<string, { color: string; label: string }> {
  return {
    program_course: {
      color: theme.palette.warning.light,
      label: 'Program Course',
    },
    draft: {
      color: theme.palette.warning.light,
      label: 'Health & Safety Acknowledgement',
    },
    approval: {
      color: theme.palette.warning.main,
      label: 'Approval',
    },
    duration: {
      color: theme.palette.warning.main,
      label: 'Duration',
    },
    published: {
      color: theme.palette.success.light,
      label: 'Active',
    },
    archived: {
      color: theme.palette.success.dark,
      label: 'Archived',
    },
  };
}
