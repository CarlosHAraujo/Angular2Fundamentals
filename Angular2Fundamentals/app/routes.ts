import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './error/404.component'
import { EventRouteActivator } from './events/event-details/event-route.activator.service'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];

//@NgModule({
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule],
//})
//export class EventListRoutingModule { }

//export const routedComponents = [EventsListComponent]