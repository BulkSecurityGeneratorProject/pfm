import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PfmSharedModule } from '../../shared';
import {
    BankService,
    BankPopupService,
    BankComponent,
    BankDetailComponent,
    BankDialogComponent,
    BankPopupComponent,
    BankDeletePopupComponent,
    BankDeleteDialogComponent,
    bankRoute,
    bankPopupRoute,
    BankResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...bankRoute,
    ...bankPopupRoute,
];

@NgModule({
    imports: [
        PfmSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BankComponent,
        BankDetailComponent,
        BankDialogComponent,
        BankDeleteDialogComponent,
        BankPopupComponent,
        BankDeletePopupComponent,
    ],
    entryComponents: [
        BankComponent,
        BankDialogComponent,
        BankPopupComponent,
        BankDeleteDialogComponent,
        BankDeletePopupComponent,
    ],
    providers: [
        BankService,
        BankPopupService,
        BankResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PfmBankModule {}
