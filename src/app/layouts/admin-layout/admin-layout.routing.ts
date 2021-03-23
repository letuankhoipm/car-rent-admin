import { Routes } from '@angular/router';

import { DashboardComponent } from '../../demo/dashboard/dashboard.component';
import { UserProfileComponent } from '../../demo/user-profile/user-profile.component';
import { TableListComponent } from '../../demo/table-list/table-list.component';
import { TypographyComponent } from '../../demo/typography/typography.component';
import { IconsComponent } from '../../demo/icons/icons.component';
import { MapsComponent } from '../../demo/maps/maps.component';
import { NotificationsComponent } from '../../demo/notifications/notifications.component';
import { UpgradeComponent } from '../../demo/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {
        path: 'food-beverage',
        loadChildren: () => import('../../routes/food-beverage/food-beverage.module').then(m => m.FoodBeverageModule)
    },
    {
        path: 'game',
        loadChildren: () => import('../../routes/game/game.module').then(m => m.GameModule)
    },
    {
        path: 'room',
        loadChildren: () => import('../../routes/room/room.module').then(m => m.RoomModule)
    },
    {
        path: 'transportation',
        loadChildren: () => import('../../routes/transportation/transportation.module').then(m => m.TransportationModule)
    },
    {
        path: 'membership',
        loadChildren: () => import('../../routes/membership/membership.module').then(m => m.MembershipModule)
    },
];
