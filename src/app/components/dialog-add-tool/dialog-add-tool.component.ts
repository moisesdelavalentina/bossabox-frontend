import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tool } from 'src/app/interfaces/tool';
import { ToolService } from 'src/app/services/tool.service';




@Component({
  selector: 'app-dialog-add-tool',
  templateUrl: './dialog-add-tool.component.html',
  styleUrls: ['./dialog-add-tool.component.css']
})
export class DialogAddToolComponent implements OnInit {

  public toolForm: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<DialogAddToolComponent>,
    public formBuilder: FormBuilder,
    private tollService: ToolService,
    ) {
    this.toolForm = this.formBuilder.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(45)
        ]
      ],
      link: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(200)
        ]
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500)
        ]
      ],
      tags: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(300)
        ]
      ]
    });

  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    if (this.toolForm.valid) {
      let tool: Tool = {
        title: this.toolForm.value.title,
        link: this.toolForm.value.link,
        description: this.toolForm.value.description,
        tags: this.toolForm.value.tags.trim().split(" ")
      }

      this.tollService.insertTool(tool).subscribe(result=>{
        this.dialogRef.close(result)
      })

    }

  }

  

}
