// import { MessagesResolver } from './_resolvers/messages.resolver';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './member-details/member-details.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: 'members/:id', component: MemberDetailsComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
