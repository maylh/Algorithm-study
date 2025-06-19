function solution(schedules, timelogs, startday) {
    // 출근 인정 시각
    const range = schedules.map((x) => {
        let h = Math.floor(x/100);
        let m = x % 100
        
        if (m + 10 >= 60) return (h+1)*100 + ((m+10) - 60);
        else return x+10;
    })
    
    // 평일 출근 시간만 필터링
    const weekdays = timelogs.map((logs) => {
        return logs.filter((_, idx) => {
            const day = ((startday + idx - 1) % 7) + 1;
            
            return day >= 1 && day <= 5; 
        
        });
    });
    
    // 성공한 날 
    const success = weekdays.map((logs, idx) => {
        return logs.filter((x) => {
            return x <= range[idx]
        });    
    });

    
    // 성공한 사람 수 반환 (성공한 날이 5일인지)
    return success.filter((logs) => logs.length === 5).length;
}