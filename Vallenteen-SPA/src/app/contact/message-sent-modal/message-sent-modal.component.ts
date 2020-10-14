import { Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'message-sent-modal',
  templateUrl: './message-sent-modal.component.html'
})
export class MessageSentModalComponent {
  @ContentChild('template', { read: TemplateRef }) template: TemplateRef<any>;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 


  openModal() {
    this.modalRef = this.modalService.show(this.template);
  }
}