import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'form-control-demo',
    templateUrl: './form-control-demo.component.html',
    styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent {

    name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    age = new FormControl(20, Validators.required);
    city = new FormControl();
    country = new FormControl({ value: 'India', disabled: true });
    married = new FormControl(true);

    setNameValue() {
        this.name.setValue('Donald Trump');
        console.log('Name: ' + this.name.value);
        console.log('Validation Status: ' + this.name.status);
    }
    setResetName() {
        this.name.reset();
    }
    changeValue() {
        console.log(this.married.value);
        this.married = new FormControl(!this.married.value);
    }
}
