            /***********    task 1   *************/

                    // two ways to feth the image elments 

                    let byTagName = document.getElementsByTagName("img");

                    let byImage = document.images;
                    
                        // feth the options of country two ways 

                    let asArray = document.querySelectorAll("select option");

                    let asElements = document.querySelector("select [value='1']");

                    let forselect = document.querySelector("select[name=City]");

//                       Find all rows(tds) for second table in page.

                    let table2 = document.querySelectorAll("table")[1];

                    let allCells = table2.getElementsByTagName("td");

//               d- Find all elements that contain class name fontBlue and 

                    let allElementsFontBlue = document.querySelectorAll(".bGrey.fontBlue");


        /*********************************************** Task 2 ************************************************** */ 
                                  // Display the date with time on the document title                          


        setInterval(()=>{

                             let theTime = new Date();

                             let timestring = theTime.toLocaleString();

                             document.title=timestring;

                                  },1000)


        /*********************************************** Task 3 ************************************************** */                           
                                    //     funtion to slide shoe 
         let startSlideShow = (imageObject) =>  {
        
            let count = 1;
            
           let intervalId =  setInterval(() => {

                if(count>8){count=1;}

                imageObject.src =  `images/${count}.jpg`;
                
                count++;
            }, 1000);
        
            return intervalId;
         }  

         let start = startSlideShow(byImage[1]);

//////////////////////////////////// functuon to stop slide show ////////////////////////////////////////////


         let stopSlideShow = (timerId)=>{
            clearInterval(timerId);
         }

         //              calling function stop sliding 
          
         stopSlideShow(start);


         








