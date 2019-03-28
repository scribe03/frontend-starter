import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { PersonsRoutingModule } from './persons-routing.module';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { TabsPersonDetailsComponent } from './tabs-person-details/tabs-person-details.component';
import { EmailsPersonComponent } from './tabs-person-details/emails-person/emails-person.component';
import { SkillsPersonComponent } from './tabs-person-details/skills-person/skills-person.component';
import { EditPersonComponent } from './tabs-person-details/edit-person/edit-person.component';

@NgModule({
    declarations: [
        ListPersonsComponent,
        TabsPersonDetailsComponent,
        EditPersonComponent,
        EmailsPersonComponent,
        SkillsPersonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonsRoutingModule,
        // others
        MaterialModule,
        SharedModule,
    ]
})
export class PersonsModule {

}
