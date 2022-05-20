import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MoviesService} from "../../services/movies.service";
import { WelcomeComponent } from '../../shared/welcome/welcome.component';
import { DetailsComponent } from '../../shared/details/details.component';


export interface MovieElement {
  title: string;
  year: number;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit  {
  displayedColumns: string[] = ['icon','title', 'year', 'details'];
  dataSource = new MatTableDataSource<MovieElement>([]);
  mostrarrpgres = false;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private service: MoviesService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }
  ngOnInit() {
    this.onGetMovies();
  }
  onGetMovies() {
    this.mostrarrpgres = true;
    this.service.getMovies().subscribe(
      next => {
        this.mostrarrpgres = false;
        this.dataSource = new MatTableDataSource(next);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;
      }, error => {
        this.mostrarrpgres = false;
        console.log(error);
      }
    );
  }
  onOpenDetailsMovie(object: any) {
    this.dialog.open(DetailsComponent, {
      data: {
        oMovie: object,
      },
    });
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
