import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

//CREAR MODULO
// ng g m veterinaria/cliente --routing

//CREAR COMPONENTE
// ng g c veterinaria/cliente

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/authentication/register/register.module').then(m => m.RegisterModule),
  },
  // {
  //   path: 'forgot-password',
  //   loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  // },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankModule),
        pathMatch: 'full'
      },
      // {
      //   path: 'apps/inbox',
      //   loadChildren: () => import('./pages/apps/inbox/inbox.module').then(m => m.InboxModule),
      // },
      // {
      //   path: 'apps/calendar',
      //   loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarAppModule),
      // },
      // {
      //   path: 'apps/chat',
      //   loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
      // },
      // {
      //   path: 'components',
      //   loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule),
      // },
      // {
      //   path: 'forms/form-elements',
      //   loadChildren: () => import('./pages/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
      // },
      // {
      //   path: 'forms/form-wizard',
      //   loadChildren: () => import('./pages/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule),
      // },
      // {
      //   path: 'page-layouts',
      //   loadChildren: () => import('./pages/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
      // },
      // {
      //   path: 'tables/all-in-one-table',
      //   loadChildren: () => import('./pages/tables/all-in-one-table/all-in-one-table.module').then(m => m.AllInOneTableModule),
      // },
      // {
      //   path: 'drag-and-drop',
      //   loadChildren: () => import('./pages/drag-and-drop/drag-and-drop.module').then(m => m.DragAndDropModule)
      // },
      // {
      //   path: 'editor',
      //   loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule),
      // },
      // {
      //   path: 'blank',
      //   loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankModule),
      // },
      // {
      //   path: 'level1/level2/level3/level4/level5',
      //   loadChildren: () => import('./pages/level5/level5.module').then(m => m.Level5Module),
      //},
      // {
      //   path: 'cliente/registro',
      //   loadChildren: () => import('./pages/cliente/registro/registro.module').then(m => m.RegistroModule),
      // },
      {
        path: 'ventas/cliente',
        loadChildren: () => import('./veterinaria/cliente/cliente.module').then(m => m.ClienteModule),
      },
      {
        path: 'administracion/usuario',
        loadChildren: () => import('./veterinaria/usuario/usuario.module').then(m => m.UsuarioModule),
      },

      {
        path: 'ventas/mascota',
        loadChildren: () => import('./veterinaria/mascota/mascota.module').then(m => m.MascotaModule),
      },

      {
        path: 'administracion/bitacora',
        loadChildren: () => import('./veterinaria/bitacora/bitacora.module').then(m => m.BitacoraModule),
      },

      { path: 'inventario/producto', loadChildren: () => import('./veterinaria/producto/producto.module').then(m => m.ProductoModule)
      },

      { path: 'administracion/rol', loadChildren: () => import('./veterinaria/rol/rol.module').then(m => m.RolModule)
      },

      { path: 'administracion/access', loadChildren: () => import('./veterinaria/access/access.module').then(m => m.AccessModule)
      },

      { path: 'compras/proveedor', loadChildren: () => import('./veterinaria/proveedor/proveedor.module').then(m => m.ProveedorModule)
      },

      { path: 'ventas/venta', loadChildren: () => import('./veterinaria/venta/venta.module').then(m => m.VentaModule)
      },

      { path: 'ventas/servicio', loadChildren: () => import('./veterinaria/servicio/servicio.module').then(m => m.ServicioModule)
      },

      { path: 'inventario/categoria', loadChildren: () => import('./veterinaria/categoria/categoria.module').then(m => m.CategoriaModule)
      },

      { path: 'inventario/estante', loadChildren: () => import('./veterinaria/estante/estante.module').then(m => m.EstanteModule)
      },

      { path: 'detallesVenta', loadChildren: () => import('./veterinaria/detalles-venta/detalles-venta.module').then(m => m.DetallesVentaModule)
      },

      { path: 'ventas/agenda', loadChildren: () => import('./veterinaria/agenda/agenda.module').then(m => m.AgendaModule)
      },

      { path: 'ventas/historialClinico', loadChildren: () => import('./veterinaria/historial-clinico/historial-clinico.module').then(m => m.HistorialClinicoModule)
      },

      { path: 'ventas/atencion', loadChildren: () => import('./veterinaria/atencion/atencion.module').then(m => m.AtencionModule)
      },

      { path: 'compras/nota-Compra', loadChildren: () => import('./veterinaria/nota-compra/nota-compra.module').then(m => m.NotaCompraModule)
      },

      { path: 'ventas/vacuna', loadChildren: () => import('./veterinaria/vacuna/vacuna.module').then(m => m.VacunaModule)
      },

      { path: 'inventario/nota-salida', loadChildren: () => import('./veterinaria/nota-salida/nota-salida.module').then(m => m.NotaSalidaModule)
      },
    ]
  },















];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
