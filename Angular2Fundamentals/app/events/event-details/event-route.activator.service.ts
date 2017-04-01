import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../Shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventNotExists  = !this.eventService.getEvent(+route.params['id'])

        if (eventNotExists) {
            this.router.navigate(['/404'])
        }

        return true;
    }
}
