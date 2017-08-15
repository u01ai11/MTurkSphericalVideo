function cart2sphere3D(input) {
  x = input.XArray
  y = input.ZArray
  z = input.YArray
  
  input.RadArray = []
  input.ThetaArray = []
  input.PhiArray = []

  //Convert coords
//r = sqrt(x * x + y * y + z * z)
//long = acos(x / sqrt(x * x + y * y)) * (y < 0 ? -1 : 1)
//lat = acos(z / r)
  for (i = 0; i < x.length; i++) {
    Rad = Math.sqrt( x[i]**2 + y[i]**2 + z[i]**2)
    Theta = Math.acos((x[i]/Math.sqrt(x[i]**2 + y[i]**2)*(y[i] < 0 ? -1: 1))
    Lat = Math.atan(z[i]/r)
    
    //append to lists 
    input.RadArray.push(Rad)
    input.ThetaArray.push(Theta)
    input.PhiArray.push(Phi)
  };
 
 };
