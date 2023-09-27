import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  menulist: any[] = [];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
