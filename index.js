

function distanceFromHqInBlocks(blocks) {
   const hqBlock = 42;
   let distanceFromHq = Math.abs(blocks - hqBlock);
   return distanceFromHq;
 }
 
 const distance = distanceFromHqInBlocks(43);
 console.log(distance);

 function distanceFromHqInFeet(distance){
    const hqFeet = distanceFromHqInBlocks(distance);
      return hqFeet * 264;
 }
 
 function distanceTravelledInFeet(start, destination){
  
   if (destination >= start) {
       return 264 * (destination - start);
   } else {
      return (start - destination) * 264;
   }
 }
 function calculatesFarePrice(start, destination) {
   let feet = distanceTravelledInFeet(start,destination);
 
  
   if ( feet <= 400){
      return 0;
   }  else if (feet  >400 && feet <2000) {
      return (feet-400) * .02;
   } else if (feet >2000 && feet <2500){
      return 25;
   } else {
      return 'cannot travel that far';
   }
 }