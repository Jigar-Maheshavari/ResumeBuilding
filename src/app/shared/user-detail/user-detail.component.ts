import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  resumeForm: any

  typeObject: any = {
    'qulification': `getQualificationForm()`,
    'workExpirence': `getWorkExpirenceForm()`,
    'skillSets': `getSkillSetForm()`,
    'projects': `getProjectForm()`,
    'honors': `getHonorsForm()`,
    'proficiency': `getProficiencyForm()`,

  }
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  Screen() {
    var data = document.getElementById('content');
    if (data) {

    }
  }

  getForm(type: any) {
    console.log('this.resumeForm.controls[type] as FormArray: ', this.resumeForm.controls[type] as FormArray);
    return this.resumeForm.controls[type] as FormArray
  }

  addFormValue(type: any) {
    return this.getForm(type).push(this.typeObject[type])
  }

  removeFormValue(type: any, index: any) {
    return this.getForm(type).removeAt(index)
  }

  getQualificationForm() {
    return this.formBuilder.group({
      std: [null, [Validators.required]],
      completedYear: [null, [Validators.required]],
      marks: [null, [Validators.required]],
      from: [null, [Validators.required]],
    })
  }

  getWorkExpirenceForm() {
    return this.formBuilder.group({
      title: [null, [Validators.required]],
      learn: [null, [Validators.required]],
      month: [null, [Validators.required]],
    })
  }

  getSkillSetForm() {
    return this.formBuilder.group({
      title: [null, [Validators.required]],
    })
  }

  getProjectForm() {
    return this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  getHonorsForm() {
    return this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  getProficiencyForm() {
    return this.formBuilder.group({
      language: [null, [Validators.required]],
      level: [null, [Validators.required]],
    })
  }

  createForm() {
    this.resumeForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      objective: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      qulification: this.formBuilder.array([this.getQualificationForm()]),
      workExpirence: this.formBuilder.array([this.getWorkExpirenceForm()]),
      skillSets: this.formBuilder.array([this.getSkillSetForm()]),
      projects: this.formBuilder.array([this.getProjectForm()]),
      honors: this.formBuilder.array([this.getHonorsForm()]),
      proficiency: this.formBuilder.array([this.getProficiencyForm()])
    })
  }
}
