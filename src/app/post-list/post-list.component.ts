import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: string;
  constructor() { }

  ngOnInit() {
  }
  getColor(){
  	if( this.postLoveIts > 0){
  		return 'green';
  	}
  	if( this.postLoveIts < 0 ){
  		return 'red';
  	}	
  }
  likePlus(){
  	this.postLoveIts ++;
  	return this.postLoveIts
  }
  likeLess(){
  	this.postLoveIts --;
  	return this.postLoveIts
  }
}
