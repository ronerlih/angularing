import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  tasks = ['click to get a random word'];
  
  clicked(){

    fetch('http://api.wordnik.com/v4/words.json/randomWord?api_key=umi8964nkn3r28p7liaipy8k2ts3aov3fik9xtwy2rio7n6ha')
      .then(data => data.json())
      .then(data => {
        console.log(data.word)
        this.tasks = [data.word]})
    
  }
}
