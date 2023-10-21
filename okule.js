function returnColored(text, color){
    return("<span style='color: "+color+";'>"+text+"</span>")
}
function main(){
    alltext = document.getElementById("alltext").innerHTML
    alltext = alltext.replaceAll(/(?<!toki:  [^\n]*)(?<!\[)(?<!:)\b(leko|sike|linja|sitelentoki|kule|nimilipu|nena|nasinnanpa|nasintoki|nanpapikipisiala|nanpalilipikipisiala|nanpasulipikipisiala|nanpasike|nasin[tan:]|nasin[ko:]|nasin[sin:]|suli|sitelen|kalama|kalamalontenposama|sonaawen|sonaawensin|nanpasemepikulupuona|wekatankulupu|sulitawasitelen|nasintokitannanpakipisi|nasinnanpatannanpakipisi|nanpatannasa|tokipiwekaala)\b((?=.*(  |\n)te)(?=.*  to(  |\n))|(?!.*  to(  |\n)))/g,
    (match) => {return(returnColored(match, "#FF55FF"))})
    alltext = alltext.replaceAll(/(?<!toki:  [^\n]*)(?<!\[)(?<!:)\b(la|pini|pokipitokiilo|kulupu|sikela|antela|pana|anu)((?=.*(  |\n)te)(?=.*  to(  |\n))|(?!.*  to(  |\n)))\b/g,
    (match) => {return(returnColored(match, "#5555FF"))})
    alltext = alltext.replaceAll(/(?<!toki:  [^\n]*)(?<!\[)(?<!:)\b(li|lipokie|lipokikine|likulupukine|likulupue|lilitawa|lisulitawa|e|lisamaala|lilon|lisama|nanpa|pikulupu|tankipisi)((?=.*(  |\n)te)(?=.*  to(  |\n))|(?!.*  to(  |\n)))\b/g,
    (match) => {return(returnColored(match, "#555555"))})
    alltext = alltext.replaceAll(/(?<!toki:  [^\n]*)(?<!\[)(?<!:)\b(weka|ali|ala|wan|tu|luka|mute)+((?=.*(  |\n)te)(?=.*  to(  |\n))|(?!.*  to(  |\n)))\b/g,
    (match) => {return(returnColored(match, "#FF5555"))})
    alltext = alltext.replaceAll(/\btoki:  [^\n]*\b/g,
    (match) => {return(returnColored(match, "#888888"))})

    alltext = alltext.replaceAll(/(?<!toki:  [^\n]*)(\n|  )te  .*  to(  |\n)/g,
    (match) => {return(returnColored(match, "#55FF55"))})
    document.getElementById("alltext").innerHTML = alltext
}