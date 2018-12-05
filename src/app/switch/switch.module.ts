import {NgModule} from '@angular/core';
import {RouterModule,Routes,CanActivate} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TransactionsComponent} from './transactions/transactions.component';
import {ZsequenceComponent} from './zsequence/zsequence.component';
import {ResponseComponent} from './response/response.component';
import {SwitchService} from './switch.service';
import {MaterialModule} from '../material.module';
const routes:Routes = [
    {
        path:'transactions',
        component:TransactionsComponent
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
    imports:[RouterModule.forChild(routes),MaterialModule],
    exports:[],
    declarations:[TransactionsComponent,ZsequenceComponent,ResponseComponent],
    providers:[SwitchService]
})
export class SwitchModule{}