import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SeniorsComponent } from './seniors/seniors.component';
import { SettingsComponent } from './settings/settings.component';
import { SwitchboardComponent } from './switchboard/switchboard.component';

const routes: Routes =  [
  {path: "delivery", component: DeliveryComponent},
  {path: "seniors", component: SeniorsComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "settings", component: SettingsComponent},
  {path: "**", component: SwitchboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
