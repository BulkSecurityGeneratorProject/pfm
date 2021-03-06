import { TxWidgetComponent } from './../tx-widget/tx-widget.component';
import { AccountsWidgetComponent } from './../accounts-widget/accounts-widget.component';
import { AccountWidgetComponent } from './../account-widget/account-widget.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PfmSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { GoalsWidgetComponent } from '../goals-widget/goals-widget.component';

@NgModule({
    imports: [
        PfmSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
        AccountWidgetComponent,
        AccountsWidgetComponent,
        TxWidgetComponent,
        GoalsWidgetComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PfmHomeModule {}
