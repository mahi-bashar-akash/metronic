import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

/* * * * * Front layout * * * * */

import {FrontLayoutComponent} from './user/layout/layout.component'

  import {FrontHomeComponent} from './user/home/home.component';
  import {FrontAboutComponent} from './user/about/about.component';
  import {FrontContactComponent} from './user/contact/contact.component';
  import {FrontBlogComponent} from './user/blog/blog.component';
  import {FrontSingleBlogComponent} from './user/single-blog/single-blog.component';
  import {FrontShopComponent} from './user/shop/shop.component';
  import {FrontSingleProductComponent} from './user/single-product/single-product.component';
  import {FrontLoginComponent} from './user/login/login.component';
  import {FrontRegistrationComponent} from './user/registration/registration.component';
  import {FrontForgetComponent} from './user/forget/forget.component';
  import {FrontResetComponent} from './user/reset/reset.component';
  import {FrontCartComponent} from './user/cart/cart.component';
  import {FrontWishlistComponent} from './user/wishlist/wishlist.component';

    import {FrontProfileComponent} from './user/profile/profile.component';
    import {FrontProfileWishlistComponent} from './user/profile-wishlist/profile-wishlist.component';
    import {FrontProfileOrderHistoryComponent} from './user/profile-order-history/profile-order-history.component';
    import {FrontProfileSettingsComponent} from './user/profile-settings/profile-settings.component';

/* * * * * Admin layout * * * * */

import {AdminLayoutComponent} from "./admin/layout/layout.component";
  import {AdminDashboardComponent} from "./admin/dashboard/dashboard.component";
  import {AdminCalendarComponent} from "./admin/calendar/calendar.component";
  import {AdminEmailComponent} from "./admin/email/email.component";
  import {AdminChatComponent} from "./admin/chat/chat.component";
  import {AdminSliderComponent} from "./admin/slider/slider.component";
  import {AdminBoxComponent} from "./admin/box/box.component";
  import {AdminProductComponent} from "./admin/product/product.component";
  import {AdminInvoiceComponent} from "./admin/invoice/invoice.component";
  import {AdminUserComponent} from "./admin/user/user.component";
  import {AdminProfileComponent} from "./admin/profile/profile.component";

export const routes: Routes = [

  // frontend route

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: FrontLayoutComponent,
    children: [
      {path: 'home', component: FrontHomeComponent},
      {path: 'about', component: FrontAboutComponent},
      {path: 'contact', component: FrontContactComponent},
      {path: 'blog', component: FrontBlogComponent},
      {path: 'single-blog', component: FrontSingleBlogComponent},
      {path: 'shop', component: FrontShopComponent},
      {path: 'single-product', component: FrontSingleProductComponent},
      {path: 'login', component: FrontLoginComponent},
      {path: 'registration', component: FrontRegistrationComponent},
      {path: 'forget', component: FrontForgetComponent},
      {path: 'reset', component: FrontResetComponent},
      {path: 'cart', component: FrontCartComponent},
      {path: 'wishlist', component: FrontWishlistComponent},

      // user profile route
      {path: 'profile', redirectTo: '/details', pathMatch: 'full'},
      {path: 'profile/details', component: FrontProfileComponent},
      {path: 'profile/wishlist-history', component: FrontProfileWishlistComponent},
      {path: 'profile/order-history', component: FrontProfileOrderHistoryComponent},
      {path: 'profile/settings', component: FrontProfileSettingsComponent},

    ]
  },

  // admin route

  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'calendar', component: AdminCalendarComponent},
      {path: 'email', component: AdminEmailComponent},
      {path: 'chat', component: AdminChatComponent},
      {path: 'slider', component: AdminSliderComponent},
      {path: 'box', component: AdminBoxComponent},
      {path: 'product', component: AdminProductComponent},
      {path: 'invoice', component: AdminInvoiceComponent},
      {path: 'user', component: AdminUserComponent},
      {path: 'profile', component: AdminProfileComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
