import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

    usrNameChanges: string;
    usrNameStatus: string;
    userForm = new FormGroup({
        name: new FormControl('Mahesh', Validators.maxLength(10)),
        age: new FormControl(20, Validators.required),
        city: new FormControl(),
        country: new FormControl()
    });
    get userName(): any {
        return this.userForm.get('name');
    }
    onFormSubmit(): void {
        alert('submitted data: ' + '\nName:' + this.userForm.get('name').value +
            '\nAge:' + this.userForm.get('age').value + '\nCity:' + this.userForm.get('city').value +
            '\nCountry:' + this.userForm.get('country').value);
    }
    setDefaultValue() {
        this.userForm.setValue({ name: 'Mahesh', age: 20, city: '', country: '' });
    }
}
