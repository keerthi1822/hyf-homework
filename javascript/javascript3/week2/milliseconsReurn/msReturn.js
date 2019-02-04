function toResolveAfterXSeconds(millisecondsToResolve){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },millisecondsToResolve)
    })
}

toResolveAfterXSeconds(3000).then(()=>{
    console.log("3ms done");
})

toResolveAfterXSeconds(6000).then(()=>{
    console.log("i am called asynchronously");
})

