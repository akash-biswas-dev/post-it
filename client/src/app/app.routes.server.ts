import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dash-board',
    renderMode: RenderMode.Server
  },  
  {
    path:'auth/**',
    renderMode: RenderMode.Server
  },
  {
    path:'error',
    renderMode: RenderMode.Prerender
  },
  {
    path:'',
    renderMode: RenderMode.Server
  },
  {
    path:'**',
    renderMode: RenderMode.Prerender
  }
];
