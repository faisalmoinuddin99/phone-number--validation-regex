import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-pattern-expression-validator',
    templateUrl: './pattern-expression.component.html'
})
export class PatternExpressionValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            phoneNumber:['', RxwebValidators.pattern({expression:{'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/} })], 
        });
    }
}
