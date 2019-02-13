import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { RouterModule } from '@angular/router'
@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent, MainareaComponent],
  exports:[HeaderComponent,MainareaComponent]
})
export class SharedModule { }
