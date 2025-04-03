function solution(n, arr1, arr2) {
    arr1 = arr1.map((a1) => {
        return "0".repeat(n-(a1.toString(2).length)) + a1.toString(2)
    })
    arr2 = arr2.map((a2) => {
        return "0".repeat(n-a2.toString(2).length) + a2.toString(2)
    })
    return arr1.map((a1,i) => {
        return a1.split("").map((aa1,j) => {
            if (aa1 == "1" || arr2[i][j] == "1") {
                return "#"
            } else {
                return " "
            }
        }).join("")
    })
}