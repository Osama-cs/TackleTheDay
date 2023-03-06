import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit() {
  }

}
