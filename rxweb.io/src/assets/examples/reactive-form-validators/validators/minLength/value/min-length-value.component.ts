import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLength-value-validator',
    templateUrl: './min-length-value.component.html'
})
export class MinLengthValueValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder)
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            countryCode:['', RxwebValidators.minLength({value:3  ,conditionalExpression:(x,y)=> x.countryName == "India" })], 
        });
    }
}
