import firebase from 'firebase/app';
import 'firebase/analytics';

type IActionName =
  | 'configure/flash'
  | 'configure/open'
  | 'configure/cheat_sheet'
  | 'configure/clear_all_changes'
  | 'configure/lighting'
  | 'configure/import_local_file'
  | 'configure/save_keymap'
  | 'configure/restore_keymap';

interface IActionOptions {
  vendor_id?: string | number;
  product_id?: string | number;
  product_name?: string;
}

let analytics: firebase.analytics.Analytics | null;
try {
  analytics = firebase.analytics();
} catch (cause) {
  if (process.env.NODE_ENV === 'production') {
    throw cause;
  } else {
    analytics = null;
  }
}

export const sendEventToGoogleAnalytics = (
  action: IActionName,
  options?: IActionOptions
) => {
  if (analytics) {
    analytics.logEvent<IActionName>(action, options);
  }
};
