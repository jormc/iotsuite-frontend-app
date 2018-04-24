import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ServerService } from '../services/ServerService';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class ServerEditComponent implements OnInit {

  id: number;
  editMode = false;
  serverForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.editMode) {
      this.serverService.updateServer(this.id, this.serverForm.value);
    } else {
      this.serverService.addServer(this.serverForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    console.log('onCancel');
    this.router.navigate(['/servers']);
  }

  private initForm() {
    console.log('initForm > editMode:', this.editMode);

    let serverName = '';
    let serverHost = '';
    let serverPort = null;

    if (this.editMode) {
      const server = this.serverService.getServer(this.id);

      console.log(server);

      serverName = server.name;
      serverHost = server.host;
      serverPort = server.port;
    }

    this.serverForm = new FormGroup({
      'name': new FormControl(serverName, Validators.required),
      'host': new FormControl(serverHost, Validators.required),
      'port': new FormControl(serverPort, Validators.required)
    });

  }
}
