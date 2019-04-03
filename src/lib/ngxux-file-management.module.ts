import { CommonModule }                                       from '@angular/common';
import { ModuleWithProviders, NgModule }                      from '@angular/core';
import { MatButtonModule, MatIconModule }                     from '@angular/material';
import { NgxuxCameraCaptureConfig, NgxuxCameraCaptureModule } from '@ngxux/camera-capture';
import { NgxuxDatatableModule }                               from '@ngxux/datatable';
import { NgxuxFileManagementConfig }                          from './ngxux-file-management-config';
import { NgxuxFileManagementConfigService }                   from './ngxux-file-management-config-service';
import { NgxuxFileManagementTableComponent }                  from './ngxux-file-management-table/ngxux-file-management-table.component';
import { NgxuxFileManagementWidgetComponent }                 from './ngxux-file-management-widget/ngxux-file-management-widget.component';
import { NgxuxFileManagementComponent }                       from './ngxux-file-management.component';
import { NgxuxFileManagementService }                         from './ngxux-file-management.service';

@NgModule({
    declarations: [

        NgxuxFileManagementComponent,
        NgxuxFileManagementWidgetComponent,
        NgxuxFileManagementTableComponent

    ],

    imports: [

        CommonModule,
        MatButtonModule,
        MatIconModule,

        NgxuxDatatableModule,

        NgxuxCameraCaptureModule.forRoot(new NgxuxCameraCaptureConfig({

            API_BASE: 'environment.API_BASE',
            ROUTE: 'settings/users'

        })),

    ],

    exports: [

        NgxuxFileManagementTableComponent

    ]

})
export class NgxuxFileManagementModule {

    public static forRoot(config: NgxuxFileManagementConfig): ModuleWithProviders {

        return {

            ngModule: NgxuxFileManagementModule,
            providers: [

                NgxuxFileManagementService,

                {

                    provide: NgxuxFileManagementConfigService,
                    useValue: config

                }

            ]

        };

    }

}
