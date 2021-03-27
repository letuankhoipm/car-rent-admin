import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import csvFilter from 'app/utils/csv-filter';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadForm: FormGroup;
  error;

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      levelDatesFile: new FormControl(null, Validators.required),
      errorPointFile: new FormControl(null, Validators.required)
    })
    this.uploadForm.valueChanges.subscribe((value) => console.log(value))
  }

  handleFile(files: FileList, type) {
    if (csvFilter(files[0])) {
      type == 'level' ? (files.length > 0 ? this.uploadForm.controls.levelDatesFile.setValue(files[0]) : null) :
        (files.length > 0 ? this.uploadForm.controls.errorPointFile.setValue(files[0]) : null)
    } else {
      this.error = "Please import csv or excel file!";
    }
    console.log(this.error);
    
  }

  onLevelFileSubmit() {
    console.log(this.uploadForm.controls.levelDatesFile.valid);
    const formData: FormData = new FormData();
    if (this.uploadForm.controls.levelDatesFile.valid) {
      formData.append('file', this.uploadForm.controls.levelDatesFile.value);
      this.userServ.uploadLevelDatesFile(formData).subscribe(res => {
        console.log(res);
      })
    }
  }

  onErrorFileSubmit() {
    const formData: FormData = new FormData();
    if (this.uploadForm.controls.errorPointFile.valid) {
      formData.append('file', this.uploadForm.controls.errorPointFile.value);
      this.userServ.uploadErrorPointFile(formData).subscribe(res => {
        console.log(res);
      })
    } 
  }
}
