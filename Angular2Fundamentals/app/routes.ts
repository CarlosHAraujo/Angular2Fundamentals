import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventListResolver,
    EventResolver
} from './events/index';
import { Error404Component } from './error/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];

//@NgModule({
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule],
//})
//export class EventListRoutingModule { }

//export const routedComponents = [EventsListComponent]