function range(number: number): number[] {
    return Array.from({ length: number }, (_, i) => i + 1)
}

export function fizzbuzz(input: number) {
    let output = '';

    range(input).forEach((num) => {
        if (num % (3*5) === 0) output += 'fizzbuzz ';
        else if (num % 5 === 0) output += 'buzz ';
        else if (num % 3 === 0) output += 'fizz ';
        else output += `${num} `;
    });

    
    return output.trim();
}