import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VUTTR_API } from '../api'

import { map } from 'rxjs/operators';
import { Tool } from '../interfaces/tool';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private http: HttpClient) {


  }

  public insertTool(tool:Tool):Observable<Tool>{
    return this.http.post(`${VUTTR_API}/tools`, tool).pipe(
      map(res => res as Tool)
    )
  }


  public getAllTools():Observable<Tool[]>{
    return this.http.get(`${VUTTR_API}/tools`).pipe(
      map(res => res as Tool[])
    )
  }

  public getToolsByTag(tag:String){
    return this.http.get(`${VUTTR_API}/tools?tags_like=${tag}`).pipe(
      map(res => res as Tool[])
    )
  }

  public getToolsBySearch(search:String){
    return this.http.get(`${VUTTR_API}/tools?q=${search}`).pipe(
      map(res => res as Tool[])
    )
  }

  public deleteTool(id:number){
    return this.http.delete(`${VUTTR_API}/tools/${id}`);
  }


}
