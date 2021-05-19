export const setupTags = (recipes)=>{

    return recipes.reduce((prevValue, curValue)=>{
        const {content:{tags}} = curValue;
        tags.forEach((tag)=>{
            if(tag in prevValue){
                prevValue[tag]++;
            }
            else{
                prevValue[tag] = 1;
            }
        })
        return prevValue;
    }, {})

    // return tagMap
}