import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  profile: any = [];
  repos: any = [];
  username: string;
  isCollapsed: boolean= true;
  isCollapsed1: boolean= true;

   constructor( private profileService: ProfileService) {

   }
   searchGithub(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileInfo().subscribe(profile=>{
       console.log(profile);
       this.profile = profile;
     });
     this.profileService.getProfileRepos().subscribe(repos=>{
       console.log(repos);
       this.repos = repos;
     });
   }
   toggleCollapse(){
     this.isCollapsed = !this.isCollapsed;
   }
   toggleCollapse1(){
     this.isCollapsed1 = !this.isCollapsed1;
   }
   ngOnInit() {
   }

}
