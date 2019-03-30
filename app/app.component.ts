import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular6';
  roomCount = 1;
  currentRoom = 1;
  roomAddDisable : any;
  roomMinusDisable : boolean = true;
  adultCount = 1;
  adultAddDisable : any;
  adultMinusDisable : boolean = true;
  childCount = 0;
  childAddDisable : any;
  childMinusDisable : boolean = true;
  finalArr = [this.roomCount, this.adultCount, this.childCount];
  

  handleRoomClick(event: any) {

    this.roomAddDisable = false;
    this.roomMinusDisable = false;
    this.adultAddDisable = false;
    this.adultMinusDisable = false;
    this.childAddDisable = false;
    this.childMinusDisable = false;

    
    if(event == 'add'){
     
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
      if(this.finalArr[0] <= 4 ){
        this.finalArr[0]++;
        this.finalArr[1]++;
        this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
        if(this.finalArr[0] == 5){
          this.roomAddDisable = true;
          this.roomMinusDisable = false;
        }

        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          this.childAddDisable = false;
        }

        if(this.finalArr[1] == 1){
          this.adultMinusDisable = true;
          this.adultAddDisable = false;
        }

        if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){
          this.childAddDisable = true;
          this.adultAddDisable = true;
          
          if(this.finalArr[2] > 0){
            this.childMinusDisable = false;
          }
          
          if(this.finalArr[1] > 1){
            this.adultMinusDisable = false;
          }
          
        }

        if(this.finalArr[1] + this.finalArr[2] < 4*this.finalArr[0]){
          this.childAddDisable = false;
          this.adultAddDisable = false;

          if(this.finalArr[2] > 0){
            this.childMinusDisable = false;
          }
          
          if(this.finalArr[1] > 1){
            this.adultMinusDisable = false;
          }
        }
        
        this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
      }
     
    }
    
    else if(event == 'minus'){
     
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
      if(this.finalArr[0] > 1){
        this.finalArr[0]--;
       
        this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
        if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){
          this.adultAddDisable = true;
          this.childAddDisable = true;
        }

        if(this.finalArr[1] + this.finalArr[2] > 4*this.finalArr[0]){
          if(this.finalArr[2] > 0){
            for(let i = 0; i <= this.finalArr[2]; i++){
              if(this.finalArr[1] + this.finalArr[2] > 4*this.finalArr[0]){
                this.finalArr[2]--;
              }
            }
          }

          if(this.finalArr[1] + this.finalArr[2] > 4*this.finalArr[0]){
            if(this.finalArr[1] > 1){
              for(let j = 0; j <= this.finalArr[1]; j++){
                if(this.finalArr[1] + this.finalArr[2] > 4*this.finalArr[0]){
                  this.finalArr[1]--;
                }
              }
            }
          }
        }
        this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
        if(this.finalArr[0] == 1){
          this.roomAddDisable = false;
          this.roomMinusDisable = true;
        }

        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          if(this.finalArr[1] + this.finalArr[2] < 4*this.finalArr[0]){
            this.childAddDisable = false;
          }
        }

        if(this.finalArr[1] == 1){
          this.adultMinusDisable = true;
          if(this.finalArr[1] + this.finalArr[2] < 4*this.finalArr[0]){
            this.adultAddDisable = false;
          }
        }

        this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];        
      }
      
    }

      this.roomCount = this.finalArr[0];
      this.adultCount = this.finalArr[1];
      this.childCount = this.finalArr[2];
  }

  handleAdultClick(event: any) {

    this.adultAddDisable = false;
    this.adultMinusDisable = false;

    if(event == 'add'){
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
      this.finalArr[1]++;
     

      if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){ 
        
        if(this.finalArr[1] == 0){
          this.adultMinusDisable = true;
          this.adultAddDisable = false;
        }

        if(this.finalArr[1] > 0){
          this.adultMinusDisable = false;
          this.adultAddDisable = true;
        }
        
        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          this.childAddDisable = false;
        }

        if(this.finalArr[2] > 0){
          this.childMinusDisable = false;
          this.childAddDisable = true;
        }
        
      }
      
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
    }
    
    else if(event == 'minus'){

      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
      this.finalArr[1]--;
      
      if(this.finalArr[1] == 1){
        this.adultMinusDisable = true;
      }
      
      if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){ 
        

        if(this.finalArr[1] == 0){
          this.adultMinusDisable = true;
          this.adultAddDisable = false;
        }

        if(this.finalArr[1] > 0){
          this.adultMinusDisable = false;
          this.adultAddDisable = true;
        }
        
        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          this.childAddDisable = false;
        }

        if(this.finalArr[2] > 0){
          this.childMinusDisable = false;
          this.childAddDisable = true;
        }
      }
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
    }
   
      this.roomCount = this.finalArr[0];
      this.adultCount = this.finalArr[1];
      this.childCount = this.finalArr[2];
  }

  handleChildClick(event: any) {

    this.childAddDisable = false;
    this.childMinusDisable = false;

    if(event == 'add'){

      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];

      this.finalArr[2]++;

      if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){ 
        if(this.finalArr[1] == 0){
          this.adultMinusDisable = true;
          this.adultAddDisable = false;
        }

        if(this.finalArr[1] > 0){
          this.adultMinusDisable = false;
          this.adultAddDisable = true;
        }
        
        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          this.childAddDisable = false;
        }

        if(this.finalArr[2] > 0){
          this.childMinusDisable = false;
          this.childAddDisable = true;
        }
      }
      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
    }
    
    else if(event == 'minus'){

      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];

      this.finalArr[2]--;

      if(this.finalArr[2] == 0){
        this.childMinusDisable = true;
      }

      if(this.finalArr[1] + this.finalArr[2] == 4*this.finalArr[0]){ 
        if(this.finalArr[1] == 0){
          this.adultMinusDisable = true;
          this.adultAddDisable = false;
        }

        if(this.finalArr[1] > 0){
          this.adultMinusDisable = false;
          this.adultAddDisable = true;
        }
        
        if(this.finalArr[2] == 0){
          this.childMinusDisable = true;
          this.childAddDisable = false;
        }

        if(this.finalArr[2] > 0){
          this.childMinusDisable = false;
          this.childAddDisable = true;
        }
      }

      if(this.finalArr[1] + this.finalArr[2] < 4*this.finalArr[0]){
        this.childAddDisable = false;
        this.adultAddDisable = false;
      }

      this.finalArr = [ this.finalArr[0], this.finalArr[1], this.finalArr[2] ];
    }

      this.roomCount = this.finalArr[0];
      this.adultCount = this.finalArr[1];
      this.childCount = this.finalArr[2];
  }
}
