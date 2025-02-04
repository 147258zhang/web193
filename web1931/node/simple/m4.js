module.exports= function(a,b,c){
    var r=0;
    switch(c){
        case '+': r=a+b;
        break;
        case '-': r=a-b;
        break;
        case '*': r=a*b;
        break;
        case '/': r=a/b;
        break;
    }
    return r;

}