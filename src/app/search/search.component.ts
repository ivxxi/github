import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubClass } from '../github-class/github-class';
import { GithubHttpService } from '../github-http/github-http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubHttpService],
})
export class SearchComponent implements OnInit {
  github:GithubClass ;

  constructor(private http:HttpClient, private githubService: GithubHttpService, ) { }
  ngOnInit() {
    this.githubService.githubRequest()
    this.github=this.githubService.github
  }

}
