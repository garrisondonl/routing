import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";


  const appRoutes: Routes = [
{ path: "", redirectTo: "/home", pathMatch: "full" },
{ path: "About", component: AboutComponent },
{ path: "Contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

  AppRoutingModule {}
