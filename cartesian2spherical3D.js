function cart2sphere3D(input) {
  x = input.XArray
  y = input.ZArray
  z = input.YArray
  
  input.RadArray = []
  input.ThetaArray = []
  input.PhiArray = []

  //Convert coords
  //Radius = sqrt(x**2 + y**2 + z**2)
  //Inclination = arcos(z/(x**2 + y**2 + z**2))
  //Azimuth = arctan(y/x)
  for (i = 0; i < x.length; i++) {
    Rad = Math.sqrt( x[i]**2 + y[i]**2 + z[i]**2)
    Theta = Math.acos(z[i]/Rad)
    Phi = Math.atan(y[i]/x[i])
    
    //append to lists 
    input.RadArray.push(Rad)
    input.ThetaArray.push(Theta)
    input.PhiArray.push(Phi)
  };
 
 };
