import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-math-operation',
  templateUrl: './math-operation.component.html',
  styleUrls: ['./math-operation.component.css']
})
export class MathOperationComponent implements OnInit {

  mathOperationFormGroup: FormGroup;
  outputStr: string;

  constructor(private fb: FormBuilder) {
    this.outputStr = '';
  }

  ngOnInit() {

    this.mathOperationFormGroup = this.fb.group({
      num1 : ['', [Validators.required, Validators.pattern('[0-9.]+')]] ,
      num2 : ['', [Validators.required, Validators.pattern('[0-9.]+')]] ,
      result : ['0'] ,
      operator : ['add', [Validators.required],]
    });
  }

  validateForm = function(mathOperationFormGroup) {
    // alert('Operator Selected =' + this.mathOperationForm.get('operator').value);
    const voperator = this.mathOperationFormGroup.get('operator').value;
    const vnum1: number = parseInt ( this.mathOperationFormGroup.get('num1').value);
    const vnum2: number = parseInt ( this.mathOperationFormGroup.get('num2').value);



    if ( voperator === 'add') {
      this.mathOperationFormGroup.get('result').setValue(vnum1 + vnum2);
    }
    if ( voperator === 'sub') {
      this.mathOperationFormGroup.get('result').setValue(vnum1 - vnum2);
    }

    if ( voperator === 'mul') {
      this.mathOperationFormGroup.get('result').setValue(vnum1 * vnum2);
    }

    if ( voperator === 'div') {
      this.mathOperationFormGroup.get('result').setValue(vnum1 / vnum2);
    }
    this. outputStr = 'You have entered Num1 as ' + vnum1 + ' , Num2 as ' + vnum2 + ' and Operator as ' + voperator;
    // alert('Reseting Textbox Value');
    console.log('You have entered Num1 as ' + vnum1 + ' , Num2 as ' + vnum2 + ' and Operator as ' + voperator + ' , Result =' + this.result);

    /*this.mathOperationFormGroup = this.fb.group({
      num1 : ['', [Validators.required, Validators.pattern('[0-9.]+')]] ,
      num2 : ['', [Validators.required, Validators.pattern('[0-9.]+')]] ,
      operator : ['add', [Validators.required]]
    });*/
    /*console.log('Result of operation is ' + this.result);
    alert('Form is valid needs to be submitted');*/
  };

}// End of MathOperationComponent
