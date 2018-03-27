import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { LogDTO } from '../../dto/log.dto';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {

  closeResult: string;
  logInput: LogDTO;
  logs: Array<LogDTO> = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.logInput = new LogDTO(null, null, null);
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    let myReason = '';
    if (reason === ModalDismissReasons.ESC) {
      // return 'by pressing ESC';
      myReason = 'Closed by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      // return 'by clicking on a backdrop';
      myReason = 'Closed by clicking on a backdrop';
    } else {
      // return `with: ${reason}`;
      myReason = `with: ${reason}`;
    }
    console.log(myReason);
  }

  onSaveLog() {
    this.logs.push(this.logInput);
  }

  onDeleteLog(log: LogDTO) {
    const index: number = this.logs.indexOf(log);
    if (index !== -1) {
      this.logs.splice(index, 1);
    }
  }

}
