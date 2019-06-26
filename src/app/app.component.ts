import { Component } from '@angular/core';
import { ToolService } from './services/tool.service'
import { Subscription } from 'rxjs';
import { Tool } from './interfaces/tool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bossabox-frontend';

  public tools:Tool[]
  public toolsSubscription: Subscription
  constructor(private tollService:ToolService){

    

  }


  ngOnInit() {
    this.toolsSubscription = this.tollService.getAllTools().subscribe(tools =>{
     this.tools = tools;
     console.log(this.tools);
    })

    setTimeout(()=>{
      let t:Tool = {
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
    }
      
      this.tollService.getToolsByTag('node').subscribe((res)=>{
        console.log(res);
      })
    }, 5000)
   
  }

  ngOnDestroy() {
    this.toolsSubscription.unsubscribe();
  }
}
