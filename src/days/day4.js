export default function day4(x) {    
    let sortedX = x.split('\n')
    sortedX = sortedX.slice(0, - 1)

    let points = 0
    let points2 = 0
    sortedX.forEach(element => {
        element = element.split(",");
        let range1 = element[0].split("-")
        let range2 = element[1].split("-")

        if (((parseInt(range1[0]) <= parseInt(range2[0])) && (parseInt(range1[1]) >= parseInt(range2[1]))) || ((parseInt(range1[0]) >= parseInt(range2[0])) && (parseInt(range1[1]) <= parseInt(range2[1])))) {
            points++
        }
    });

    //PART 2
    sortedX.forEach(element => {
        element = element.split(",");
        let range1 = element[0].split("-")
        let range2 = element[1].split("-")

        if (((parseInt(range1[1]) < parseInt(range2[0])) || (parseInt(range1[0]) > parseInt(range2[1])))) {
            
        }
        else {
            points2++
        }
    });

    return points+", "+points2
} 