var dom = require('component-dom');
module.exports = function parse(tag){

    if(tag.tagName.toLowerCase() !== "code"){
        tag = tag.querySelector("code")
    }
    
    if(tag === null){
        throw new Error("error tag ! sub tag contain code tag.");
    }
    
    var code = tag.innerHTML;
    lines = code.split(/\r?\n/).filter(function(str){
        return !/^\s*$/gi.test(str)
    });
    var tableTagBodyStr = "";
    lines.forEach(function(line,index){
        tableTagBodyStr +='<tr>\
        <td><td>'+(index+1)+'<td><pre><code>'+line+'</code></pre></td>\
        </tr>'
    })
    return dom("<table>"+tableTagBodyStr+"</table>").els[0];
}