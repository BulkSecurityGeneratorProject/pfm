import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PfmSharedModule } from '../../shared';
import {
    TransactionService,
    TransactionPopupService,
    TransactionComponent,
    TransactionDetailComponent,
    TransactionDialogComponent,
    TransactionPopupComponent,
    TransactionDeletePopupComponent,
    TransactionDeleteDialogComponent,
    transactionRoute,
    transactionPopupRoute,
    TransactionResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...transactionRoute,
    ...transactionPopupRoute,
];

@NgModule({
    imports: [
        PfmSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TransactionComponent,
        TransactionDetailComponent,
        TransactionDialogComponent,
        TransactionDeleteDialogComponent,
        TransactionPopupComponent,
        TransactionDeletePopupComponent,
    ],
    entryComponents: [
        TransactionComponent,
        TransactionDialogComponent,
        TransactionPopupComponent,
        TransactionDeleteDialogComponent,
        TransactionDeletePopupComponent,
    ],
    providers: [
        TransactionService,
        TransactionPopupService,
        TransactionResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PfmTransactionModule {}
