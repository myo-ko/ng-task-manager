import { NgModule } from '@angular/core';
import { MdToolbarModule, MdSidenavModule, MdMenuModule } from '@angular/material';

@NgModule({
     imports : [
          MdToolbarModule, MdSidenavModule, MdMenuModule
     ],
     exports : [
          MdToolbarModule, MdSidenavModule, MdMenuModule
     ]
})
export class MaterialLoaderModule{

}