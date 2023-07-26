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
    draft: {
      color: theme.palette.warning.light,
      label: 'Risk Acknowledgment',
    },
    pending: {
      color: theme.palette.warning.main,
      label: 'Pending',
    },
    approved: {
      color: theme.palette.success.main,
      label: 'Approved',
    },
    declined: {
      color: theme.palette.secondary.main,
      label: 'Declined',
    },
    site_staff: {
      color: theme.palette.error.light,
      label: 'Site Staff',
    },
    duration: {
      color: theme.palette.teal.main,
      label: 'Duration',
    },
    grace_period: {
      color: theme.palette.blue.main,
      label: 'Grace Period',
    },
    published: {
      color: theme.palette.success.light,
      label: 'Active',
    },
    success: {
      color: theme.palette.success.dark,
      label: 'Success',
    },
    incomplete: {
      color: theme.palette.error.main,
      label: 'Incomplete',
    },
  };
}
