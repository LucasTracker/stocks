import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'manage',
        component: ManageComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};