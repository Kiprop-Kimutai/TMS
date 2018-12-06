import {NgModule} from '@angular/core';
import {RouterModule,Routes,CanActivate} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TransactionsComponent} from './transactions/transactions.component';
import {TransactionDetailComponent} from './transactions/transaction-details.component';
import {ZsequenceComponent} from './zsequence/zsequence.component';
import {ResponseComponent} from './response/response.component';
import {SwitchService} from './switch.service';
import {MaterialModule} from '../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
const routes:Routes = [
    {
        path:'transactions',
        component:TransactionsComponent
    },
    {
        path:'transactions/:token',
        component:TransactionDetailComponent
    },
    {
        path:'zsequence',
        component:ZsequenceComponent
    },
    {
        path:'responsetopos',
        component:ResponseComponent
    },
    {
        path:'',
        redirectTo:'transactions',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes),MaterialModule,FormsModule,ReactiveFormsModule,CommonModule],
    exports:[],
    declarations:[TransactionsComponent,TransactionDetailComponent,ZsequenceComponent,ResponseComponent],
    providers:[SwitchService]
})
export class SwitchModule{}