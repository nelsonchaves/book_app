import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'chap1',
    loadChildren: () => import('./chapter/chap1/chap1.module').then( m => m.Chap1PageModule)
  },
  {
    path: 'chap2',
    loadChildren: () => import('./chapter/chap2/chap2.module').then( m => m.Chap2PageModule)
  },
  {
    path: 'chap3',
    loadChildren: () => import('./chapter/chap3/chap3.module').then( m => m.Chap3PageModule)
  },
  {
    path: 'chap4',
    loadChildren: () => import('./chapter/chap4/chap4.module').then( m => m.Chap4PageModule)
  },
  {
    path: 'chap5',
    loadChildren: () => import('./chapter/chap5/chap5.module').then( m => m.Chap5PageModule)
  },
  {
    path: 'table-of-contents',
    loadChildren: () => import('./table-of-contents/table-of-contents.module').then( m => m.TableOfContentsPageModule)
  },
  {
    path: 'page-eight',
    loadChildren: () => import('./pages/page-eight/page-eight.module').then( m => m.PageEightPageModule)
  },
  {
    path: 'page-eleven',
    loadChildren: () => import('./pages/page-eleven/page-eleven.module').then( m => m.PageElevenPageModule)
  },
  {
    path: 'page-fifteen',
    loadChildren: () => import('./pages/page-fifteen/page-fifteen.module').then( m => m.PageFifteenPageModule)
  },
  {
    path: 'page-five',
    loadChildren: () => import('./pages/page-five/page-five.module').then( m => m.PageFivePageModule)
  },
  {
    path: 'page-fourteen',
    loadChildren: () => import('./pages/page-fourteen/page-fourteen.module').then( m => m.PageFourteenPageModule)
  },
  {
    path: 'page-nine',
    loadChildren: () => import('./pages/page-nine/page-nine.module').then( m => m.PageNinePageModule)
  },
  {
    path: 'page-six',
    loadChildren: () => import('./pages/page-six/page-six.module').then( m => m.PageSixPageModule)
  },
  {
    path: 'page-three',
    loadChildren: () => import('./pages/page-three/page-three.module').then( m => m.PageThreePageModule)
  },
  {
    path: 'page-twelve',
    loadChildren: () => import('./pages/page-twelve/page-twelve.module').then( m => m.PageTwelvePageModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./pages/page-two/page-two.module').then( m => m.PageTwoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
