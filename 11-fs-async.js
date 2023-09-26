const {readFile,writeFile}= require ("fs");

readFile('./content/subfolder/first.txt',"utf8",(err,result)=>{
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first)
    readFile("./content/third.txt",'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const third =result;
        console.log(third)
        writeFile('./content/fourth.txt',`Here a new file and new tex : ${first}`,
        (err,result)=>{
            if(err){
                
                    console.log(result);
                    return;
                }
            
            console.log(result)
        })
    })
})