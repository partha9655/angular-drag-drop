import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
// import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
