function createCodeValidation(){
    const key = (Math.random() + 1).toString(36).substring(2).substring(0,7);
    const newKey = key.replace("a","0").replace("b", "A").replace("e", "#").replace("f", "!").replace("3", "D")

    return newKey;
}

export default createCodeValidation;