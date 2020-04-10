import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GithubClass } from '../github-class/github-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {
  github: GithubClass;



   constructor(private httpClient: HttpClient, ) {
     this.github = new GithubClass ('', '', '', '', '','');


    }

    githubRequest() {
     interface ApiResponse {
       name: string;
       avatar_url: string;
       followers: string;
       following: string;
       html_url: string;
       login: string;

   }
     const promise = new Promise((resolve, reject) => {
       this.httpClient.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {

           this.github.name = response.name;
           this.github.avatar_url = response.avatar_url;
           this.github.followers = response.followers;
           this.github.following = response.following;
           this.github.html_url = response.html_url;
           this.github.login = response.login;
           resolve();
             },
               error => {
                   this.github.name = 'Sorry this repo does not exist';
                   reject(error);
           }
       );
   });

     return promise;
 }
 }
