function cart2sphere3D(input) {
  x = input.Xarray
  y = input.Zarray
  z = input.Yarray
  
  input.Rarray = []
  input.Oarray = []
  input.OmegaArray = []

  //Convert coords

  //r = math.sqrt(x2 y2 z2)
  //0 = tan-1 y/x 
  //omega = tan-1 sqr(x2 + y2)\z
  for (i = 0; i < x.length; i++) {
    r = Math.sqrt(( Math.pow(x[i], 2), Math.pow(y[i], 2), Math.pow(y[i], 2)))
    o = Math.atan(y[i]/x[i])
    omega = Math.atan(Math.sqrt(Math.pow(x[i], 2)+Math.pow(y[i], 2))/z[i])
    
    //append to lists 
    input.Rarray.push(r)
    input.Oarray.push(o)
    input.OmegaArray.push(omega)
  };
 
 };
