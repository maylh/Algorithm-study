function solution(phone_number) {
    let hidden_len = phone_number.slice(0, phone_number.length-4).length;
        
    phone_number = '*'.repeat(hidden_len)+phone_number.slice(-4)
    
    return phone_number;
}