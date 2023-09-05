function solution(park, routes) {
    var answer = []
    const parkArr = park.map((a)=> [...a]);
    const [H, W] = [parkArr.length, parkArr[0].length];
    const startY = parkArr.findIndex((a) => a.includes('S'));
    const startX = parkArr[startY].findIndex((a)=> a === 'S');
    
    let current = [startY, startX]; // 시작 지점
    
    for (let i=0; i<routes.length; i++){
        var [direction, step] = routes[i].split(' ');
        if (direction === 'W' || direction === 'N')
            step *= -1;
        if (direction === 'E' || direction === 'W'){ // 동-서 이동
            var next = current[1] + Number(step);
            if (next > W - 1 || next < 0)
              continue;
            // 이동 경로
            var slicedX = direction === 'E' ? parkArr[current[0]].slice(current[1], next+1) 
            : parkArr[current[0]].slice(next, current[1]+1)
            if (slicedX.includes('X')) // 장애물 체크
                continue;
            current[1] = next
        }
        if (direction === 'N' || direction === 'S'){ // 남-북 이동
            var next = current[0] + Number(step);
            if (next > H - 1 || next < 0)
              continue;
            // 이동 경로
            var YRoutes = parkArr.map((a)=> a[current[1]]);
            var slicedY = direction === 'S' ? YRoutes.slice(current[0], next+1) 
            : YRoutes.slice(next, current[0]+1)
            if (slicedY.includes('X'))
                continue;
            current[0] = next
            
        }
    }
    answer = current;
    return answer;
}