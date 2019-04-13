import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPersonsComponent } from './list-persons/list-persons.component';
import { TabsPersonDetailsComponent } from './tabs-person-details/tabs-person-details.component';

const routes: Routes = [
    {
        path: '',
        component: ListPersonsComponent,
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: TabsPersonDetailsComponent,
    },
    {
        path: ':id/emails',
        component: TabsPersonDetailsComponent,
    },
    {
        path: ':id/skills',
        component: TabsPersonDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonsRoutingModule {
}
