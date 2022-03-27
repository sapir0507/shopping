import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Input() formGroup: FormGroup = new FormGroup({
    serverName: new FormControl(''),
    serverContent: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formGroup.value)
  }
}
