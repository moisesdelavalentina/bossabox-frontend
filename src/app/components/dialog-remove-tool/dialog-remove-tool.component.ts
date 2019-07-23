import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tool } from 'src/app/interfaces/tool';
import { ToolService } from 'src/app/services/tool.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-remove-tool',
  templateUrl: './dialog-remove-tool.component.html',
  styleUrls: ['./dialog-remove-tool.component.css']
})
export class DialogRemoveToolComponent implements OnInit {

  public loading:boolean = false;
  

  constructor(
    private tollService: ToolService,
    public dialogRef: MatDialogRef<DialogRemoveToolComponent>,
    @Inject(MAT_DIALOG_DATA) public tool: Tool
  ) {

  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onRemoveClick() {
    this.loading = true;
    this.tollService.deleteTool(this.tool.id).subscribe((result=>{
      this.loading = false;
      this.dialogRef.close({
        status: result,
        toolRemoved: this.tool
      })
    }))
  }
}
