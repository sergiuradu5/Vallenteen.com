import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ContactService} from '../_services/contact.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MessageSentModalComponent} from './message-sent-modal/message-sent-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('successTemplate') successTemplate : ElementRef;
  @ViewChild('errorTemplate') errorTemplate : ElementRef;
  modalRef: BsModalRef;
  
  message: any = {};
  charactersAllowed = 1000;
  charactersUsed : number;
  contactForm: FormGroup;
  constructor(private contactService: ContactService,
      private fb: FormBuilder,
      private modalService: BsModalService
    ) { }


  ngOnInit() {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  openSuccessModal() {
    this.modalRef = this.modalService.show(this.successTemplate);
  }
  openErrorModal() {
    this.modalRef = this.modalService.show(this.errorTemplate);
  }
  
  sendMessage() {
    if(this.contactForm.valid)
    {
      let subject = `[vallenteen.com] New Message from ${this.contactForm.get('name').value}`;
      this.message = Object.assign( {}, this.contactForm.value);
      this.message._subject = subject;
      console.log(this.message);

      this.contactService.sendMessage(this.message).subscribe((response) => {
        window.open( 
          'https://mailthis.to/confirm', "_blank");

        this.openSuccessModal();
          
      }, error => {
        this.openErrorModal();
        console.log(error);
      });
    }
  }

}
