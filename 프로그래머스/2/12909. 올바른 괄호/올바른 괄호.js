function solution(s){
    let arr = []
    if (s.length % 2 != 0) return false
    s.split("").forEach((str,i) =>{
        if (str == "("){
            arr.push(str)
        } else {
            if (arr.pop() != "(") return false
        }
    })
    if (arr.length>0) return false
    return true
}