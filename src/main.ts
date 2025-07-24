/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {MAT_DATE_LOCALE, provideNativeDateAdapter, VERSION as MAT_VERSION} from '@angular/material/core';
import {DatepickerOverviewExample} from './example/datepicker-overview-example';
import {MatDatepickerIntl} from "@angular/material/datepicker";
import {Injectable, LOCALE_ID} from "@angular/core";

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

@Injectable()
export class DeIntl extends MatDatepickerIntl {
  override calendarLabel              = 'Kalender';
  override openCalendarLabel          = 'Kalender öffnen';
  override closeCalendarLabel         = 'Kalender schließen';

  override nextMonthLabel             = 'Nächster Monat';
  override prevMonthLabel             = 'Vorheriger Monat';

  override nextYearLabel              = 'Nächstes Jahr';
  override prevYearLabel              = 'Vorheriges Jahr';

  override nextMultiYearLabel         = 'Nächste 24 Jahre';
  override prevMultiYearLabel         = 'Vorherige 24 Jahre';

  override switchToMonthViewLabel     = 'Zur Monatsansicht wechseln';
  override switchToMultiYearViewLabel = 'Zur Jahresansicht wechseln';

  override startDateLabel             = 'Startdatum';
  override endDateLabel               = 'Enddatum';

  /** “2020 – 2025” (used in the view header). */
  override formatYearRange(start: string, end: string): string {
    return `${start} – ${end}`;
  }

  /** “Jahre 2020 – 2025” (used for screen-reader labels). */
  override formatYearRangeLabel(start: string, end: string): string {
    return `Jahre ${start} – ${end}`;
  }
}

bootstrapApplication(DatepickerOverviewExample, {
  providers: [provideHttpClient(),

    {provide: LOCALE_ID,      useValue: 'de-DE'},

    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},

    {provide: MatDatepickerIntl, useClass: DeIntl},

    provideNativeDateAdapter(),],
}).catch(err => console.error(err));
