import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlatformLaunchComponent } from './pages/platform-launch/platform-launch.component';
import { MarketingPlanComponent } from './pages/marketing-plan/marketing-plan.component';
import { TaskComponentComponent } from './components/task-component/task-component.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { EditBoardComponent } from './components/edit-board/edit-board.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MobileNavDropdownComponent } from './components/mobile-nav-dropdown/mobile-nav-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PlatformLaunchComponent,
    MarketingPlanComponent,
    TaskComponentComponent,
    TaskModalComponent,
    AddBoardComponent,
    EditBoardComponent,
    DeleteModalComponent,
    MobileNavDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
