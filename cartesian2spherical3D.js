function cart2sphere3D(input) {
  x = input.XArray
  y = input.ZArray
  z = input.YArray
  
  input.RadArray = []
  input.ThetaArray = []
  input.PhiArray = []

  //Convert coords

  //r = math.sqrt(x2 y2 z2)
  //0 = tan-1 y/x 
  //omega = tan-1 sqr(x2 + y2)\z
  for (i = 0; i < x.length; i++) {
    Rad = Math.sqrt(( Math.pow(x[i], 2), Math.pow(y[i], 2), Math.pow(z[i], 2)))
    Theta = Math.acos(y[i]/x[i])
    Phi = Math.atan(Math.sqrt(Math.pow(x[i], 2)+Math.pow(y[i], 2))/z[i])
    
    //append to lists 
    input.RadArray.push(Rad)
    input.ThetaArray.push(Theta)
    input.PhiArray.push(Phi)
  };
 
 };
