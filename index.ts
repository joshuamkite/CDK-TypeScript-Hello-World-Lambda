exports.handler = async () => {

    console.log('Hello, world!');
    console.log("the time is", new Date());
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello, world! the time now is', time: new Date().toISOString() })
    };
}