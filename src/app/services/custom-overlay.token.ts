import { InjectionToken } from '@angular/core';
import { EntryData } from './overlay.service';

export const CUSTOM_OVERLAY_DIALOG_DATA = new InjectionToken<EntryData>('FILE_PREVIEW_DIALOG_DATA');
