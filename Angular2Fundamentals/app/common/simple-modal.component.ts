
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../common/jQuery.service';

@Component({
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModal-label">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModal-label">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>`,
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: boolean;
    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    closeModal() {
        if (this.closeOnBodyClick) {
            this.$(`#${this.elementId}`).modal('hide');
        }
    }
}
