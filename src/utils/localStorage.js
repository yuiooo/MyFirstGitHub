function uzStorage(){
    var ls = window.localStorage;
//      if(isAndroid){
//         ls = os.localStorage();
//      }
    return ls;
};



export function setStorage(key, value){
    if(arguments.length === 2){
        var v = value;
        if(typeof v == 'object'){
            v = JSON.stringify(v);
            v = 'obj-'+ v;
        }else{
            v = 'str-'+ v;
        }
        var ls = uzStorage();
        if(ls){
            ls.setItem(key, v);
        }
    }
};

export function getStorage(key){
    var ls = uzStorage();
    if(ls){
        var v = ls.getItem(key);
        if(!v){return;}
        if(v.indexOf('obj-') === 0){
            v = v.slice(4);
            return JSON.parse(v);
        }else if(v.indexOf('str-') === 0){
            return v.slice(4);
        }
    }
};
export function rmStorage(key){
    var ls = uzStorage();
    if(ls && key){
        ls.removeItem(key);
    }
};
export function clearStorage(){
    var ls = uzStorage();
    if(ls){
        ls.clear();
    }
};    