
// function to remove falsy values from an object
const removeFalsyValues =(obj: { [key: string]: any }): { [key: string]: any } =>{
  return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value)
    );
  }


export {removeFalsyValues}