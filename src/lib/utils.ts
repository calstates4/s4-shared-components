import { FormEvent, RefObject } from 'react';
import { type RefHandler } from '../components/02-components/tabs/tabs';

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
