import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLegumeComponent } from '../components/edition/legume/edit-legume.component';
// import { ViewJardinComponent } from 'src/components/view-jardin/view-jardin.component';
// import { EditParcelleComponent } from '../components/edition/parcelle/edit-parcelle.component';
// import { EditLegumeComponent } from 'src/components/edition/legume/edit-legume.component';
// import { EditArrosageComponent } from 'src/components/edition/arrosage/edit-arrosage.component';
// import { EditEnrichissementComponent } from 'src/components/edition/enrichissement/edit-enrichissement.component';
// import { EditHistoCultureComponent } from 'src/components/edition/histoCulture/edit-histoCulture.component';
// import { EditHistoNpkPhComponent } from 'src/components/edition/histoNpkPh/edit-histoNpkPh.component';
// import { EditPlanningComponent } from 'src/components/edition/planning/edit-planning.component';
// import { EditSemisComponent } from 'src/components/edition/semis/edit-semis.component';
// import { ViewLegumeComponent } from 'src/components/consultation/legume/view-legume.component';
// import { ViewParcelleComponent } from 'src/components/consultation/parcelle/view-parcelle.component';
// import { ViewPlanningComponent } from 'src/components/consultation/planning/view-planning.component';
// import { ViewHistoNpkPhComponent } from 'src/components/consultation/histoNpkPh/view-histoNpkPh.component';
// import { MetierParcelleComponent } from 'src/components/parcelle/metierParcelle.component';
// import { ViewMetierParcelleComponent } from 'src/components/consultation/histoCulture/view-metierParcelle.component';
// import { EditVoisinageLegumeComponent } from 'src/components/edition/voisinage/edit-voisinage-legume.component';
// import { ViewVoisinageLegumeComponent } from 'src/components/consultation/voisinage/view-voisinage-legume.component';
// import { ViewSemisComponent } from 'src/components/consultation/semis/view-semis.component';
 

const routes: Routes = [
  // {path:'ajouter-culture',component:EditHistoCultureComponent,
  //   runGuardsAndResolvers: 'always',outlet:'left'
  // },
  // {path:'view-jardin',component:ViewJardinComponent,
  //   runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'edit-arrosage',component:EditArrosageComponent,
  //     runGuardsAndResolvers: 'always'
  // },
  // {path:'edit-parcelle',component:EditParcelleComponent,
  //     runGuardsAndResolvers: 'always',outlet:'left'
  // },
  {path:'edit-legume',component:EditLegumeComponent,
      runGuardsAndResolvers: 'always',outlet:'left'  
  }
  // {path:'edit-enrichissement',component:EditEnrichissementComponent,
  //     runGuardsAndResolvers: 'always'
  // } ,
  // {path:'edit-histoCulture',component:EditHistoCultureComponent,
  //     runGuardsAndResolvers: 'always'
  // } ,
  // {path:'edit-histoNpkPh',component:EditHistoNpkPhComponent,
  //     runGuardsAndResolvers: 'always',outlet:'left'
  // },
  // {path:'edit-planning',component:EditPlanningComponent,
  //     runGuardsAndResolvers: 'always'
  // },
  // {path:'edit-semis',component:EditSemisComponent,
  //     runGuardsAndResolvers: 'always',outlet:'left'
  // }, 
  // {path:'edit-voisinage-legume',component:EditVoisinageLegumeComponent,
  // runGuardsAndResolvers: 'always',outlet:'left'
  // },
  // {path:'view-legume',component:ViewLegumeComponent,
  //     runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-histoNpkPh',component:ViewHistoNpkPhComponent,
  //     runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-voisinage-legume',component:ViewVoisinageLegumeComponent,
  //  runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-semis',component:ViewSemisComponent,
  // runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-parcelle',component:ViewParcelleComponent,
  //     runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-metierParcelle',component:ViewMetierParcelleComponent, //pour vue histo culture
  // runGuardsAndResolvers: 'always',outlet:'right'
  //   },
  // {path:'info-parcelle',component:MetierParcelleComponent, //pour vue jardin
  //     runGuardsAndResolvers: 'always',outlet:'right'
  // },
  // {path:'view-planning',component:ViewPlanningComponent,
  // runGuardsAndResolvers: 'always',outlet:'left'
//}            
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
