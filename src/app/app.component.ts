import { Component } from '@angular/core';
import { ToolService } from './services/tool.service'
import { Subscription } from 'rxjs';
import { Tool } from './interfaces/tool';
import { DialogAddToolComponent } from './components/dialog-add-tool/dialog-add-tool.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogRemoveToolComponent } from './components/dialog-remove-tool/dialog-remove-tool.component';
////"./node_modules/hammerjs/hammer.min.js"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tagChecked = false;
  public strSearch = "";
  public tools: Tool[]
  public toolsSubscription: Subscription
  constructor(
    private tollService: ToolService,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.toolsSubscription = this.tollService.getAllTools().subscribe(tools => {
      this.tools = tools;
    })
  }

  ngOnDestroy() {
    this.toolsSubscription.unsubscribe();
  }

  onSearch($event) {
    if (this.strSearch != "") {
      if (this.tagChecked) {
        this.toolsSubscription = this.tollService.getToolsByTag(this.strSearch).subscribe(tools => {
          this.tools = tools;
        })
      } else {
        this.toolsSubscription = this.tollService.getToolsBySearch(this.strSearch).subscribe(tools => {
          this.tools = tools;
        })
      }
    }else{
      this.toolsSubscription = this.tollService.getAllTools().subscribe(tools => {
        this.tools = tools;
      })
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddToolComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tools.push(result);
      }
    });
  }

  openRemoveDialog(tool: Tool): void {

    const dialogRef = this.dialog.open(DialogRemoveToolComponent, {
      width: '500px',
      data: tool
    });

    dialogRef.afterClosed().subscribe((result: { status: any, toolRemoved: Tool }) => {
      if (result) {
        this.tools = this.tools.filter((el: Tool) => {
          return el.id != result.toolRemoved.id;
        });
      }
    });
  }



}
