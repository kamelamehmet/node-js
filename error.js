setTimeout(()=> {
    throw new Error('oops')
} , 300)

process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err);
});