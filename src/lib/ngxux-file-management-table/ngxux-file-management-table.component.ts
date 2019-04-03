import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pageable }                            from '@ngxux/common';
import { NgxuxDatatableComponent }             from '../../../../ngxux-datatable/src/lib/ngxux-datatable.component';
import { NgxuxFile }                           from '../ngxux-file';
import { NgxuxFileManagementService }          from '../ngxux-file-management.service';

@Component({
    selector: 'ngxux-file-management-table',
    templateUrl: './ngxux-file-management-table.component.html',
    styleUrls: [ './ngxux-file-management-table.component.scss' ]
})
export class NgxuxFileManagementTableComponent implements OnInit {

    @Input() public files: Pageable<NgxuxFile>;

    @ViewChild(NgxuxDatatableComponent) private datatableRef: NgxuxDatatableComponent<NgxuxFile>;

    public constructor(private ngxuxFileManagementService: NgxuxFileManagementService) {

    }

    public ngOnInit() {

        this.ngxuxFileManagementService.files$.subscribe((pageable: Pageable<NgxuxFile>) => {

            this.datatableRef.setPage(pageable);

        });

        this.datatableRef.clicks$.subscribe((file: NgxuxFile) => {

            if (file.uuid) {

                console.log(file);

            }

        });

    }

    public onButtonClick(): void {


    }

}
