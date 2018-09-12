import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  email = new FormControl("", [Validators.required,
                              Validators.pattern("[^ @]*@[^ @]")]);
  password = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      "email": this.email,
      "password": this.password
    });
    this.form.valueChanges
      .subscribe(data => console.log(JSON.stringify(data)));
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Forma potvrđena!");
  }

}
