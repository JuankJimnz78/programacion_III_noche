
try{   
    const user=JSON.parse('{"name":"Pedro", edad:25}');
}catch(e){
    console.log("Error detectado: ", e.massage);
}

try{
    console.log("Intentando abrir archivo...")
    throw new Error('Archivo No encontrado');
}catch(error){
    console.log("Error", error.massage);
}finally{
    console.log("Finalizo el intento de abrir archivo");
}