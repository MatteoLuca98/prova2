function square(s){
    if(typeof s == "string"){
        return length(s)*length(s);
    }else{
        return -1;
    }
}

module.exports = square;

