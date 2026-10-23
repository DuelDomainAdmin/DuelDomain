import { writable } from 'svelte/store';

export type NotifyType = 'success' | 'error' | 'neutral';

export interface Notification {
  id: string;
  type: NotifyType;
  message: string;
}

function createNotifyStore() {
  const { subscribe, update } = writable<Notification[]>([]);

  return {
    subscribe,
    success: (message: string) => {
      const id = crypto.randomUUID();
      update(notifications => [...notifications, { id, type: 'success', message }]);
      setTimeout(() => {
        update(notifications => notifications.filter(n => n.id !== id));
      }, 5000);
    },
    error: (message: string) => {
      const id = crypto.randomUUID();
      update(notifications => [...notifications, { id, type: 'error', message }]);
      setTimeout(() => {
        update(notifications => notifications.filter(n => n.id !== id));
      }, 5000);
    },
    neutral: (message: string) => {
      const id = crypto.randomUUID();
      update(notifications => [...notifications, { id, type: 'neutral', message }]);
      setTimeout(() => {
        update(notifications => notifications.filter(n => n.id !== id));
      }, 5000);
    },
    dismiss: (id: string) => {
      update(notifications => notifications.filter(n => n.id !== id));
    }
  };
}

export const notify = createNotifyStore();