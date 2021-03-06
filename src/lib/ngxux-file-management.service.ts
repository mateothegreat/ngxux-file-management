import { Injectable }                from '@angular/core';
import { Pageable }                  from '@ngxux/common';
import { Observable, ReplaySubject } from 'rxjs';
import { NgxuxFile }                 from './ngxux-file';

@Injectable({
    providedIn: 'root'
})
export class NgxuxFileManagementService {

    public files$: ReplaySubject<Pageable<NgxuxFile>> = new ReplaySubject(1);

    public files: Pageable<NgxuxFile>;

    public constructor() {

    }

    public setFiles(files: Pageable<NgxuxFile>): Observable<Pageable<NgxuxFile>> {

        this.files$.next(files);

        this.files = files;

        return this.files$;

    }

}
