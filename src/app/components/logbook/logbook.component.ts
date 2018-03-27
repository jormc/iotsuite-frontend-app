import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AppModelService } from '../../services/app-model.service';
import { PersistenceTechnology } from '../../model/utils/model-utils';
import { LogbookEntry } from '../../model/business-layer/entities/logbook-entry';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {

  closeResult: string;
  logInput: LogbookEntry;
  logs: Array<LogbookEntry> = [];

  constructor(
    private modalService: NgbModal,
    private appModelService: AppModelService
  ) {
    // TODO Subscribe to service...
   }

  ngOnInit() {
    this.onFindAll();
  }

  open(content) {
    this.logInput = new LogbookEntry(null, null, null);
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any) {
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
    // this.logs.push(this.logInput);
    this.appModelService.getServiceManager()
      .getLogbookEntryService().save(
        this.logInput,
        PersistenceTechnology.LOCAL_STORAGE,
        localStorage
      );
    this.onFindAll();
  }

  onDeleteLog(log: LogbookEntry) {
    // const index: number = this.logs.indexOf(log);
    // if (index !== -1) {
    //   this.logs.splice(index, 1);
    // }
    this.appModelService.getServiceManager()
      .getLogbookEntryService().delete(
        log.id,
        PersistenceTechnology.LOCAL_STORAGE,
        localStorage
      );
    this.onFindAll();
  }

  onFindAll() {
    this.appModelService.getServiceManager()
      .getLogbookEntryService().findAll(
        PersistenceTechnology.LOCAL_STORAGE,
        localStorage
      ).then( (list) => this.logs = list);
  }

}
