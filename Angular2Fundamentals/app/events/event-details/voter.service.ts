import { Injectable } from '@angular/core';
import { ISession } from '../shared/index';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoterService {
    constructor(private http: Http) {
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        return this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
            .catch(this.handleError).subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.post(url, JSON.stringify({}), options)
            .catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}
