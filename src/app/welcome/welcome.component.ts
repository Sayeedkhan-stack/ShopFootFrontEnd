import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  name =''
  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.name=(this.route.snapshot.params['name'])
  }
  getWelcomeMessage() 
  {
    // console.log(this.service.executeHelloWorldBeanService());
    
    // this.service.executeHelloWorldBeanService().subscribe(
    //   response => this.handleSuccessfulResponse(response),
    //   error => this.handleErrorResponse(error)
    // );
    
    //console.log('last line of getWelcomeMessage')

    console.log("get welcome message");
}
}
