import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid: 'Iv1.31dc99b603c8fe3f';
  private clientsecret: ' 457c36af8c048d601bdb4deaa60eae97b296509e';

  constructor(private http: HttpClient) {
     console.log("Service is now ready!");
     this.username = 'ivxxi';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +"&client_secret=" + this.clientsecret);
   }
   getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid +"&client_secret=" + this.clientsecret);
   }
   updateProfile(username: string){
      this.username = username;
   }
  }
