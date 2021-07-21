import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Old Fashioned Nerds';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,

  ) {
    // handle title changes
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        return (child && child.snapshot.data.title) || '';
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(`${title} | ${this.title}`);
    });
  }
}
