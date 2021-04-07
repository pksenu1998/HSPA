import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router) {}
  public propertyId: number;
  ngOnInit(): void {

    //this.propertyId=+this.route.snapshot.params['id'];//-->if you do this won't the propery will update(angular blocked)
    //this.router.navigate(['property-detail', this.propertyId])
    this.route.params.subscribe(
      (params)=>{//does not make any sense to render the same component
        this.propertyId=+params['id']; //this is the way updating the property without again render the same component
      }
    );
  }

  onSelectNext()
  {
    this.propertyId+=1;
    //if we comment lower line also the uppar way of fetching the data will work
    this.router.navigate(['property-detail', this.propertyId])
  }
}

